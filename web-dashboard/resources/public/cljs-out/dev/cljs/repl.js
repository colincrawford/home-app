// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19224){
var map__19225 = p__19224;
var map__19225__$1 = ((((!((map__19225 == null)))?(((((map__19225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19225):map__19225);
var m = map__19225__$1;
var n = cljs.core.get.call(null,map__19225__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19225__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19227_19249 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19228_19250 = null;
var count__19229_19251 = (0);
var i__19230_19252 = (0);
while(true){
if((i__19230_19252 < count__19229_19251)){
var f_19253 = cljs.core._nth.call(null,chunk__19228_19250,i__19230_19252);
cljs.core.println.call(null,"  ",f_19253);


var G__19254 = seq__19227_19249;
var G__19255 = chunk__19228_19250;
var G__19256 = count__19229_19251;
var G__19257 = (i__19230_19252 + (1));
seq__19227_19249 = G__19254;
chunk__19228_19250 = G__19255;
count__19229_19251 = G__19256;
i__19230_19252 = G__19257;
continue;
} else {
var temp__5457__auto___19258 = cljs.core.seq.call(null,seq__19227_19249);
if(temp__5457__auto___19258){
var seq__19227_19259__$1 = temp__5457__auto___19258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19227_19259__$1)){
var c__4351__auto___19260 = cljs.core.chunk_first.call(null,seq__19227_19259__$1);
var G__19261 = cljs.core.chunk_rest.call(null,seq__19227_19259__$1);
var G__19262 = c__4351__auto___19260;
var G__19263 = cljs.core.count.call(null,c__4351__auto___19260);
var G__19264 = (0);
seq__19227_19249 = G__19261;
chunk__19228_19250 = G__19262;
count__19229_19251 = G__19263;
i__19230_19252 = G__19264;
continue;
} else {
var f_19265 = cljs.core.first.call(null,seq__19227_19259__$1);
cljs.core.println.call(null,"  ",f_19265);


var G__19266 = cljs.core.next.call(null,seq__19227_19259__$1);
var G__19267 = null;
var G__19268 = (0);
var G__19269 = (0);
seq__19227_19249 = G__19266;
chunk__19228_19250 = G__19267;
count__19229_19251 = G__19268;
i__19230_19252 = G__19269;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19270 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19270);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19270)))?cljs.core.second.call(null,arglists_19270):arglists_19270));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19231_19271 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19232_19272 = null;
var count__19233_19273 = (0);
var i__19234_19274 = (0);
while(true){
if((i__19234_19274 < count__19233_19273)){
var vec__19235_19275 = cljs.core._nth.call(null,chunk__19232_19272,i__19234_19274);
var name_19276 = cljs.core.nth.call(null,vec__19235_19275,(0),null);
var map__19238_19277 = cljs.core.nth.call(null,vec__19235_19275,(1),null);
var map__19238_19278__$1 = ((((!((map__19238_19277 == null)))?(((((map__19238_19277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19238_19277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19238_19277):map__19238_19277);
var doc_19279 = cljs.core.get.call(null,map__19238_19278__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19280 = cljs.core.get.call(null,map__19238_19278__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19276);

cljs.core.println.call(null," ",arglists_19280);

if(cljs.core.truth_(doc_19279)){
cljs.core.println.call(null," ",doc_19279);
} else {
}


var G__19281 = seq__19231_19271;
var G__19282 = chunk__19232_19272;
var G__19283 = count__19233_19273;
var G__19284 = (i__19234_19274 + (1));
seq__19231_19271 = G__19281;
chunk__19232_19272 = G__19282;
count__19233_19273 = G__19283;
i__19234_19274 = G__19284;
continue;
} else {
var temp__5457__auto___19285 = cljs.core.seq.call(null,seq__19231_19271);
if(temp__5457__auto___19285){
var seq__19231_19286__$1 = temp__5457__auto___19285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19231_19286__$1)){
var c__4351__auto___19287 = cljs.core.chunk_first.call(null,seq__19231_19286__$1);
var G__19288 = cljs.core.chunk_rest.call(null,seq__19231_19286__$1);
var G__19289 = c__4351__auto___19287;
var G__19290 = cljs.core.count.call(null,c__4351__auto___19287);
var G__19291 = (0);
seq__19231_19271 = G__19288;
chunk__19232_19272 = G__19289;
count__19233_19273 = G__19290;
i__19234_19274 = G__19291;
continue;
} else {
var vec__19240_19292 = cljs.core.first.call(null,seq__19231_19286__$1);
var name_19293 = cljs.core.nth.call(null,vec__19240_19292,(0),null);
var map__19243_19294 = cljs.core.nth.call(null,vec__19240_19292,(1),null);
var map__19243_19295__$1 = ((((!((map__19243_19294 == null)))?(((((map__19243_19294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19243_19294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19243_19294):map__19243_19294);
var doc_19296 = cljs.core.get.call(null,map__19243_19295__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19297 = cljs.core.get.call(null,map__19243_19295__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19293);

cljs.core.println.call(null," ",arglists_19297);

if(cljs.core.truth_(doc_19296)){
cljs.core.println.call(null," ",doc_19296);
} else {
}


var G__19298 = cljs.core.next.call(null,seq__19231_19286__$1);
var G__19299 = null;
var G__19300 = (0);
var G__19301 = (0);
seq__19231_19271 = G__19298;
chunk__19232_19272 = G__19299;
count__19233_19273 = G__19300;
i__19234_19274 = G__19301;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__19245 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19246 = null;
var count__19247 = (0);
var i__19248 = (0);
while(true){
if((i__19248 < count__19247)){
var role = cljs.core._nth.call(null,chunk__19246,i__19248);
var temp__5457__auto___19302__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19302__$1)){
var spec_19303 = temp__5457__auto___19302__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19303));
} else {
}


var G__19304 = seq__19245;
var G__19305 = chunk__19246;
var G__19306 = count__19247;
var G__19307 = (i__19248 + (1));
seq__19245 = G__19304;
chunk__19246 = G__19305;
count__19247 = G__19306;
i__19248 = G__19307;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__19245);
if(temp__5457__auto____$1){
var seq__19245__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19245__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__19245__$1);
var G__19308 = cljs.core.chunk_rest.call(null,seq__19245__$1);
var G__19309 = c__4351__auto__;
var G__19310 = cljs.core.count.call(null,c__4351__auto__);
var G__19311 = (0);
seq__19245 = G__19308;
chunk__19246 = G__19309;
count__19247 = G__19310;
i__19248 = G__19311;
continue;
} else {
var role = cljs.core.first.call(null,seq__19245__$1);
var temp__5457__auto___19312__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19312__$2)){
var spec_19313 = temp__5457__auto___19312__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19313));
} else {
}


var G__19314 = cljs.core.next.call(null,seq__19245__$1);
var G__19315 = null;
var G__19316 = (0);
var G__19317 = (0);
seq__19245 = G__19314;
chunk__19246 = G__19315;
count__19247 = G__19316;
i__19248 = G__19317;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
