/*
 * Copyright (c) 2025 (Carlos F. Gorosito)[carlos.gorosito@gmail.com]
 *
 * Se permite la copia, distribución y uso del presente código, con o sin modificaciones,
 * siempre que se otorgue el debido crédito al autor original, Carlos Fernando Gorosito.
 *
 * Este código se proporciona "tal cual", sin ninguna garantía expresa o implícita.
 * El autor no se hace responsable de ningún daño o perjuicio derivado del uso de este código.
 *
 * Al utilizar este código, aceptas incluir una mención clara a Carlos Fernando Gorosito como autor
 * original en cualquier redistribución o trabajo derivado.
*/
var UU = typeof(window) === "undefined" ? global : window ;
UU.Habilitar=UU.Instalar=UU.Detectar=UU.Generar={} ;
UU.version__ = 1.01 ;
UU.QRYS = "querySelector" ; UU.QRYSA = "querySelectorAll"; UU.AELT="addEventListener";UU.RELT="removeEventListener";UU.CREL="createElement";UU.RPL="replace";UU.FCH="forEach";UU.CLST="classList";UU.APCD="appendChild";UU.RATT="removeAttribute"
UU.PRIMERO=UU.PRIMERA=UU.PRIMER=0; UU.SEGUNDO=UU.SEGUNDA=1; UU.TERCER=UU.TERCERO=UU.TERCERA=2 ; UU.ULTIMO=UU.ULTIMA=-1; UU.ANTEULTIMO=UU.ANTEULTIMA=-2;
UU.DOC=document
UU.Cada=UU.cada=function cada(_tiempo,_fn){return _fn.cada(_tiempo)}
UU.PRT = "prototype" ; UU.indefinido = "[-]"; UU.HATT = "hasAttribute"; UU.GATT = "getAttribute"; UU.SATT = "setAttribute" ;
UU.Frase = UU.FRA = String ; UU.Funcion = UU.FNC = Function ; UU.Numero = UU.NUM = Number; UU.Lista =UU.LST = Array ; UU.Objeto =UU.OBT = Object ; UU.Verdad=UU.VDD = Boolean ; UU.PTN = RegExp;
function defNoEnum(o,P,f) {
  let i="includes",s="split"
    if(P[i](","))P=P[s](",");if(P[i](";"))P=P[s](";");if(P[i]("0"))P=P[s]("0");if(P[i](" "))P=P[s](" ");
    if(!Array.isArray(P))P=[P];
    for(_orden in P){
        _P=P[_orden];if(o.prototype[_P])return;Object.defineProperty(o.prototype,_P,{value:f,enumerable:false})
    }
}; UU.DNE = defNoEnum;
function defNoEnumProp(o,P,f) {let i="includes",s="split"
    if(P[i](","))P=P[s](",");if(P[i](";"))P=P[s](";");if(P[i]("0"))P=P[s]("0");if(P[i](" "))P=P[s](" ");
    if(!Array.isArray(P))P=[P];
    for(_orden in P){
        _P=P[_orden];if(o.prototype[_P])return;Object.defineProperty(o.prototype,_P,{get:f,enumerable:false})
    }
}; UU.DNEP = defNoEnumProp ;
async function esperar(_s) {
    return new Promise(function(ok){
        setTimeout(ok,_s)
    })
}
DNE(OBT,"_tipo",function(_c){if(!_c)return OBT.prototype.toString.call(this).slice(8,-1).toLowerCase();return this._tipo()==_c});
DNEP(OBT,"_esFuncion",function(){return this._tipo()=="function"})
DNEP(OBT,"_esString,_esFrase,_esTexto",function(){return this._tipo()=="string"})
DNEP(OBT,"_esLista,_esArray",function(){return this._tipo()=="array"})
DNEP(OBT,"__log",function(){console.log(this);return this})
DNEP(OBT,"__table",function(){console.table(this);return this})
DNE(OBT,"tiene",function(...a){for(i of a)if(i in this)return true;return false})
DNEP(OBT,"__copiar",function(){let _c = document.createElement("textarea");_c.value = JSON.stringify(this);document.body.appendChild(_c);_c.select() ;document.execCommand("copy") ;_c.remove() ;})
DNE(FRA,"printf0pf",function(...args) {
let argIndex = 0;
let s = this[RPL+"All"](/TANTOS#|TANTAS#|TANTO#|TANTA#/g, "%s") ;
return s[RPL](/%%|%(\d+)?([.,])?(\d+)?([sdifoj])/g,
(mt,wd,sp,pc,tp)=>{if(mt==="%%")return"%";let value=args[argIndex++];let num;switch(tp){
case"s":if(wd)return FRA(value).padStart(wd," ");return FRA(value);
case"d":case"i":num=parseInt(value,10);if(wd)return(num+"").padStart(wd,"0");return num;
case"f":num=parseFloat(value);if(isNaN(num))return "NaN";if(pc!==undefined)num=num.toFixed(parseInt(pc));let result=FRA(num);if(sp===",")result=result[RPL](".", ",");return result;
case"o":case"j":try{return JSON.stringify(value,null,2);}catch{return"[Objeto]";}
default:return mt;
}})})
function Procesar( $Frase, $cnDatos, $delimitadores = /{(.*?)}/g ) {
$cnDatos=$cnDatos||{};
$$=$Frase[RPL]($delimitadores,function(a,b){
c="";if(b.includes("[")){c=(b[RPL](/\[(.*?)\]/g,function(a,b){return"$cnDatos['"+b+"']"})[RPL](/&lt;/g, "<")[RPL](/&gt;/g, ">"));
if(c.trim()!="")c=eval(c)}else if(b.includes("||")){$b=b.split("||");c=$cnDatos[$b[0]]==undefined?$b[1]:$cnDatos[$b[0]]}else{c=$cnDatos[b]==undefined?UU.indefinido:$cnDatos[b]}return c});
return $$}
function PF(_s){return function(...p){return (Array.isArray(_s)?_s[0]:_s).pf(...p)}}
DNE(OBT,"formatear",function(_msj){return _msj.formato(this)})

DNE(FNC,"en",function(_s){return setTimeout(this,_s*1000)})
DNE(FNC,"cada",function(_s){this();return setInterval(this,_s)})
DNE(FNC,"de",function(...a){return this(...a)})

DNE(NUM,"cancelar",function(){clearTimeout(this);clearInterval(this)})
DNE(NUM,"repetir",function(_x){_x();return setInterval(_x,this)})
DNE(NUM,"luego,despues",function(_x){return setTimeout(_x,this)})
DNE(NUM,"items",function(_min=1){let r=[];for(let _i=_min;_i<(this+_min);_i++)r.push(_i);return r})
DNE(NUM,"veces",function(fn){return fn._esFuncion?this.items()[FCH](fn):fn._tipo("string")?fn.repeat(this):this*fn})
DNE(NUM,"entre",function(_min,_max,_minInc=false, _maxInc=false) {
    let _m = _minInc ? (this >= _min) : (this > _min) ;
    let _M = _maxInc ? (this <= _max) : (this < _max) ;
    return _m && _M
})
DNE(NUM,"de0por0multiplicado",function(_otro){return this*_otro})
DNE(NUM,"menos0restar0restado",function(_otro){return this-_otro})
DNE(NUM,"mas0sumar",function(_otro){return this+_otro})
DNE(NUM,"raiz",function(_n) {
    if( !_n ) return Math.sqrt(this) ;
    return Math.pow(this, 1/_n)
})
DNE(NUM,"elevado",function(_n) {
    if( !_n ) return this ;
    return Math.pow(this, _n)
})
DNEP(NUM,"masTarde",function(){return __ahora.mas(this)})
DNEP(NUM,"cualquiera0cualesquiera",function(){return Math.random()*this})
DNEP(NUM,"entero",function(){return Math[this>0?"floor":"ceil"](this)})
DNEP(NUM,"esFecha",function() {return new Date(this)})
DNEP(NUM,"segundos,segundo",function(){return this*1000})
DNEP(NUM,"minuto,minutos",function(){return this.segundo*60})
DNEP(NUM,"hora,horas",function(){return this.minuto*60})
DNEP(NUM,"dia,dias,día,días",function(){return this.hora*24})
DNEP(NUM,"semana,semanas",function(){return this.dia*7})
DNEP(NUM,"mes,meses",function(){return this.dia*30})
DNEP(NUM,"enGrados",function(){return this/Math.PI*180})
DNEP(NUM,"enRadianes,grados,grado",function(){return this*Math.PI/180})
DNEP(NUM,"radianes",function(){return this})
DNEP(NUM,"porciento",function(){return this/100})
DNEP(NUM,"antes0hace",function(){return __ahora.menos(this)})
DNEP(NUM,"absoluto0positivo0abs0pos0modulo",function(){return Math.abs(this)})
DNEP(NUM,"seno",function(){return Math.sin(this)})
DNEP(NUM,"coseno",function(){return Math.cos(this)})
DNEP(NUM,"tangente",function(){return Math.tan(this)})
DNEP(NUM,"arcoTangente",function(){return Math.atan(this)})

DNEP(FRA,"spz",function(){return this.split(0)})
DNEP(FRA,"sp_",function(){return this.split(" ")})
DNEP(FRA,"spn", function(){return this.split("\n")})
DNEP(FRA,"spp", function(){return this.split(".")})
DNEP(FRA,"spc", function(){return this.split(",")})
DNEP(FRA,"sppc", function(){return this.split(";")})
DNEP(FRA,"spt", function(){return this.split("\t")})
DNEP(FRA,"_html0htmls",function(){return [...DOC[QRYSA](this)]})
DNEP(FRA,"_html10html",function(){return [...DOC[QRYSA](this)].primer})
DNEP(FRA,"enBase64",function(){return UU.btoa(unescape(encodeURIComponent(this)))})
DNEP(FRA,"esBase64",function(){return decodeURIComponent(escape(UU.atob(this)))})
DNEP(FRA,"nuevoHTML",function(){return this.crearHTML("")})
DNEP(FRA,"nuevoSVG",function(){return this.crearHTML("",{svg:1})})
DNEP(FRA,"esFecha",function() {return new Date(this)})
DNEP(FRA, "patroni", function(){ return this.patron("i") } )
DNEP(FRA,"minusculas,minus,min",function(){return this.toLowerCase()})
DNEP(FRA,"mayusculas,mayus,may",function(){return this.toUpperCase()})
DNEP(FRA,"largo0longitud0cantidadCaracteres",function(){return this.length})
DNEP(FRA,"comoJSON,esJSON,asJSON",function(){return JSON.parse(this)})
DNEP(FRA,"sql",function(){return UU.baseActiva?.exec(this,_dt) || "No hay base activa"})
DNE(FRA,"entre",function(...a){for(var i in a)if(a[i]==this)return+i+1;return 0})
DNE(FRA,"patron",function(_ex="i") {
    return new RegExp( this.replaceAll("**", "(.*?)").replace(/{\?(.*?)\?}/gi, function(a,b){return "(?<"+b+">.+)"}), _ex )
})
DNE(FRA,"prepararCSV",function(_coma=",",_reng="\n", _fn=(x=>x)){
    return this
        .split(_reng)
        .map(function(_cR){
            console.log( "RENG:", _cR )
            _r = _cR.split(_coma).map(_fn) ;
            return _r ;
        })
    ;
})
DNE(FRA,"incluye,incluyei",function(...d){let t=this;return d.some(function(i){return t.min.includes(i.toString().min)})})
DNE(FRA,"runSQL",function(_db,_dt){return _db.run(this,_dt)})
DNE(FRA,"execSQL",function(_db,_dt){return _db.exec(this,_dt)})
DNE(FRA,"formato",function(_data){return Procesar(this,_data)})
DNE(FRA,"extraerNumeros0soloNumeros",function(i){if(i){return this[RPL](/(\,+\s)/g,"___COMA___")[RPL](/\,/g,".").extraerNumeros()}return this.match( /[+-]?\d+(?:\.\d+)?/g ).map(function(n){return +n})})
DNE(FRA,"extraerGrupo",function(_coincidencias){
    let r=[10].rango.fill("");this.split("").forEach(function(l,o){if( !isNaN(_coincidencias[o]) ) r[_coincidencias[o]]+=l});return r
})
DNE(FRA,"numero",function(er=NaN){try{x=this.extraerNumeros();return x[0]}catch(e){return er}})
DNE(FRA,"buscarID",function(_d=DOC){return _d.getElementById(this)})
DNE(FRA,"buscarClass", function(_d=DOC){ return [..._d.getElementsByClassName(this)]})
DNE(FRA,"buscarHTML0buscar",function(_d=DOC,_1=false){let r=[..._d[QRYSA](this)];return _1?r[0]:r})
DNE(FRA,"extraer",function(patron) {
  let regexString = patron.replace(/[-\/\\^$+?.()|[\]{}]/g, '\\$&');
  regexString = regexString.replace(/x/g, '(.+?)');
  const regex = new RegExp('^' + regexString + '$');
  const matches = this.match(regex);
  if (!matches) return null;
  return matches.slice(1).map(value => {
    return isNaN(value) ? value : Number(value);
  });
})
DNE(FRA,"decirEnVozAlta",function(_opc={}) {return hablar( this, _opc )});
DNE(FRA,"lisp",function() {return lispToDOM( this )})
DNE(FRA,"cargarJS",function() {return cargarJS(this)})
DNE(FRA,"cargarCSS",function() {return cargarCSS(this)})
DNE(FRA,"fecha",function( _dadaFecha=new Date ) {return _dadaFecha.frase(this)})
DNE(FRA,"uno",function(_d=DOC){return _d[QRYS](this)})
DNE(FRA,"buscarEtiqueta",function(_d=DOC){return [..._d.getElementsByTagName(this)]})
DNE(FRA,"fetch",function(_opcs={},_modo=JSON){return fetch(this,_opcs).then(x=>_modo===JSON?x.json():x[_modo]())})
DNE(FRA,"pre",function(_n){return _n+this})
DNE(FRA,"pos",function(_n){return this+_n})
DNE(FRA,"crearHTML", function(_contenido,_atris={}){if(arguments.length==1){_atris=_contenido;_contenido=_atris.contenido||_atris.text||"Hola"}let _x=(_atris.svg)?DOC[CREL+"NS"]("http://www.w3.org/2000/svg",this):DOC[CREL](this);_x.innerHTML=_contenido;for(let _i in _atris){_x.setAttribute(_i,_atris[_i])};return _x})
DNE(FRA,"esLinkCSS",function(){return _l="link".crearHTML("",{rel:"stylesheet",href:this})})
DNE(FRA,"textoDe",function(_obj){_obj.innerHTML=this})
DNE(FRA,"izq,izquierda",function(_n){
    return _n._tipo("number") ? (this.slice(0,_n)) : (this.slice(0,_n.length) == _n) ;
})
DNE(FRA,"der,derecha",function(_n){
    return _n._tipo("number") ? this.substring(_n) : (this.substring(_n.length) == _n ) ;
})
DNE(FRA,"aObjeto",function(_in=">>",_ex=";"){
    let l = this.split(_ex), r={} ;
    l[FCH](n=>{
        let i = n.split(_in) ; r[i[0].trim()] = i[1] ;
    })
    return r;
})
function ID(_frases){return document.querySelectorAll("#"+_frases[0])[0]}
function CLASS(a){return a[0].buscarClass()}
function ATR(a){return "[%s]".pf(a[0]).buscar()}
function TODOS(a){return a[0].buscar()}
function PP(a){return a[0].buscar().primer}
function Patron([a]){return a.p}
function BB(_f){ return _f[0]._html }
function CC(_f){ return _f[0].nuevoHTML }
function SS(_f){ return _f[0].nuevoSVG }
function HTTPS(_f){return "https://"+(_f._tipo("string")?_f:_f[0])}
function FETCH(_f){return _f._tipo("string")?_f.fetch:_f[0].fetch}
function crearHTML(_eti,_esNS){ let _l = DOC[CREL + (_esNS?"NS":"")](_eti);return _l }
function N(a,b){return a._tipo("number")?(Math.sign(a)*(Math.abs(a)+(b||0)/(10**Math.abs(b||0).toString().length))):NUM(a[0].replace(",","."))}
UU.TEXTO = "text" ; UU.ARCHIVO = "blob" ;
UU.medir = function(){return{interior:{x:UU.innerWidth,y:UU.innerHeight},exterior:{x:UU.outerWidth,y:UU.outerHeight},pantalla:{x:screen.availWidth,y:screen.availHeight},proporcion:UU.innerWidth/UU.innerHeight}};
UU.medir.objeto=function(dadoObjeto){let s=dadoObjeto.getBoundingClientRect();return {ini:{x:s.left,y:s.top},fin:{x:s.right,y:s.bottom},ancho:s.width,alto:s.height,altura:s.height,extension:{x:s.width,y:s.height}}}
function makeDraggable(s) {
DOC[QRYSA](s)[FCH](h => {
const dl = h.closest("dialog"),dc=DOC;
if (!dl) return;
let ofx=0,ofy=0,dr=false;
h.style.cursor="move";
h.style.userSelect="none";
h[AELT]("pointerdown", e => {
dr=true;
const rect=dl.getBoundingClientRect()
ofx=e.clientX-rect.left
ofy=e.clientY-rect.top
dl.style.position="fixed"
dl.style.margin=0
h.setPointerCapture(e.pointerId);
dc[AELT]("pointermove",fm);
dc[AELT]("pointerup",fs);
dl.style.left="%spx".pf(e.clientX-ofx);
dl.style.top="%spx".pf(e.clientY-ofy);
});
function fm(e) {
if(!dr)return
dl.style.left=(e.clientX-ofx)+"px";
dl.style.top=(e.clientY-ofy)+"px";
}
function fs(e) {
dr = false
dc[RELT]("pointermove",fm)
dc[RELT]("pointerup",fs)
h.releasePointerCapture(e.pointerId)
}
});
}

Object.defineProperty(UU,"__ahora",{get:function(){return new Date()}})
Object.defineProperty(UU,"__ayer",{get:function(){return __ahora.menos(1..dia)}})
Object.defineProperty(UU,"__anteayer",{get:function(){return __ahora.menos(2..dias)}})
Object.defineProperty(UU,"__mañana",{get:function(){return __ahora.mas(1..dia)}})
Object.defineProperty(UU,"__pasadomañana",{get:function(){return __ahora.mas(2..dias)}})
Object.defineProperty(UU,"BODY",{get:function(){return document.body}})
UU.Meses = "Enero0Febrero0Marzo0Abril0Mayo0Junio0Julio0Agosto0Septiembre0Noviembre0Diciembre".split(0)
UU.DiasSem = "Domingo0Lunes0Martes0Miércoles0Jueves0Viernes0Sábado".split(0)
UU.Meses3 = Meses.map(x=>x.substr(0,3))
UU.DiasSem3 = DiasSem.map(x=>x.substr(0,3))

UU.Fecha = UU.FEC=Date ;
DNEP(FEC,"hora",function(){return this.getHours()})
DNEP(FEC,"minu",function(){return this.getMinutes()})
DNEP(FEC,"segu",function(){return this.getSeconds()})
DNEP(FEC,"mili",function(){return this.getMilliseconds()})
DNEP(FEC,"dia",function(){return this.getDate()})
DNEP(FEC,"mes",function(){return this.getMonth()+1})
DNEP(FEC,"año",function(){return this.getFullYear()})
DNEP(FEC,"principio",function(){this.setHours(0,0,0,0);return this;})
DNE(FEC,"objeto",function() {
    return {anio: this.getFullYear(), mes: this.getMonth(), dia: this.getDate(), diaSemana: this.getDay()
        , hora: this.getHours(), min: this.getMinutes(), seg: this.getSeconds(), ms: this.getMilliseconds()
    } 
})
DNE(FEC,"mas,sumar,sumado",function(_otraFecha) {
    return new Date( +this + +_otraFecha );
})
DNE(FEC,"hace,menos,restar,restado",function(_otraFecha) {
    return new Date( +this - +_otraFecha );
})
DNE(FEC,"frasei",function dateFormat(fmt="Y-m-d H:i:s") { // Formato de PHP
  let date = this ;
  const pad=(n)=>FRA(n).padStart(2,'0');
  let DT="getDate",DIA="getDay",MES="getMonth",ANI="getFullYear",HOR="getHours";
  const map = {
    d:()=>pad(date[DT]()),j:()=>date[DT](),D:()=>DiasSem3[date[DIA]()],l:()=>DiasSem[date[DIA]()],
    m:()=>pad(date[MES]()+1),n:()=>date[MES]()+1,M:()=>Meses3[date[MES]()],F:()=>Meses[date[MES]()],
    Y:()=>date[ANI](),y:()=>FRA(date[ANI]()).slice(-2),H:()=>pad(date[HOR]()),G:()=>date[HOR](),
    h:()=>pad((date[HOR]()%12)||12),g:()=>(date[HOR]()%12)||12,i:()=>pad(date.getMinutes()),
    s:()=>pad(date.getSeconds()),a:()=>date[HOR]()<12?'am':'pm',A:()=>date[HOR]()<12?'AM':'PM',
  };
  return _r= fmt[RPL](/\\?([a-zA-Z])/g, (mt, tk) => {
        if (mt.startsWith('\\')) return tk;
        return map[tk] ? map[tk]() : tk;
    });
})

DNE(FEC,"frase",function dateFormat(fmt="Y-m-d H:i:s") {
  let date = this ;
  const pad=(n)=>FRA(n).padStart(2,'0');
  let DT="getDate",DIA="getDay",MES="getMonth",ANI="getFullYear",HOR="getHours";
  const map = {
    d:()=>pad(date[DT]()),
    j:()=>date[DT](),
    D:()=>DiasSem3[date[DIA]()],
    l:()=>DiasSem[date[DIA]()],
    m:()=>pad(date[MES]()+1),
    n:()=>date[MES]()+1,
    M:()=>Meses3[date[MES]()],
    F:()=>Meses[date[MES]()],
    Y:()=>date[ANI](),
    y:()=>FRA(date[ANI]()).slice(-2),
    H:()=>pad(date[HOR]()),
    G:()=>date[HOR](),
    h:()=>pad((date[HOR]()%12)||12),
    g:()=>(date[HOR]()%12)||12,
    i:()=>pad(date.getMinutes()),
    s:()=>pad(date.getSeconds()),
    a:()=>date[HOR]()<12?'am':'pm',
    A:()=>date[HOR]()<12?'AM':'PM',
  };
  const parseFormat = (formatStr) =>
    formatStr.replace(/\\?([a-zA-Z])/g, (mt, tk) => {
      if (mt.startsWith('\\')) return tk;
      return map[tk] ? map[tk]() : tk;
    });
  if (/\{[^{}]+\}/.test(fmt)) {
    return fmt.replace(/\{([^{}]+)\}/g, (_, inner) => {
      return parseFormat(inner);
    });
  }
  return parseFormat(fmt);

});
DNE(FEC,"entre",function(_min,_max,_minInc=false, _maxInc=false) {
    let _m = _minInc ? (this >= _min) : (this > _min) ;
    let _M = _maxInc ? (this <= _max) : (this < _max) ;
    return _m && _M
})

DNEP(LST,"rango",function(){
    let _l=this.length,i1=this.primero,i2=this.segundo,_r=[];
    if(_l==0)return [];if(_l==1)return i1.items();if(_l==2)return (Math.abs(i2-i1)+1).items( i1<i2?i1:i2 );
    let _c = i1<i2?i1:i2, _max=i1<i2?i2:i1;for( _i=_c;_i<=_max;_i+=this[2] ) _r.push(_i);return _r
})
DNEP(LST,"reg",function(){
    let _r = {}
    this.forEach(function(_i,_o){ _r[_i] = _i })
    return _r
})
DNEP(LST,"unicos",function(){return LST.from(new Set(this))})
DNEP(LST,"s0",function(){return this.split(0)})
DNEP(LST,"sc",function(){return this.split(",")})
DNEP(LST,"mezclado0mezclada0mezclados0mezcladas", function(){return this.sort(function(){return Math.random()-0.5})})
DNEP(LST,"cualquiera",function(){return this[this.length.cualquiera.entero]})
DNEP(LST,"primer,primero,primera",function(){return this[0]})
DNEP(LST,"segundo,segunda",function(){return this[1]})
DNEP(LST,"ultimo,ultima",function(){return this.at(-1)})
DNEP(LST,"anteUltimo,anteUltima,penultimo,penultima",function(){return this.at(-2)})
DNEP(LST,"antePenultimo,antePenultima",function(){return this.at(-3)})
DNEP(LST,"largo0longitud0cantidadItems0cantidad0cant",function(){return this.length})
DNE(LST,"mezclar", function(){return this.sort(function(){return Math.random()-0.5})})

function fndialogo(_cont,_opc={},fnOk=null,fnNo=null){
if(!_cont?._tipo().entre("string","number")){
if(fnOk?._esFuncion)fnNo=fnOk;
if(_opc?._esFuncion)fnOk=_opc;
_opc=_cont;
_opc = structuredClone(_opc);
_cont=_opc.mensaje||_opc.contenido||_opc.texto||_opc.codigo||_opc.html;
}

  const promesa = new Promise(async resolve => {
    const {titulo = "",abajo = false,fondo = null,tiempo = null} = _opc;

    if( _opc.opciones )console.log( _opc.opciones, _opc.opciones._tipo(), _opc.lista );

    const dlg = DOC[CREL]("dialog");
    dlg.className = "fn-dialogo";

    dlg.innerHTML = `
      <form method="dialog" class="dialogo-form">
        ${titulo ? `<header><h2>${titulo}</h2></header>` : ""}
        <section class="contenido">${_cont}</section>
        <hr>
        
        ${ !_opc.sinBotones ?
          `<nav>${ !_opc.sinAceptar ? `<button value="ok">${ _opc.aceptar ?? "Aceptar" }</button>` :"" }
          ${ _opc.sinCancelar ? "" : "<button value='no'>%s</button>".pf(_opc.cancelar || "Cancelar")}
          ${ _opc.escuchar||_opc.mic||_opc.microfono ? `<button type="button" class="btn-escuchar">🎤</button>` : "" }
          ${ _opc.otros ? (function(){
            let _r = "" ;
            for( i in _opc.otros ) {
                _r += `<button value="%s">%s</button>`.pf( i, _opc.otros[i] )
            }
            return _r 
          })() : "" }
          </nav>`:"" }
      </form>
    `;
    if( _opc.activarMic ) setTimeout(function(){
        dlg.querySelector(".btn-escuchar").click() ;
    }, 1000)

    if( _opc.decirEnVozAlta || _opc.enVozAlta || _opc.hablar ) {
        (_opc.original||_cont).decirEnVozAlta() ;
    }

    if (fondo) dlg.style.background = `url(%s) center / cover`.pf(fondo);
    if (abajo) dlg.style.alignSelf = "flex-end";
    if(_opc.opacidad) dlg.style.opacity=_opc.opacidad;
    if( _opc.x || _opc.y ) {
        dlg.style.opacity = 0
        dlg.style.position = "fixed";
        dlg.style.margin = 0 ;
        setTimeout(
          function() {
            let xy = medir.objeto(dlg)
            dlg.style.left = "%spx".pf((_opc.x+xy.ancho)>innerWidth ? innerWidth-xy.ancho:_opc.x  || 0);
            dlg.style.top  = "%spx".pf(
              (
                (_opc.y+xy.alto)>innerHeight 
                ? innerHeight-xy.alto
                : _opc.y
              ) 
              || 0
            );
            dlg.style.opacity = _opc.opacidad || 1
          }
          ,100
        )
    }
    DOC.body[APCD](dlg);
    if (_opc.escuchar||_opc.mic||_opc.microfono) {
        const _bt = dlg[QRYS](".btn-escuchar");

        _bt?.[AELT]("click", async () => {
            console.log("Por escuchar")
            try {
            _bt.disabled = true;
            _bt.textContent = "🎙️...";

            let texto = await escuchar();

            _bt.disabled = false;
            _bt.textContent = "🎤";

            if (!texto.error && texto) {
                let input = dlg[QRYS]("input, textarea");
                if (input) {
                    input.value = texto;
                    
                }
            }
            input.focus();input.select();
            } catch (e) {
            _bt.disabled = false;
            _bt.textContent = "🎤";
            input = dlg[QRYS]("input,textarea")
            input.focus();input.select();
            }
        });
    }
    let cerradoPor = null;
    let timer = null;
    dlg[AELT]("cancel", e => {
      e.preventDefault();
      cerradoPor = "esc";
      dlg.close();
    });
    dlg[AELT]("click", e => {
      if( !(e.clientX+e.clientY) ) return ;
      if( _opc.importante ) return ;
      let {ini,fin} = medir.objeto( dlg )
      if ( !e.clientX.entre(ini.x,fin.x) || !e.clientY.entre(ini.y,fin.y) ) {
        cerradoPor = "click fuera";
        dlg.close();
      }
    });
    if( _opc.fuera ) dlg[AELT]("mousemove", e => {
      if( !(e.clientX+e.clientY) ) return ;
      if( _opc.importante ) return ;
      let {ini,fin} = medir.objeto( dlg )
      if ( !e.clientX.entre(ini.x,fin.x) || !e.clientY.entre(ini.y,fin.y) ) {
        cerradoPor = "click fuera";
        dlg.close();
      }
        
    })
    if (tiempo?._tipo("number") && tiempo > 0) {
      timer = tiempo.luego(() => {
        cerradoPor = "timeout";
        dlg.close();
      });
    }
    dlg[AELT]("close", () => {
      if (timer) timer.cancelar();

      let resultado;

      if (cerradoPor) {
        resultado = _opc._esSi ? new Boolean() : new String(); 
        resultado.error = cerradoPor;
      } else {
        switch (dlg.returnValue) {
          case "ok": 
            const form = dlg[QRYS]("form");
            const data = new FormData(form);
            const valores = Object.fromEntries(data.entries());
            let l = Object.values(valores).length ;
            resultado = new String( l == 0 ? 1 : l == 1 ? (
                _opc.varios 
                ? [...form[QRYS]("select").selectedOptions].map(x=>x.value) 
                : _opc.variosCheck 
                ? [...form[QRYSA]("input[type=checkbox]")].filter(x=>x.checked).map(x=>x.value)
                : Object.values(valores)[0]
            ) : valores );
            break;
          case "no":
            if( _opc._esSi ) {
                resultado = false ;
            }
            else {
                resultado = new String(); 
                resultado.error = "cancelado" ;
            }
            break;
          default:
            resultado = new String(dlg.returnValue);
        }
      }

      dlg.remove();
      if( _opc.representarComoNumero ) resultado = new Number( parseFloat(resultado) );
      if( _opc.procesarSalida ) resultado = new String( _opc.procesarSalida(resultado) );
      if( _opc.representarComoFecha ) { 
        if( resultado.length == 5 ) resultado = new String( __ahora.frase("{Y-m-d}T"+resultado) );
        else if( resultado.length == "0000-00-00".length ) resultado = new String( resultado + "T00:00:00" );
        resultado = new String( resultado?.esFecha ) ;
      }
      if( _opc.representarComoArray ) {
        resultado = resultado.split(",") ;
      }
      
      resolve(resultado);
    });
 
    dlg.showModal();
    dlg.querySelector("input")?.select() ;
    if( _opc.tiene("movible","draggable","arrastrable") )makeDraggable( "dialog header" ) ;
  });
  if (fnOk?._esFuncion||fnNo?._esFuncion) {
    promesa.then(([valor, motivo]) => {
      if (motivo === null && fnOk?._esFuncion)fnOk(valor);
      if (motivo !== null && fnNo?._esFuncion)fnNo(motivo);
    });
  }

  return promesa;
}

function si(_x){return !!_x}

function hexToRgb(hex) {
  hex = hex[RPL](/^#/, "");
  if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
  if (hex.length !== 6) return null;
  const num = parseInt(hex, 16);
  return [
    (num >> 16) & 255, // R
    (num >> 8) & 255,  // G
    num & 255          // B
  ];
}

function rgbToHsl([r, g, b]) {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b), h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [Math.round(h * 360),Math.round(s * 100),Math.round(l * 100)];
}
function hexToHsl(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  return rgbToHsl(rgb);
}

Mostrar = Preguntar = {} ;
Mostrar.cartel = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html || "Ok" ;
    }
    _opc.sinCancelar = true ;
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}

