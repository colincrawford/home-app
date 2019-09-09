// Compiled by ClojureScript 1.10.339 {}
goog.provide('web_dashboard.thermometer_readings');
goog.require('cljs.core');
/**
 * Parses a json string and returns it as a map with keywords
 */
web_dashboard.thermometer_readings.json_to_map = (function web_dashboard$thermometer_readings$json_to_map(json){
return cljs.core.js__GT_clj.call(null,JSON.parse(json),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
/**
 * Parses a thermometer reading from a json string
 */
web_dashboard.thermometer_readings.from_json = (function web_dashboard$thermometer_readings$from_json(json){
var map__22226 = web_dashboard.thermometer_readings.json_to_map.call(null,json);
var map__22226__$1 = ((((!((map__22226 == null)))?(((((map__22226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22226):map__22226);
var timestamp = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var adcValue = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"adcValue","adcValue",212530739));
var resistance = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"resistance","resistance",-1289779601));
var voltage = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"voltage","voltage",-1909388658));
var temperatureCelcius = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"temperatureCelcius","temperatureCelcius",-916502568));
var temperatureFahrenheit = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"temperatureFahrenheit","temperatureFahrenheit",1302351110));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"adc-value","adc-value",146834320),adcValue,new cljs.core.Keyword(null,"voltage","voltage",-1909388658),voltage,new cljs.core.Keyword(null,"temperature-celcius","temperature-celcius",1811177148),temperatureCelcius,new cljs.core.Keyword(null,"temperature-fahrenheit","temperature-fahrenheit",-1778009962),temperatureFahrenheit], null);
});

//# sourceMappingURL=thermometer_readings.js.map
