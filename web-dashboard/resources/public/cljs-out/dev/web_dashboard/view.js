// Compiled by ClojureScript 1.10.339 {}
goog.provide('web_dashboard.view');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
web_dashboard.view.create_div = (function web_dashboard$view$create_div(properties){
var element = goog.dom.createElement("div");
var properties_obj = cljs.core.clj__GT_js.call(null,properties);
goog.dom.setProperties(element,properties_obj);

return element;
});
web_dashboard.view.get_app_element = (function web_dashboard$view$get_app_element(){
return goog.dom.getElement("app");
});
web_dashboard.view.get_connection_status_element = (function web_dashboard$view$get_connection_status_element(){
return goog.dom.getElement("connection-status");
});
web_dashboard.view.get_temperature_display_element = (function web_dashboard$view$get_temperature_display_element(){
return goog.dom.getElement("temperature-display");
});
web_dashboard.view.update_temperature = (function web_dashboard$view$update_temperature(new_temperature){
var text = ["temperature: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_temperature)," &#8457;"].join('');
var temperature_display = web_dashboard.view.get_temperature_display_element.call(null);
if((temperature_display == null)){
return null;
} else {
return goog.dom.setTextContent(temperature_display,text);
}
});
web_dashboard.view.ws_connected = (function web_dashboard$view$ws_connected(){
var temp__5457__auto__ = web_dashboard.view.get_connection_status_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var connection_status_element = temp__5457__auto__;
goog.dom.setTextContent(connection_status_element,"connected");

return goog.dom.classlist.addRemove(connection_status_element,"alert-danger","alert-success");
} else {
return null;
}
});
web_dashboard.view.ws_disconnected = (function web_dashboard$view$ws_disconnected(){
var temp__5457__auto__ = web_dashboard.view.get_connection_status_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var connection_status_element = temp__5457__auto__;
goog.dom.setTextContent(connection_status_element,"disconnected");

return goog.dom.classlist.addRemove(connection_status_element,"alert-success","alert-danger");
} else {
return null;
}
});
web_dashboard.view.render = (function web_dashboard$view$render(){
var app = web_dashboard.view.get_app_element.call(null);
var connection_status = web_dashboard.view.create_div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"connection-status",new cljs.core.Keyword(null,"className","className",-1983287057),"alert"], null));
var temperature_display = web_dashboard.view.create_div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"temperature-display"], null));
goog.dom.removeChildren(app);

goog.dom.appendChild(app,connection_status);

return goog.dom.appendChild(app,temperature_display);
});

//# sourceMappingURL=view.js.map