Preguntar.si = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html || "Ok" ;
    }
    _opc.aceptar = _opc.aceptar || "Sí"; _opc.cancelar= _opc.cancelar || "No" ;
    _opc.original=_mensaje;
    _opc._esSi = true ;
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}
Preguntar.texto = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html ;
    }
    let _in = DOC[CREL]("input") ;
    _in.type = _opc.clave || _opc["contraseña"] || "text" ;
    _in.name = "valor" ;
    if(_opc.patron) _in.pattern = _opc.patron ;
    if(_opc.min || _opc.minimo) _in.minLength = _opc.min || _opc.minimo ;
    if(_opc.max || _opc.maximo) _in.maxLength = _opc.max || _opc.maximo ; 
    _opc.original=_mensaje
    let _dtls = "" ;
    if( _opc.opciones ) {
        let l=[],_a=Array.isArray(_opc.opciones);
        for( i in _opc.opciones ) {
            l.push( _a
                ?'<option value="%s">%s</option>'.printf(_opc.opciones[i],_opc.opciones[i])
                :'<option value="%s">%s</option>'.printf(i,_opc.opciones[i])
            ) ;
        }
        let __id = 3000..cualquiera.entero
        _dtls = `<datalist id="idDTLS%d">%s</datalist>`.printf( __id,l.join("") )
        _in.setAttribute( "list", "idDTLS%d".printf(__id) )
    }
    _mensaje += "<div style='padding: 5px'>"+_in.outerHTML+_dtls+"</div>" ;
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}
Preguntar.clave = Preguntar["contraseña"] = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html ;
    }
    let _in = DOC[CREL]("input") ;
    _in.type = "password" ;
    _in.name = "valor" ;
    if(_opc.patron) _in.pattern = _opc.patron ;
    if(_opc.min || _opc.minimo) _in.minLength = _opc.min || _opc.minimo ;
    if(_opc.max || _opc.maximo) _in.maxLength = _opc.max || _opc.maximo ; 
    _opc.original=_mensaje
    _mensaje += "<div style='padding:5px'>%s</div>".pf(_in.outerHTML) ;
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}

