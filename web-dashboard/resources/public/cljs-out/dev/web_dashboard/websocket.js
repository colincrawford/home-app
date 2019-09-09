// Compiled by ClojureScript 1.10.339 {}
goog.provide('web_dashboard.websocket');
goog.require('cljs.core');
/**
 * Create a js websocket object
 */
web_dashboard.websocket.create_websocket = (function web_dashboard$websocket$create_websocket(url){
return (new WebSocket(url));
});
/**
 * Adds a message handler for websocket message events
 */
web_dashboard.websocket.on_message = (function web_dashboard$websocket$on_message(websocket,message_handler){
websocket.addEventListener("message",message_handler);

return websocket;
});
/**
 * Extracts the text from a websocket message and provides
 * it to a handler fn
 */
web_dashboard.websocket.handle_ws_msg_text = (function web_dashboard$websocket$handle_ws_msg_text(text_handler,message){
return message.data.text().then(text_handler);
});

//# sourceMappingURL=websocket.js.map
