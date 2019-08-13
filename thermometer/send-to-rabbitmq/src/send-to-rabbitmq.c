#include <stdio.h>
#include <stdlib.h>

#include <amqp.h>
#include <amqp_tcp_socket.h>

#define BUFFER_SIZE 1000

void die(char *);
void log_msg(char *);

int main(int argc, char **argv)
{
	// rabbitmq config
	int port = 5672;
	char const *hostname = "localhost";
	char const *exchange = "amq.direct";
	char const *routingkey = "temperature-reading";
	char const *vhost = "/";
	char const *username = "guest";
	char const *password = "guest";

	log_msg("Connecting to Rabbitmq");

	amqp_connection_state_t conn = amqp_new_connection();

	// create the amqp tcp socket
	amqp_socket_t *socket = amqp_tcp_socket_new(conn);

	if (!socket) {
		die("creating TCP socket");
	}
	log_msg("TCP socket created...");

	// open that socket to the rabbitmq server
	int status = amqp_socket_open(socket, hostname, port);
	if (status) {
		die("opening TCP socket");
	}
	log_msg("TCP socket connected to the rabbitmq server...");

	// login to rabbitmq
	amqp_rpc_reply_t login_reply = amqp_login(conn, vhost, 0, 131072, 0, AMQP_SASL_METHOD_PLAIN, username, password);

	if (login_reply.reply_type != AMQP_RESPONSE_NORMAL) {
		printf("server err -> %s\n", (char *)((amqp_connection_close_t *)login_reply.reply.decoded)->reply_text.bytes);
		die("Login request returned a non normal response");
	}
	log_msg("Login successful");

	// open a channel
        amqp_channel_open(conn, 1);

	if (amqp_get_rpc_reply(conn).reply_type != AMQP_RESPONSE_NORMAL) {
		die("Channel open request returned a non normal response");
	}
	log_msg("Channel opened");

	// send each line of stdin as a message
	char message[BUFFER_SIZE];
	while (fgets(message, BUFFER_SIZE, stdin))
	{
		amqp_basic_properties_t props;
		props._flags = AMQP_BASIC_CONTENT_TYPE_FLAG | AMQP_BASIC_DELIVERY_MODE_FLAG;
		props.content_type = amqp_cstring_bytes("text/plain"); // or application/json
		props.delivery_mode = 2; /* persistent delivery mode */
		amqp_basic_publish(conn, 1, amqp_cstring_bytes(exchange),
				   amqp_cstring_bytes(routingkey), 0, 0,
				   &props, amqp_cstring_bytes(message));
		
	}
}

void die(char *message)
{
	printf("Died -> %s\n", message);
	fflush(stdout);
	exit(1);
}

void log_msg(char *message)
{
	printf("%s\n", message);
	fflush(stdout);
}