Preguntar.textoLargo = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html ;
    }
    let _in = DOC[CREL]("textarea") ;
    _in.style.width = "100%"
    _in.name = "valor" ;
    if(_opc.patron) _in.pattern = _opc.patron ;
    if(_opc.min || _opc.minimo) _in.minLength = _opc.min || _opc.minimo ;
    if(_opc.max || _opc.maximo) _in.maxLength = _opc.max || _opc.maximo ; 
    _opc.original=_mensaje
    _mensaje += "<div style='padding:5px'>"+_in.outerHTML+"</div>" ;
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}
Preguntar.color = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html ;
    }
    let _in = DOC[CREL]("input") ;
    _in.type = "color" ;
    _in.name = "valor" ;
    _in.style.height= "15vh"
    if(_opc.patron) _in.pattern = _opc.patron ;
    if(_opc.min || _opc.minimo) _in.minLength = _opc.min || _opc.minimo ;
    if(_opc.max || _opc.maximo) _in.maxLength = _opc.max || _opc.maximo ; 
    _opc.original=_mensaje
    _mensaje += "<div style='padding:5px'>%s</div>".pf(_in.outerHTML) ;
    if( _opc.salida )
        if( _opc.salida.toLowerCase()=="rgb" ) _opc.procesarSalida = function(r) {return hexToRgb(r)}
        else if( _opc.salida.toLowerCase()=="hsl" ) _opc.procesarSalida = function(r){return hexToHsl(r)}
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}
Preguntar.numero = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html ;
    }
    let _in = `<input name="valor" type="number" step="${ _opc.paso || _opc.salto || _opc.step || 0.0001 }" 
    ${ _opc.min||_opc.minimo ? `min="${_opc.min||_opc.minimo}"`:"" }
    ${ _opc.max||_opc.maximo ? `max="${_opc.max||_opc.maximo}"`:"" }
    ${ _opc.ini||_opc.inicial||_opc.valor||_opc.value ? `value="${ _opc.ini||_opc.inicial||_opc.valor||_opc.value }" ` : "" } 
    />
    ` ;
    _opc.original=_mensaje
    _mensaje += "<div style='padding:5px'>%s</div>".pf(_in) ;
    _opc.representarComoNumero = true ;
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}

