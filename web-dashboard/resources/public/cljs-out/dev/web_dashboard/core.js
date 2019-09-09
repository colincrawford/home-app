// Compiled by ClojureScript 1.10.339 {}
goog.provide('web_dashboard.core');
goog.require('cljs.core');
goog.require('web_dashboard.websocket');
goog.require('web_dashboard.view');
goog.require('web_dashboard.thermometer_readings');
web_dashboard.core.temperature_reading_websocket_server = "ws://localhost:9090";
web_dashboard.core.ws = cljs.core.atom.call(null,null);
web_dashboard.core.handle_ws_message_text = (function web_dashboard$core$handle_ws_message_text(msg){
var reading = web_dashboard.thermometer_readings.from_json.call(null,msg);
var fahrenheit = new cljs.core.Keyword(null,"temperature-fahrenheit","temperature-fahrenheit",-1778009962).cljs$core$IFn$_invoke$arity$1(reading);
return web_dashboard.view.update_temperature.call(null,fahrenheit);
});
web_dashboard.core.handle_ws_message = (function web_dashboard$core$handle_ws_message(message){
return web_dashboard.websocket.handle_ws_msg_text.call(null,web_dashboard.core.handle_ws_message_text,message);
});
web_dashboard.core.start_websocket = (function web_dashboard$core$start_websocket(){
var websocket = web_dashboard.websocket.create_websocket.call(null,web_dashboard.core.temperature_reading_websocket_server);
var websocket__$1 = web_dashboard.websocket.on_message.call(null,websocket,web_dashboard.core.handle_ws_message);
web_dashboard.view.ws_connected.call(null);

return cljs.core.reset_BANG_.call(null,web_dashboard.core.ws,websocket__$1);
});
web_dashboard.core.stop_websocket = (function web_dashboard$core$stop_websocket(){
if((cljs.core.deref.call(null,web_dashboard.core.ws) == null)){
return null;
} else {
cljs.core.deref.call(null,web_dashboard.core.ws).close();

web_dashboard.view.ws_disconnected.call(null);

return cljs.core.reset_BANG_.call(null,web_dashboard.core.ws,null);
}
});
web_dashboard.view.render.call(null);

//# sourceMappingURL=core.js.map