Preguntar.rango = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html ;
    }
    let _in = "<input type='range' " ;
    _in += "step='%1.4f' ".pf(_opc.paso || _opc.salto || 1 );
    _in += "name='valor' " ;
    let _min = _opc.min ||_opc.minimo || 0 ;
    let _max = _opc.max || _opc.maximo || 100 ;
    let _ini = _opc.ini || _opc.inicial || _opc.value || _opc.valor || _opc.default || (_min+_max)/2 ;
    _in += 'min="%1.4f" '.pf(_min);
    _in += 'max="%1.4f" '.pf(_max);
    _in += 'value="%1.4f" '.pf(_ini);
    _in += " onchange='this.nextElementSibling.innerHTML=this.value' >"
    _opc.original=_mensaje
    _mensaje += "<div style='padding:5px'>%s<span>%1.4f</span></div>".pf(_in,_ini) ;
    _opc.representarComoNumero = true ;
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}
Preguntar.fecha = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html ;
    }
    let _in = `<input name="valor" type="${ 
        _opc.tipo?.minusculas=="hora" || _opc.hora
        ? "time" 
        : _opc.tipo?.minusculas=="fechahora" || _opc.fechahora
        ? "datetime-local" 
        : "date" 
    }" 
    ${ _opc.min||_opc.minimo ? `min="${_opc.min||_opc.minimo}"`:""} 
    ${ _opc.max||_opc.maximo ? `max="${_opc.max||_opc.maximo}"`:""} 
    ${ _opc.ini||_opc.inicial||_opc.valor||_opc.value ? `value="${ _opc.ini||_opc.inicial||_opc.valor||_opc.value }" ` : "" }
    ${ _opc.hoy || _opc.ahora ? `value="${ _opc.tipo?.min=="fechahora" ? "Y-m-dTH:i:s".fecha() : _opc.tipo?.min=="hora" ? "H:i:s".fecha(): "Y-m-d".fecha() }"`:"" }
     />
    ` ;
    _opc.original=_mensaje
    _mensaje += "<div style='padding:5px'>{_in}</div>".formato({_in}) ;
    _opc.representarComoFecha = _opc.frase||_opc.tipo?.minusculas=="hora" ? false : true ;
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}


Preguntar.uno = Preguntar.lista = Preguntar.opcion = Preguntar.desplegable = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let _l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html || "Elegí uno" ;
    }
    if( !_opc.opciones ) _opc.opciones = {
        1: "Sí", 0: "No"
    };
    let _m = `
    <input type="search" onkeydown="fnFlter(this,event)" autofocus><hr>
    <select name="valor" size="4" required >
        <option  selected disabled>${ _opc.elegir || _opc.inicial || "Elegí una opción..." }</option>
        ${
            (function(){
                let r = "" ;
                for( var i in _opc.opciones )
                r+=`<option value="${_opc.opciones._esLista ? _opc.opciones[i] : i}" >${ _opc.opciones[i] }</option>\n` ;
                return r
            })()
        }
    </select>
    `
    _opc.original=_mensaje
    _mensaje += "<div style='padding:5px'>%s</div>".pf(_m);
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}
function fnFlter( _this,_event,_tipo=1 ) {
    if( _event.code?.includes("Enter") ) {
        _event.preventDefault() ;
    }
    _select = _this.nextElementSibling.nextElementSibling ;
    _esSelect = _select instanceof HTMLSelectElement ;
    _p = false ; _u = null ;
    [..._select.children].forEach(function(_op,_or){
        if( _p ) return ;
        if( new RegExp(_this.value,"i").test(_op.innerHTML.min.replace("á","a").replace("é","e").replace("í","i").replace("ó","o").replace("ú","u")) ) {
            _p = true ;
            if( _esSelect ) {
                _select.selectedIndex = _or ;
            }
        }
        else {
            _op.style.fill = "red" ;
        }
    })
    if( _event.code.includes("Enter") && _p ) {
        if( _esSelect ) _select.focus() ;
    }
}
Preguntar.menu = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let _l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html || "Elegí uno" ;
    }
    if( !_opc.opciones ) _opc.opciones = {
        1: "Sí", 0: "No"
    };
    let _m = `
<nav class="vertical group">
        ${
            (function(){
                let r = "" ;
                for( var i in _opc.opciones )
                r+=`<button full value="${_opc.opciones._esLista?_opc.opciones[i]:i}" >${ _opc.opciones[i] }</button>\n` ;
                return r
            })()
        }
    </nav>
    `
    _opc.sinAceptar = true ;
    _opc.original=_mensaje
    _mensaje += "<div style='padding:5px'>%s</div>".pf(_m);
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}
Preguntar.radio = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let _l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html || "Elegí uno" ;
    }
    if( !_opc.opciones ) _opc.opciones = {
        1: "Sí", 0: "No"
    };
    let _m = `${
            (function(){
                let r = "", _o = 0 ;
                for( var i in _opc.opciones ) {
                    r+=`<p><label><input type="radio" value="%s" name="valor" ${ _o == 0 ? `selected="selected"` : "" } /> %s</label></p>\n`.pf(_opc.opciones._esLista?_opc.opciones[i]:i,_opc.opciones[i]) ;
                    _o++;
                }
                
                return r
            })()
        }
    
    `
    _opc.original=_mensaje
    _mensaje += "<div style='padding:5px'>%s</div>".pf(_m);
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}

Preguntar.varios = function( _mensaje, _opc={}, _fnok, _fnno ) {
    let _l = arguments.length ;
    if( _mensaje?._tipo("object") ) {
        _fnno = _fnok ;
        _fnok = _opc ;
        _opc = _mensaje ;
        _mensaje = _opc.mensaje || _opc.contenido || _opc.texto || _opc.codigo || _opc.html || "Elegí uno" ;
    }
    if( !_opc.opciones ) _opc.opciones = {
        1: "Sí", 0: "No"
    };
    let _m = `<select multiple name="valor" size="4" required >
        <option  selected disabled>${ _opc.elegir || _opc.inicial || "Elegí una opción..." }</option>
        ${
            (function(){
                let r = "" ;
                for( var i in _opc.opciones )
                r+=`<option value="${_opc.opciones._esLista?_opc.opciones[i]:i}" >${ _opc.opciones[i] }</option>\n` ;
                return r
            })()
        }
    </select>
    `;
    if( _opc.check ) _m = `${
            (function(){
                let r = "" ;
                for( var i in _opc.opciones )
                r+=`<p><label ><input type="checkbox" value="%s" name="valor" > %s</label></p>`.pf( _opc.opciones._esLista?_opc.opciones[i]:i, _opc.opciones[i] ) ;
                return r
            })()
        }`;
    _opc.original=_mensaje
    _mensaje += "<div style='padding:5px'>%s</div>".pf(_m);
    _opc[ _opc.check ? "variosCheck" : "varios" ] = true ;
    _opc.procesarSalida = function(e) {
        return e ;
    }
    _opc.representarComoArray = true ;
    return fndialogo(_mensaje,_opc,_fnok,_fnno)
}

DNEP(PTN,"s",function(){return this.source});
DNEP(FRA,"p",function(){return new RegExp( this.replaceAll("**","(.*?)").replace(/\<(.*?)\?\>/gi, function(a,b){return "(?<"+b+">.+)"}), "i" );});
DNEP(PTN,"p",function(){return this.source.p})

DOC[AELT]("DOMContentLoaded",function(){
    BB`[fondo]`[FCH](function(t){
        t.style.background = "url(%s)".pf(t.getAttribute("fondo"));
    });
    BB`[alto]`[FCH](function(t){
        t.style.height = (t.getAttribute("alto"));
    });
    BB`[heroe]`[FCH](function(t){
        t.style.position = "relative"
    })
    BB`[como]`[FCH](fnComo);
    //BB`tabs`[FCH](convertirDetailsEnTabs)
    DOC.body[RATT]("hidden");
    BB`[click-ir]`[FCH](fnIrHacia)
    BB`[click-abrir]`[FCH](fnAbrirClick)
});

function fnIrHacia(_b){_b.onclick = function(){location.href=_b[GATT]("click-ir")}}
function fnAbrirClick(_b){_b.onclick=function(){window.open(_b[GATT]("click-abrir"))}}

UU[AELT]("load",function(){
    BB`.pantalla-splash`[FCH](function(_p){
        if(_t=_p[GATT]("retraso"))return setTimeout(x=>_p.remove(),_t.segundos);
        _p.remove()
    });
    if( UU.___setup || DOC[QRYS]("setup") ) cargarCSS( "https://gorosito.red/dame/simple.php?" )
})
function fnComo(_obj){
    _como = _obj.getAttribute("como");
    if( /arrastr|dragula/i.test(_como) ) Habilitar.arrastrable(_obj)
    if( /menu/i.test(_como) ) menuLateral(_obj)
    if( `reco**obj`.p.test(_como) ) fnReconoObjetos(_obj);
    if( /ventan/i.test(_como) ) hacerVentana( _obj, _obj[GATT]("handler") ?? "h2" )
}


async function fnMenuLateral(_obj) {
    _s = _obj.style ;
    _s.background = "black" ;
    _s.color = "white" ;
    _s.position = "absolute" ;
    if( _obj.hasAttribute("der") ) _s.right = 0 ; else _s.left = 0 ;
    _s.top = "50%" ;
    _s.transform = "rotate(-90deg)";
    _s.padding = "5px" ;
    _obj.ontoggle = function() {
        _s.transform = "rotate(%ddeg)".pf(_obj.open?0:-90)
    }
    
}
Habilitar.arrastrable = async function(_obj) {
    if( !UU.dragula ) {
        "https://gorosito.red/dame/draggula.css".cargarCSS() ;
        await "https://gorosito.red/dame/dragula.js".cargarJS() ;
    }
    let _hab = {
        copy: function( _item, _origen ) {
            return _origen.hasAttribute("duplicable")
        }
        , accepts: function( _item, _destino, _origen, _sig ) {
            if(_destino.hasAttribute("no-acepta")) return false ;
            if( _obj.hasAttribute("acepta") ) UU[_obj.getAttribute("acepta")](_item,_destino,_origen,_sig);
            return true
        }
        , moves: function( _item, _origen, _item2, _sig ) {
            if( _origen.hasAttribute("solo-recibe") ) return true ;
            if( _origen.hasAttribute("mueve") ) UU[_obj.getAttribute("mueve")](_item,_origen,_sig) ;
            return true;
        }
    }
    _obj.dragula = dragula( _obj.hasAttribute("selector") ? [..._obj[QRYSA](_obj.getAttribute("selector"))] : [..._obj.children], _hab ) ;
    if( _obj.hasAttribute("eventos") ) _obj.dragula.on("drop", UU[_obj.getAttribute("eventos")]) ;

}

function apliEstilos(_o,_st) {for( i in _st ) _o.style[i] = _st[i] ;}

UU.vozElegida = null ;
function hablar(_mensaje = "", _opc = {}, _fnok, _fnerror) {
    if (UU.AppInventor) {
        AppInventor.setWebViewString("hablar:%s".pf(_mensaje));
        return Promise.resolve([true, null]);
    }
    return new Promise((fnResuelve, fnCancela) => {
        const fnEsperarVoces = () => {
            let _voces = speechSynthesis.getVoices();
            if (!_voces.length) return 100..luego(fnEsperarVoces);
            try {
                let _utt = new SpeechSynthesisUtterance(FRA(_mensaje));
                Object.assign(_utt, _opc);
                let _vocesES = _voces.filter(v => /es/i.test(v.lang));
                let _vozElegida = vozElegida || _vocesES.cualquiera ;
                _utt.voice = _vocesES.length? _vozElegida: _voces[0];
                vozElegida = _vozElegida
                _utt.onend = () => {
                    _fnok?.(_mensaje);
                    _opc.alTerminar?.(_mensaje);
                    let _r = new String(_mensaje)
                    fnResuelve(_r);
                };
                _utt.onerror = (e) => {
                    _fnerror?.(e);
                    let _r = new Boolean(false);_r.error=e;
                    fnResuelve(_r);
                };
                if( _opc.asistente || _opc.clipo || _opc.clippy ) asistente.decir( _mensaje )
                speechSynthesis.cancel();
                speechSynthesis.speak(_utt);
            } catch (err) {
                _fnerror?.(err);
                fnCancela([false, err]);
            }
        };
        fnEsperarVoces();
    });
}
function cargarJS(url) {
    return new Promise((resolve, reject) => {
        url=url._tipo("string")?url:url[0]
        if([...DOC.scripts].some(s=>s.src.includes(url)))return resolve();
        let s=DOC[CREL]("script");s.src=url;s.onload = resolve;s.onerror = reject;DOC.head[APCD](s);
    });
}

function cargarCSS(url) {
    return new Promise((resolve,reject)=>{
        url=url._tipo("string")?url:url[0]
        if([...DOC.styleSheets].some(s=>s.href?.includes(url)))return resolve();
        let l=DOC[CREL]("link");l.rel="stylesheet";l.href=url;l.onload=resolve;l.onerror=reject;DOC.head[APCD](l);
    });
}

const asistente = {
    agent: null,
    cargando: false,
    async init() {
        if (this.agent || this.cargando) return;
        this.cargando = true;
        "https://gorosito.red/dame/clippy/clippy.css".cargarCSS() ;
        await "https://code.jquery.com/jquery-1.12.4.min.js".cargarJS();
        await "https://gorosito.red/dame/clippy/clippy.js".cargarJS();
        this.cargando = false;
    },
    personajes() {return "Clippy0Genie0Rover0Merlin0Links0Genius0Peedy0Bonzi0F10Rocky".split(0)}
    , async cargarAgente(nombre = "Clippy") {
        await this.init();
        if (this.agent) return this.agent;
        return new Promise(resolve=>{
            clippy.load(nombre,agent=>{
                this.agent=agent;agent.show();resolve(agent)
            });
        });
    },
    async decir(texto = "", opc = {}) {
        const agent = await this.cargarAgente(opc.agente || "Clippy");
        agent.stop();
        return new Promise(resolve => {
            agent.speak(texto);Math.max(800, texto.length * 40).luego(resolve);
        });
    },
    detener() {this.agent?.stop();}
    ,async animar(_codAnimacion="Searching") {
        return new Promise(fn=>{
            this.agent.play( _codAnimacion );
            setTimeout( fn, 2000 )
        })
    }
};

function sonarAudio( _dadoAudio ) {
  return new Promise( fnListo => {
    _dadoAudio[AELT]("ended", fnListo, { once: true });_dadoAudio.play()
  });
}

function tokenize(code) {let _r=code[RPL](/([\(\)\{\}])/g, " $1 ").trim().split(/\s+/);_r.codigo =code;return _r}

function aplicarAtributo(el, grupo) {
  const [name, ...values] = grupo;
  if(name==="class")el.className=values.join(" ");
  else if(name==="style")el.style.cssText=values.join(" ");
  else el.setAttribute(name,values.join(" "));
}

function lispToDOM(code) {
  let tokens=tokenize(code),i=0;
  function parseNode() {
    if(tokens[i++]!=="(")return null;let tag=tokens[i++];_tag=tag.match(/[a-zA-Z]*/i) ;_id=tag.match(/\#[a-zA-Z\-_]+/i);_clases=tag.match(/\.[a-zA-Z\-_]+/ig);
    let el=DOC[CREL](_tag[0]);if(_clases&&_clases.length)_clases[FCH](function(_cadaClass){el[CLST].add(_cadaClass.slice(1))});
    if(_id)el.id=_id[0].slice(1) ;
    while(tokens[i]!==")"){
      if(tokens[i]==="("){
        let grupo=parseGroup();aplicarAtributo(el,grupo);
      }
      else if(tokens[i]==="{"){
        let contenido=psc();
        contenido[FCH](n=>{
          if(n?._tipo("string"))el[APCD](DOC.createTextNode(n+" "));
          else el[APCD](n);
        });
      }
      else i++;
    }
    i++;
    return el;
  }
  function parseGroup() {i++;let items=[];while(tokens[i]!==")")items.push(tokens[i++]);i++;return items;}
  function psc() {i++;let items=[];while(tokens[i]!=="}"){if(tokens[i]==="(")items.push(parseNode());else items.push(tokens[i++]);}i++;return items;}
  return parseNode();
}

DNE(LST,"sumar",function(){return this.reduce( (a,b)=>a+b,0 ) })
DNEP(LST,"sumado",function(){return this.reduce( (a,b)=>a+b,0 ) })
DNEP(LST,["promedio","media"],function() { return this.sumado/this.length })
DNEP(LST,"conteo",function(){
    let _r = {}
    this[FCH](function(_i,_o){
        if( !_r[_i] ) _r[_i] = 0 ;
        _r[_i]++ ; 
    })
    return _r
})
DNE(LST,"contar",function(){let _r={};this[FCH](function(_i,_o){if(!_r[_i])_r[_i]=0;_r[_i]++;});return _r})
DNE(LST,"ordenado0ordenada".split(0),function(_desc=false){return this.toSorted((a,b)=>(_desc ? b-a : a-b))})
DNEP(LST,"desordenado0desordenada".split(0),function(){return this.toSorted(x=>1..cualquiera-0.5)})
DNEP(LST,"mediana",function() {
    let _ordenado = this.toSorted( (a,b) => a-b ) ;
    let _mitad = parseInt( _ordenado.length / 2 ) ;
    return _ordenado.length % 2 
        ? _ordenado[_mitad]
        : (_ordenado[_mitad-1]+_ordenado[_mitad])/2
    ;
})
DNEP(LST,"moda",function() {
    let _conteo = {} ;this[FCH]( _item => _conteo[_item] = (_conteo[_item] || 0) +1 ) ;let _moda = null,_maxi = 0 ;
    for( let _este in _conteo )if( _conteo[_este] > _maxi ) {_maxi = _conteo[_este] ;_n = NUM(_este);_moda = isNaN(_n)?_este:_n ;}
    return _moda ;
})
DNEP(LST,"varianza",function(){let _promedio=this.promedio;return this.reduce((_accion,_orden)=>_accion+(_orden-_promedio)**2, 0) / this.length})
DNEP(LST,["desviacion","desvio","desvioEstandar","std"],function(){return this.varianza**0.5})
DNEP(LST,"rangoMaxMin",function(){return this.max-this.min})
DNEP(LST,"min",function(){return Math.min(...this)})
DNEP(LST,"max",function(){return Math.max(...this)})
DNE(LST,"percentil",function(p){if(!this.length)return null;if(p<0)p=0;if(p>1)p=1;let o=this.ordenado(),pos=p.de(o.length-1),base=pos.entero,resto=pos-base;if(o[base+1]!==undefined)return o[base]+resto*(o[base+1]-o[base]);else return o[base];})
DNEP(LST,"cuartiles",function(){return {Q0:this.percentil(0),Q1:this.percentil(.25),Q2:this.percentil(.50),Q3:this.percentil(.75),Q4:this.percentil(1),iqr:this.percentil(.75)-this.percentil(.25)}})
DNEP(LST,"deciles",function(){
    return 11..items(0).map((x,o)=>this.percentil(o/10));
})

UU.archivo = {
    abrir: async function( _opciones ) {
        let _r = [null, null] ;
        try {
            let _lista = await showOpenFilePicker( {..._opciones, multiple:false} ) ;
            _r[0] = _lista[0] ;
        }
        catch( _error ) {
            return [ null, 1, _error ] ;
        }
        _r.respuesta = _r[0] ;
        _r.error = _r[1] ;
        return _r ;
    }
    , abrirVarios: async function( _opciones ) {
        let _r = [null, null] ;
        try {
            let _lista = await showOpenFilePicker( {..._opciones, multiple:true} ) ;
            _r[0] = _lista ;
        }
        catch( _error ) {
            return [ null, 1, _error ] ;
        }
        _r.respuesta = _r[0] ;
        _r.error = _r[1] ;
        return _r ;
    }
    , carpeta: async function( _opciones ) {
        let _r = [null, null] ;
        try {
            let _lista = await showDirectoryPicker( {..._opciones} ) ;
            _r[0] = _lista ;
        }
        catch( _error ) {
            return [ null, 1, _error ] ;
        }
        _r.respuesta = _r[0] ;
        _r.error = _r[1] ;
        return _r ;
    }
}

DNE(LST,"esCSV",function(){
    let _resto = [...this];
    let _titulos = _resto.shift() ;
    let _resul = [];
    _resto.forEach(function(_fila,_ordenFila){
        let _estaFicha = {} ;
        _fila.forEach(function(_cadaCelda,_ordenCelda){
            _estaFicha[ _titulos[_ordenCelda] ] = _cadaCelda ;
        });
        _resul.push( _estaFicha ) ;
        return ;
    })
    console.log( _resul._tipo() )
    return _resul ;
})

function _$( _a,_b ) {
    if( _a instanceof HTMLElement ) {
        _a.texto = function(_n) {if(arguments.length)return this.innerHTML=_n;return this.innerHTML}
        _a.estilos = function(_n,_v){
            if( !arguments.length ) return this.style ;
            if( _n._tipo("string") && _v ) return this.style[_n] = _v ;
            if( _n._tipo("object") ) {
                for( i in _n ) this.style[i] = _n[i]
            }
            return;
        }
        _a.atrib = function(_n,_v){
            if( _n._tipo("string") && !_v ) return this.getAttribute(_n) ;
            if( !_v ) {
                for( i in _n ) this.setAttribute(i,_n[i]) ;
                return ;
            }
            return this.setAttribute(_n,_v)
        }
    }
    if( _a._tipo("string") ) {
        let _ = [...(_b||DOC).querySelectorAll(_a)] ;
        return _
    }
    if( _a._tipo("array") ) {
        return _a["map"](x=>_$(x))
    }
}
function fSty(_i,_rs,sep=","){
    _rs
    .split(sep)
    .forEach(function(_l){
        s=_l.split(":");
        _i[s[0]]=s[1]
    })
}
function notificar(_msj, _pos = 9, _tiempo=3) {
  let _cnt = DOC.getElementById("idContenedorNotificaciones"+_pos)
  if (!_cnt) {
    _cnt = DOC.createElement("div");
    _cnt.id = "idContenedorNotificaciones"+_pos;
    let _cs = _cnt.style;
    fSty(_cs,"position:fixed,zIndex:9999,display:flex,flexDirection:column,gap:8px,pointerEvents:none");
    DOC.body[APCD](_cnt);
  }
  let _cst = _cnt.style ;
  fSty(_cst,'top:,bottom:,left:,right:,transform:,alignItems:flex-start');
  switch (_pos) {
    case 1: fSty(_cst,"top:16px,left:16px");break
    case 2: fSty(_cst,"top:16px,left:50%,transform:translateX(-50%),alignItems:center");break
    case 3: fSty(_cst, "top:16px,right:16px,alignItems:flex-end");break
    case 4: fSty(_cst,"top:50%,left:16px,transform:translateY(-50%)");break
    case 5: fSty(_cst,"top:50%;left:50%;transform:translate(-50%,-50%);alignItems:center",";");break
    case 6: fSty(_cst,"top:50%,right:16px,transform:translateY(-50%),alignItems:flex-end");break
    case 7: fSty(_cst,"bottom:16px,left:16px");break
    case 8: fSty(_cst,"bottom:16px,left:50%,transform:translateX(-50%),alignItems:center");break
    case 9: default:fSty(_cst,"bottom:16px,right:16px,alignItems:flex-end")
  }
  const toast = "div".crearHTML();
  toast[CLST].add("toast")
  toast.innerHTML = _msj
  fSty(toast.style,"padding:12px 16px;borderRadius:12px;minWidth:300px;maxWidth:600px;boxShadow: 0 6px 20px rgba(0,0,0,0.3);opacity:0;transform:scale(0.9);transition:all 0.3s ease;pointerEvents:auto",";")
  _cnt[APCD](toast);
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "scale(1)";
  });
  _tiempo.segundos.luego(() => {
    toast.style.opacity = "0";
    toast.style.transform = "scale(0.9)";
    setTimeout(() => toast.remove(), 300);
  });
}



Habilitar.mapa = async function( _idMapa, _coords, _opcs={} ) {
    if( arguments.length == 2 ) _opcs = _coords ;
    if( _idMapa._tipo("string") ) _idMapa = _idMapa._html1 ;
    if( !_idMapa ) return "DIV para Mapa no encontrado" ;
    if( !UU.L ) {
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css".cargarCSS() ;
        await "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js".cargarJS() ;
    }
    _idMapa.mapa = L.map( _idMapa ) ;
    let _mp = _idMapa.mapa ;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; OpenStreetMap contributors'})
        .addTo( _mp );
    let lat = _coords[0]||_coords.lat||_coords.lati||_coords.latitud||_coords.latitude;
    let lon = _coords[1]||_coords.lon||_coords.long||_coords.longitud||_coords.longitude||_coords.lng
    _mp.setView([lat,lon],15);
    _mp.marcadores = [] ;

    if( _opcs.click ) _mp.on( "click", _opcs.click ) ;
    if( _opcs.dobleclick ) _mp.on( "dblclick", _opcs.dobleclick ) ;
    if( _opcs.clicksecundario ) _mp.on( "contextmenu", _opcs.clicksecundario ) ;
    if( _opcs.eventos ) for(i in _opcs.eventos) _mp.on( i, _opcs.eventos ) ;

    _mp.visitar=function( {lat, lon, altura} ) {
        _mp.setView([lat,lon],altura||13) ;
        return this;
    }
    _mp.agregarMarcador=function( _titulo, _coords, _contenido ) {
        let lat = _coords[0]||_coords.lat||_coords.lati||_coords.latitud||_coords.latitude;
        let lon = _coords[1]||_coords.lon||_coords.long||_coords.longitud||_coords.longitude||_coords.lng
        let _m = L.marker([lat,lon]);                
        _m.addTo(_mp);
        _m.bindPopup("<b>%s</b><br>[lat:%1,4f, lon:%1,4f]<br>%s".pf(_titulo,lat,lon,_contenido));
        _mp.marcadores.push( _m ) ;
        _mp.marcadores[_titulo] = _m ;
        if( _opcs.eventos )for( i in _opcs.eventos) _m.on( i, _opcs.eventos[i] )
        return _m ;
    }
    _mp.agregarCirculo=function( _titulo, _coords, _radio, _contenido, _opcs={} ) {
        let lat = _coords[0]||_coords.lat||_coords.lati||_coords.latitud||_coords.latitude;
        let lon = _coords[1]||_coords.lon||_coords.long||_coords.longitud||_coords.longitude||_coords.lng
        let _m = L.circle([lat,lon],{radius:_radio, ..._opcs});
        _m.addTo(_mp);
        _m.bindPopup("<b>%s</b><br>[lat:%1,4f, lon:%1,4f]<br>%s".pf(_titulo,lat,lon,_contenido));
        _mp.marcadores.push( _m ) ;
        _mp.marcadores[_titulo] = _m ;
        if( _opcs.eventos )for( i in _opcs.eventos) _m.on( i, _opcs.eventos[i] )
        return _m ;
    }
    if( _opcs.listo ) _opcs.listo() ;
}

async function escuchar(_opcs = {}) {
    let _idioma = _opcs.idioma || _opcs.lenguaje || _opcs.language || _opcs.lang || "es-ES"
    return new Promise((fnResolver) => {
        const SpeechRecognition = UU.SpeechRecognition || UU.webkitSpeechRecognition;if (!SpeechRecognition) {const _err = new Error("SpeechRecognition no soportado en este navegador");if (_opcs.error) _opcs.error( _err ) ;let r=new String();r.error=_err;r.respuesta="";r.resultado="";r.value="";return fnResolver(r) ;}
        const _obj = new SpeechRecognition();
        _obj.lang = _idioma
        _obj.interimResults = false
        _obj.continuous = _opcs.continuo || false
        if (_opcs?.palabras?._esLista ) {
            const SpeechGrammarList = UU.SpeechGrammarList || UU.webkitSpeechGrammarList;
            if (SpeechGrammarList) {
                const lista = new SpeechGrammarList();
                const palabras = _opcs.gramatica.join(" | ");
                const gramatica = `
                    #JSGF V1.0;
                    grammar palabras;
                    public <palabra> = ${palabras} ;
                `;
                lista.addFromString(gramatica, 1);
                _obj.grammars = lista;
                if (_opcs.debug) console.log("Gramática cargada:", gramatica);
            }
        }
        let _textoFinal = ""
        let _fin = false
        let _can = false
        function cerrar(re, error) {
            if (_fin) return;
            _fin = true;
            if (_opcs.botonCancelar) _opcs.botonCancelar[RELT]("click", _can);
            let r=new String(re);r.error=error;r.re=re;r.respuesta=re;r.value=re;
            fnResolver(r);
        }
        function cancelar() {
            if (_fin) return;
            _can = true;
            _obj.stop();
            if (_opcs.error) _opcs.error("Cancelado");
            cerrar("", "Cancelado");
        }
        if (_opcs.botonCancelar)_opcs.botonCancelar[AELT]("click", cancelar);
        _obj.onstart = () => {
            if(_opcs.debug) console.log("Comenzamos a escuchar...")
            if (_opcs.comenzo) _opcs.comenzo()
        };
        _obj.onresult = (event) => {
            if(_opcs.debug)console.log( "Resultado parcial [%s]".printf(event.results[0][0].transcript) )
            _textoFinal = event.results[0][0].transcript;
        };
        _obj.onerror = (event) => {
            const _err = new Error(event.error);
            if (_opcs.error) _opcs.error(_err);
            cerrar( "", _err ) ;
        };
        _obj.onend = async () => {
            if (_fin) return;
            if (!_can && _textoFinal) {
                if( _opcs.debug ) console.log( "Terminamos de reconocer: [%s]".printf(_textoFinal) )
                if (_opcs.termino) _opcs.termino(_textoFinal);
                cerrar(_textoFinal, null);
            }
            await beepOff()
        };
        try {
            beepOn().then(x=>
            _obj.start());
        } catch (_err) {
            if (_opcs.error) _opcs.error(_err);
            cerrar( "", _err );
        }
    });
}

let __monacoLoadingPromise = null;

function fnCargarMonaco(idDivEditor, _opcs) {

    return new Promise((fnResuelve, fnRechaza) => {

        function crearEditor() {
            if(idDivEditor._tipo("string")) idDivEditor = DOC.getElementById(idDivEditor) ;
            if(!idDivEditor) throw new Error("Error, el DIV no está definido correctamente") ;
            idDivEditor.editor = monaco.editor.create(
                idDivEditor
                ,
                {
                    value: '',
                    language: 'html',
                    theme: 'vs-dark',
                    automaticLayout: true,
                    autoClosingBrackets: "always",
                    autoClosingQuotes: "always",
                    autoClosingOvertype: "always",
                    autoClosingTags: true
                    , ..._opcs
                }
            );
            fnResuelve(_ed);
        };

        if (UU.monaco) return crearEditor();
        if (__monacoLoadingPromise) return __monacoLoadingPromise.then(crearEditor);

        __monacoLoadingPromise = new Promise((res, rej) => {
            let loaderScript = crearHTML('script');
            loaderScript.src = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/loader.min.js";
            loaderScript.onload = function () {
                require.config({
                    paths: {'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs'}
                });
                require(['vs/editor/editor.main'], function () {
                    res();
                });
            };
            loaderScript.onerror = rej;
            DOC.body[APCD](loaderScript);
        });
        __monacoLoadingPromise.then(crearEditor).catch(fnRechaza);
    });
}
Habilitar.agitar = async function(_dadaFuncion) {
    if( Habilitar.agitar.iniciado ) return ;
    if( !UU.Shake ) await "https://gorosito.red/dame/shake.js".cargarJS() ;
    UU.SHK = new Shake({threshold:15, timeout:1000}) ;
    SHK.start() ;
    Habilitar.agitar.iniciado = true ;
    UU[AELT]("shake",_dadaFuncion,false)
}
Habilitar.eruda = async function() {
    await "https://gorosito.red/dame/eruda.js".cargarJS()
    eruda.init({displaySize:40,transparency:0.4})
}
Habilitar.sql = async function() {
  if(UU.SQL)return
  await cargarJS("https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js")
  UU.SQL = await initSqlJs({locateFile: file =>"https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/%s".pf(file)})
  return SQL
}

Habilitar.fuse = async function(_dadaLista, _dadasOpciones={}) {
    if( !UU.Fuse ) await "https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.js".cargarJS() ;
    return new Fuse(_dadaLista,_dadasOpciones)
}
Habilitar.three = async function(_base) {
    _base = _base 
        || "https://unpkg.com/three@0.120.0" 
        || "https://gorosito.red/tri/three.js-r93" ;
    await cargarJS(_base + "/build/three.min.js") ;
    await cargarJS(_base + "/examples/js/controls/OrbitControls.js") ;
    await cargarJS(_base + "/examples/js/controls/TransformControls.js") ;
    await cargarJS(_base + "/examples/js/loaders/GLTFLoader.js") ;
    await cargarJS(_base + "/examples/js/controls/DeviceOrientationControls.js");

}
Habilitar.aframe = async function() {
    await cargarJS("https://cdn.jsdelivr.net/npm/aframe@1.7.1/dist/aframe-master.min.js")
}
Habilitar.joystickVirtual = async function() {
    await cargarJS("https://unpkg.com/nipplejs@0.10.1/dist/nipplejs.js") ;
}
function phpSerialize(value) {
    if (value === null) return "N;"
    switch (value._tipo()) {
        case "boolean":
            return "b:%d;".printf(value ? "1" : "0")
        case "number":
            if (Number.isInteger(value)) {
                return "i:%d;".printf(value)
            }
            return "d:"+(value)+";"
        case "string":
            return "s:%d:%s;".printf(value.length,value)
        case "object": case "array":
            let result = "";
            let count = 0;
            if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++) {
                    result += phpSerialize(i);
                    result += phpSerialize(value[i]);
                    count++;
                }
            } else {
                for (let key in value) {
                    result += phpSerialize(
                        isNaN(key) ? key : Number(key)
                    );
                    result += phpSerialize(value[key]);
                    count++;
                }
            }
            return "a:%d:{%s}".printf(count,result)
        default:
            throw new Error("Tipo no soportado");
    }
}
function phpUnserialize(data) {

    let offset = 0;

    function read() {

        let type = data[offset++];

        switch (type) {
            case "N":
                offset++;
                return null;
            case "b":
                offset++;
                let bool = data[offset++] === "1";
                offset++;
                return bool;
            case "i":
                offset++;
                let intEnd = data.indexOf(";", offset);
                let intVal = parseInt(data.substring(offset, intEnd));
                offset = intEnd + 1;
                return intVal;
            case "d":
                offset++;
                let dblEnd = data.indexOf(";", offset);
                let dblVal = parseFloat(data.substring(offset, dblEnd));
                offset = dblEnd + 1;
                return dblVal;
            case "s":
                offset++
                let lenEnd = data.indexOf(":", offset)
                let length = parseInt(data.substring(offset, lenEnd))
                offset = lenEnd + 2
                let str = data.substring(offset, offset + length)
                offset += length + 2
                return str
            case "a":
                offset++;
                let arrEnd = data.indexOf(":", offset), count = parseInt(data.substring(offset, arrEnd))
                offset = arrEnd + 2
                let temp = {}, keys = []
                for (let i = 0; i < count; i++) {
                    let key = read(),value = read()
                    temp[key] = value
                    keys.push(key)
                }
                offset++
                let isArray = keys.every((k, i) => k === i);
                if (isArray)return keys.map(k => temp[k]);
                return temp
            default:
                throw new Error("Tipo desconocido: " + type);
        }
    }

    return read();
}


DNE(FRA,"interpretarfecha",function(){
    if( this.includes(",") ) return this.split(",").map( x => x.interpretarfecha() ) ;
    if( this.min == "ahora" ) return __ahora ;
    if( this.min == "ayer" ) return __ahora.menos(1..dia).principio ;
    if( this.min == "anteayer" || this.min == "antes de ayer" ) return __ahora.menos(2..dias).principio ;
    if( this.min == "mañana" ) return __ahora.mas(1..dia).principio ;
    if( this.min == "pasadomañana" ) return __ahora.mas(2..dia).principio ;
    if( this[0] == "+" ) {
        let s = this.slice(1).split(",") ;
        var n = 0 ;
        s.forEach(function(m,o){
            m = m.trim() ;
            console.log(m)
            if( r=/(?<n>\d+)\s+(?<s>semana|día|dia|mes|hora|minuto|segundo)/i.exec(m) ) { 
                console.log(r.groups.n,+r.groups.n); 
                s = (+(r.groups.n))[r.groups.s] ;
                if(!isNaN(s))n+=s;
            }
        })
        return __ahora.mas(n) ;
    }
    if( m = /(?<m>siguiente|próximo|proximo)\s+(?<d>lunes|martes|miércoles|miercoles|jueves|viernes|sábado|sabado|domingo)/i.exec(this) ) {
        let s = 0 ;
        if( m.groups.d == "miercoles" ) m.groups.d = "miércoles" ;
        if( m.groups.d == "sabado" ) m.groups.d = "sábado" ;
        [1,7].rango.forEach(function(n,o){
            if( __ahora.mas(n.dias).frase("l").min == m.groups.d ) s = o + 1 ;
        });
        return __ahora.mas(s.dias).principio;
    }
    if( m = /(?<m>anterior|último|ultimo)\s+(?<d>lunes|martes|miércoles|miercoles|jueves|viernes|sábado|sabado|domingo)/i.exec(this) ) {
        let s = 0 ;
        if( m.groups.d == "miercoles" ) m.groups.d = "miércoles" ;
        if( m.groups.d == "sabado" ) m.groups.d = "sábado" ;
        [7].rango.forEach(function(n,o){
            if( __ahora.menos(n.dias).frase("l").min == m.groups.d ) s = o + 1 ;
        });
        return __ahora.menos(s.dias).principio;
    }
    if( m = /(?<cuando>dentro\s+de|en|hace)\s+(?<num>\d+)\s+(?<mod>dia|d\ía|semana|hora|minuto|segundo)/i.exec(this) ) {
        let s=0,g=m.groups;
        let c=g.cuando=="hace"?-1:1;
        let n=+g.num;
        if(isNaN(n))return 0
        switch(g.mod) {
            case "dia":case "día": return n.dia * c
            case "semana": return n.semana * c
            case "hora": return n.hora * c
            case "minuto": return n.minuto * c
            case "segundo": return n.segundo * c
        }
    }
    return -1;
})

function diccionarioLocal( _dadaClave, _valorInicial ) {
    let _pub = this ;
    let _prv = {} ;
    _prv.data = _valorInicial || {} ;

    if( _l = localStorage.getItem(_dadaClave) )
        try{_prv.data=JSON.parse(_l)}catch{}

    function fnActualizarData() {
        localStorage.setItem( _dadaClave, JSON.stringify(_prv.data) ) ;
        //_prv.data = JSON.parse( localStorage.getItem(_dadaClave) ) ;
    }

    return {
        get: function( _itemClave ) {
            return _prv.data[ _itemClave ] ;
        }
        , set: function( _claveItem, _nuevoValor ) {
            _prv.data[ _claveItem ] = _nuevoValor ;
            fnActualizarData()
        }
        , remove: function( _claveItem ) {
            delete _prv.data[_claveItem]
            fnActualizarData()
        }
        , has: function( _claveItem ) {
            return _claveItem in _prv.data 
        }
        , get items() {
            return _prv.data ;
        }
        , get keys() {
            return Object.keys(_prv.data)
        }
        , clear: function( _confirmar ) {
            if( !_confirmar ) return "No se borró nada" ;
            localStorage.setItem( _dadaClave, "{}" )
            fnActualizarData() ;
        }
    }
}

function listaLocal( _dadaClave, _valorInicial ) {
    let _pub = this ;
    let _prv = {} ;
    _prv.data = _valorInicial || [] ;

    if( _l = localStorage.getItem(_dadaClave) ) try{_prv.data = JSON.parse( _l ) ;}catch{}

    function fnActualizarData() {
        localStorage.setItem( _dadaClave, JSON.stringify(_prv.data) ) ;
        //_prv.data = JSON.parse( localStorage.getItem(_dadaClave) ) ;
    }

    return {
        get: function( _itemClave ) {
            return _prv.data[ _itemClave ] ;
        }
        , set: function( _claveItem, _nuevoValor ) {
            if( !_claveItem in _prv.data ) return "No existe el dato " + _claveItem ;
            _prv.data[ _claveItem ] = _nuevoValor ;
            fnActualizarData()
        }
        , add: function( _nuevoItem ) {
            _prv.data.push( _nuevoItem )
            fnActualizarData()
        }
        , remove: function( _claveItem ) {
            _prv.data = _prv.data.filter( (x,c) => c!=_claveItem )
            fnActualizarData()
        }
        , has: function( _claveItem ) {
            return _claveItem in _prv.data 
        }
        , get items() {
            return _prv.data ;
        }
        , get keys() {
            return Object.keys(_prv.data).map(x=>+x)
        }
        , clear: function( _confirmar ) {
            if( !_confirmar ) return "No se borró nada" ;
            localStorage.setItem( _dadaClave, "[]" )
            fnActualizarData() ;
        }
    }
}
function crear(s, ...vv) {
  let t="template".nuevoHTML,h=s.reduce((acc,str,i)=>{let v=vv[i];if(Array.isArray(value))v=v.join("");return acc+str+(v??"");}, "");
  t.innerHTML=h.trim();let r = t.content.firstElementChild;r.appendTo=function(i){i[APCD](this)};return r
}
function hacerVentana(el, sl, op = {}) {
  const hd = el[QRYS](sl);
  if(!hd)return console.warn(`hacerVentana: no se encontró "%s" dentro del elo.`,sl);
  const minVisible = op.minVisible ?? 40, pos = getComputedStyle(el).position;
  if (pos !== 'fixed' && pos !== 'absolute') el.style.position = 'fixed';
  console.log(el.style.position)
  let stx, sty, stlf, sttp;

  function getBounds() {
    const vw = UU.innerWidth,vh = UU.innerHeight,er=el.getBoundingClientRect(),hr=hd.getBoundingClientRect(),offsetLeft=hr.left-er.left,offsetTop=hr.top-er.top
    return{minLeft:-(hr.width-minVisible)-offsetLeft,maxLeft:(vw-minVisible)-offsetLeft,minTop:-(hr.height-minVisible)-offsetTop,
      maxTop:(vh-minVisible)-offsetTop,hardMaxLeft:vw-offsetLeft-minVisible,hardMaxTop:vh-offsetTop-minVisible,
      hardMinLeft:minVisible-offsetLeft-hr.width,hardMinTop:minVisible-offsetTop-hr.height,};}
  function clamp() {
    let elRect=el.getBoundingClientRect(),b=getBounds(),left=parseFloat(el.style.left)||elRect.left,top=parseFloat(el.style.top)||elRect.top;
    left = Math.min(Math.max(left, b.hardMinLeft), b.hardMaxLeft);top  = Math.min(Math.max(top,  b.hardMinTop),  b.hardMaxTop);
    el.style.left=left+'px';el.style.top=top+'px';el.style.right='auto';el.style.bottom='auto';el.style.transform='none';
  }
  function onDragStart(e) {
    e.preventDefault();
    const rect=el.getBoundingClientRect();
    el.style.left=rect.left+'px';el.style.top=rect.top+'px';el.style.right='auto';el.style.bottom='auto';el.style.transform='none';
    stx=e.clientX;sty=e.clientY;stlf=rect.left;sttp=rect.top;
    hd.setPointerCapture(e.pointerId);hd[AELT]('pointermove',onDragMove);hd[AELT]('pointerup',onDragEnd);hd[AELT]('pointercancel',onDragEnd);
  }
  function onDragMove(e) {
    let dx=e.clientX-stx,dy=e.clientY-sty,b=getBounds(),newLeft = Math.min(Math.max(stlf + dx, b.hardMinLeft), b.hardMaxLeft)
    ,newTop=Math.min(Math.max(sttp+dy,b.hardMinTop),b.hardMaxTop);el.style.left=newLeft+'px';el.style.top=newTop+'px';
  }
  function onDragEnd(e) {
    hd.releasePointerCapture(e.pointerId);hd[RELT]('pointermove',onDragMove);hd[RELT]('pointerup',onDragEnd);hd[RELT]('pointercancel',onDragEnd)
  }
  hd[AELT]('pointerdown', onDragStart);
  UU[AELT]('resize', clamp);
}

//////////////////////////
function geolocalizar(fn, no) {
  if(!arguments.length) {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((pos) => {let c = { lat: pos.coords.latitude, lon: pos.coords.longitude },d = [c,false]
      d.respuesta = c; d.error = false;resolve(d);},
        (e) => {let d=[null, e];d.respuesta=null; d.error=e;return d});
    });
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {fn({ lat: pos.coords.latitude, lon: pos.coords.longitude })},
    (err) => {fn._esFuncion && no(err)}
  );
}

function createStorage(DB_NAME) {
  const STORE_NAME = "keyvalue";
  const VERSION = 1;

  let dbPromise;

  function openDB() {
    if (dbPromise) return dbPromise;

    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, VERSION);

      req.onupgradeneeded = e => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };

      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });

    return dbPromise;
  }

  async function getItem(key) {
    const db = await openDB();

    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);

      req.onsuccess = () => resolve(req.result ?? null);
      req.onerror = () => reject(req.error);
    });
  }

  async function setItem(key, value) {
    const db = await openDB();

    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);

      store.put(value, key);

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async function removeItem(key) {
    const db = await openDB();

    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);

      store.delete(key);

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  return {
    getItem,
    setItem,
    removeItem
  };
}
function idbStorage(dbName = "idbStorageDB") {
  return createStorage(dbName);
}
["getItem", "setItem", "removeItem"].forEach(fn => {
  idbStorage[fn] = (...args) => idbStorage()[fn](...args);
});
///// idbStorage

locoStorage = function( _nombre ) {
    return {
        set: function( _nuevoValor ) {
            if( !_nuevoValor._tipo("string") || !_nuevoValor._tipo("number") || !_nuevoValor._tipo("boolean") ) {
                _nuevoValor = JSON.stringify( _nuevoValor ) ;
            }
            localStorage.setItem( _nombre, _nuevoValor ) ;
            return ;
        }
        , get: function() {
            let _r = localStorage.getItem( _nombre ) ;
            try {
                _r = JSON.parse( _r ) ;
            }
            catch(e) {}
            return _r ;
        }
    }
}

function menuLateral(dl, dir = "der") {
  if( dl[HATT]("der") ) dir = "der"
  if( dl[HATT]("izq") ) dir = "izq"
  if( dl[HATT]("aba") || dl[HATT]("abajo") ) dir = "abajo"
  if (!DOC[QRYS](`#_menuLateralStyles`)) {
    const style = "style".nuevoHTML;
    style.id = "_menuLateralStyles";
    style.textContent = `
      dialog._menuLateral {position: fixed;margin: 0;inset: auto;padding: 1rem;border: none;box-shadow: 0 0 20px rgba(0,0,0,.3);transition: transform .3s ease;touch-action:none}
      dialog._menuLateral::backdrop {background: rgba(0,0,0,.4);}
      dialog._oculto_der { transform: translateX(100%); }
      dialog._oculto_izq { transform: translateX(-100%); }
      dialog._oculto_abajo { transform: translateY(100%); }
      dialog._visible { transform: translate(0,0); }
    `;
    DOC.head[APCD](style);
  }

  dl[CLST].add("_menuLateral");
  if (dir === "der") fSty(dl.style,"top:0,right:0,bottom:0,left:auto,height:100vh"),dl[CLST].add("_oculto_der");
  
  if (dir === "izq") {
    fSty(dl.style,"top:0,left:0,bottom:0,right:auto,height:100vh")
    dl[CLST].add("_oculto_izq");
  }
  if (dir === "abajo") {
    fSty(dl.style,"left:0,right:0,bottom:0,top:auto,width:100vw")
    dl[CLST].add("_oculto_abajo");
  }
  let cerrando = false;
  const sho = dl.showModal.bind(dl);
  const clo = dl.close.bind(dl);
  function abrir() {
    if (dl.open) return;
    sho();
    requestAnimationFrame(() => {
      dl[CLST].remove("_oculto_der","_oculto_izq","_oculto_abajo");
      dl[CLST].add("_visible");
    });
  }
  function cerrar() {
    if (cerrando || !dl.open) return;
    cerrando = true;
    dl[CLST].remove("_visible");
    if (dir === "der")dl[CLST].add("_oculto_der");if (dir === "izq")dl[CLST].add("_oculto_izq");if (dir === "abajo")dl[CLST].add("_oculto_abajo");
    dl[AELT]("transitionend", function handler(e) {
      if(e.propertyName!=="transform")return;dl[RELT]("transitionend",handler);cerrando=false;clo();
    });
  }

  dl[AELT]("cancel", function (e) {
    e.preventDefault();
    cerrar();
  });

  let stx = 0, sty = 0, dg = false, smv=false;
  dl.showModal = function () {abrir();};
  dl.close = function () {cerrar();};

dl[AELT]("pointerdown", (e) => {
  dg = true;
  stx = e.clientX;
  sty = e.clientY;
  dl.style.transition = "none";
  smv = false;
});

UU[AELT]("pointermove", (e) => {
  if (!dg) return;
  let dx = e.clientX - stx;
  let dy = e.clientY - sty;
  if (dx.absoluto > 5 || dy.absoluto > 5) smv=true
  if (dir === "der") {
    if (dx < 0) return;
    dl.style.transform = `translateX(${dx}px)`;
  }
  if (dir === "izq") {
    if (dx > 0) return;
    dl.style.transform = `translateX(${dx}px)`;
  }
  if (dir === "abajo") {
    if (dy < 0) return;
    dl.style.transform = `translateY(${dy}px)`;
  }
});

UU[AELT]("pointerup", (e) => {
    dl.style.transition="";
    dl.style.transform="";
  if (!smv) {
    let d = medir.objeto(dl)
    if( !e.clientX.entre(d.ini.x, d.fin.x) || !e.clientY.entre(d.ini.y,d.fin.y) ) 
        cerrar();
    dg=false;
    return;
  }
  if( dg ) {
    let dx = e.clientX - stx;
    let dy = e.clientY - sty;
    let cdw = false;
    if (dir === "der") if (dx > dl.offsetWidth * 0.3) cdw = true;
    if (dir === "izq") if (-dx > dl.offsetWidth * 0.3) cdw = true;
    if (dir === "abajo")  if (dy > dl.offsetHeight * 0.3) cdw = true;
    if (cdw) cerrar();
  }
  dg=false
});

  return { abrir, cerrar };
} // Menú lateral

const UACX = new (window.AudioContext || window.webkitAudioContext)();

async function beep({ 
  frequency = 440,   // Hz (tono)
  duration = 200,    // ms
  volume = 0.2,      // 0 a 1
  type = "sine"      // sine, square, sawtooth, triangle
} = {}) {
  
  const o = UACX.createOscillator();
  const gainNode = UACX.createGain();

  o.type = type;
  o.frequency.value = frequency;

  gainNode.gain.value = volume;

  o.connect(gainNode);
  gainNode.connect(UACX.destination);

  o.start();

  await new Promise(resolve => setTimeout(resolve, duration));

  o.stop();
  UACX.close();
}

async function beepOn() {
  const osc = UACX.createOscillator();
  const gain = UACX.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(400, UACX.currentTime);
  osc.frequency.linearRampToValueAtTime(700, UACX.currentTime + 0.15);

  gain.gain.setValueAtTime(0, UACX.currentTime);
  gain.gain.linearRampToValueAtTime(0.15, UACX.currentTime + 0.02);
  gain.gain.linearRampToValueAtTime(0, UACX.currentTime + 0.15);

  osc.connect(gain);
  gain.connect(UACX.destination);

  osc.start();
  osc.stop(UACX.currentTime + 0.15);

  await new Promise(r => setTimeout(r, 150));
}
async function beepOff() {
  const osc = UACX.createOscillator();
  const gain = UACX.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(700, UACX.currentTime);
  osc.frequency.linearRampToValueAtTime(300, UACX.currentTime + 0.18);

  gain.gain.setValueAtTime(0.15, UACX.currentTime);
  gain.gain.linearRampToValueAtTime(0, UACX.currentTime + 0.18);

  osc.connect(gain);
  gain.connect(UACX.destination);

  osc.start();
  osc.stop(UACX.currentTime + 0.18);

  await new Promise(r => setTimeout(r, 180));
}

function botonVoz(_dadoBoton, _dadaFN) {
  let _b = _dadoBoton, _cb=_dadaFN;
  _b.style.userSelect = "none";
  const SPRC = window.SpeechRecognition || window.webkitSpeechRecognition;
  const _r = new SPRC();

  _r.lang = "es-ES";
  _r.interimResults = false;
  _r.continuous = false;

  let _g = false;
  let _f = "";

  _r.onresult = (e) => {
    _f = e.results[0][0].transcript;
  };

  _b[AELT]("pointerdown", () => {_f = "",_g = true,beepOn(),_r.start();});
  _b[AELT]("pointerup", async () => {
    if(!_g) return;
    _g = false;
    await esperar(500);
    _r.stop();
    beepOff();
    console.log("Escuchado: [%s]", _f)
    _cb(_f);
  });
}

Habilitar.socketio = async function(_clave="general",_op={}) {
    if( !window.io )
    await cargarJS("https://vps-5887386-x.dattaweb.com/socket.io/socket.io.js") ;
    UU.socket = io("https://vps-5887386-x.dattaweb.com") ;
    UU.socket.enviar = function( _evento, ..._otros ) {
        if(_op.debug)console.log("Enviando evento [%s] con %s", _evento, _otros) ;
        UU.socket.emit( "broadcast", "%s>>%s".pf(_clave,_evento), ..._otros ) ;
    }

    UU.socket.agregar = function(_evento, _fn) {
        if( _op.debug ) console.log( "Preparando el evento [%s], %O", _evento, _fn ) ;
        UU.socket.on(_evento, _fn) ;
    }
    return UU.socket ;
}

/*Habilitar.joysticks = async function( _eventos ) {
    UU._joysticks = {} ;
    window[AELT]("gamepadconnected", function( _o ){
        let _joystick = _o.gamepad ;
        _joysticks[ _joystick.id] = ( _joystick );
        console.log( "Joystick conectado - Código [%s]", _joystick.id ) ;
        _joystick.iniciar = function() {
            let _botonesAnteriores = [] ;
            _joystick.timer = setInterval( function(){
                let _j = navigator.getGamepads().filter(x=> x && x.id==_joystick.id)[0] ;
                _j.ejes = _j.axes.map( x=> +x.toFixed(3)) ;
                let _botonesActual = _j.buttons.map( x => x.pressed*1 ) ;
                _botonesActual.forEach(  )
                _eventos?.leido?(_j) ;
            }, 100 ) ;
            _eventos?.iniciado?(_joystick) ;
        }
        _joystick.detener = function() {
            clearInterval( _joystick.timer )
        }
        _joystick.iniciar() ;
    })
    window[AELT]("gamepaddisconnected", function(_o){
        let _j = _o.gamepad ;
        _joysticks[_j.id].detener() ;
        delete _joysticks[_j.id] ;
    })
}*/
Habilitar.joysticks = function({
    conectado,
    botones,
    ejes,
    desconectado
}={}) {
    let gpPv = {};

    UU[AELT]("gamepadconnected", (e) => {
        let gp=e.gamepad;
        gpPV[gp.index] = {
            botones: gp.buttons.map(b => b.pressed),
            ejes: [...gp.axes]
        };
        if (conectado) conectado(gp);
    });

    UU[AELT]("gamepaddisconnected", (e) => {
        let gp=e.gamepad;
        delete gpPv[gp.index];
        if (desconectado) desconectado(gp);
    });

    function loop() {
        const gamepads = navigator.getGamepads();

        for (let i = 0; i < gamepads.length; i++) {
            const gp = gamepads[i];
            if (!gp) continue;

            if (!gpPv[gp.index]) {
                gpPv[gp.index] = {
                    botones: gp.buttons.map(b => b.pressed*1),
                    ejes: [...gp.axes]
                };
            }

            const prev = gpPv[gp.index];

            // 🎮 BOTONES
            gp.buttons.forEach((btn, idx) => {
                const anterior = prev.botones[idx];
                const actual = btn.pressed;

                if (anterior !== actual) {
                    if (botones) {
                        botones({
                            gamepad: gp,
                            indice: idx,
                            estado: actual ? 1 : 0
                        });
                    }
                }
            });
            gp.axes.forEach((valor, idx) => {
                const anterior = prev.ejes[idx];
                if (Math.abs(valor - anterior) > 0.01) {
                    if (ejes) {
                        ejes({
                            gamepad: gp,
                            indice: idx,
                            valor: valor
                        });
                    }
                }
            });
            gpPv[gp.index] = {
                botones: gp.buttons.map(b => b.pressed),
                ejes: [...gp.axes]
            };
        }

        requestAnimationFrame(loop);
    }
    loop();
}
