var Pixastic=function(){function e(e,t,n){if(e.addEventListener)e.addEventListener(t,n,false);else if(e.attachEvent)e.attachEvent("on"+t,n)}function t(t){var n=false;var r=function(){if(!n){n=true;t()}};document.write("<"+'script defer src="//:" id="__onload_ie_pixastic__"></'+"script>");var i=document.getElementById("__onload_ie_pixastic__");i.onreadystatechange=function(){if(i.readyState=="complete"){i.parentNode.removeChild(i);r()}};if(document.addEventListener)document.addEventListener("DOMContentLoaded",r,false);e(window,"load",r)}function n(){var e=r("pixastic",null,"img");var t=r("pixastic",null,"canvas");var n=e.concat(t);for(var i=0;i<n.length;i++){(function(){var e=n[i];var t=[];var r=e.className.split(" ");for(var s=0;s<r.length;s++){var o=r[s];if(o.substring(0,9)=="pixastic-"){var u=o.substring(9);if(u!="")t.push(u)}}if(t.length){if(e.tagName.toLowerCase()=="img"){var a=new Image;a.src=e.src;if(a.complete){for(var f=0;f<t.length;f++){var l=Pixastic.applyAction(e,e,t[f],null);if(l)e=l}}else{a.onload=function(){for(var n=0;n<t.length;n++){var r=Pixastic.applyAction(e,e,t[n],null);if(r)e=r}}}}else{setTimeout(function(){for(var n=0;n<t.length;n++){var r=Pixastic.applyAction(e,e,t[n],null);if(r)e=r}},1)}}})()}}function r(e,t,n){var r=new Array;if(t==null)t=document;if(n==null)n="*";var s=t.getElementsByTagName(n);var o=s.length;var u=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0,j=0;i<o;i++){if(u.test(s[i].className)){r[j]=s[i];j++}}return r}function o(e,t){if(!Pixastic.debug)return;try{switch(t){case"warn":console.warn("Pixastic:",e);break;case"error":console.error("Pixastic:",e);break;default:console.log("Pixastic:",e)}}catch(n){}if(!s){}}if(typeof pixastic_parseonload!="undefined"&&pixastic_parseonload)t(n);var s;var u=function(){var e=document.createElement("canvas");var t=false;try{t=!!(typeof e.getContext=="function"&&e.getContext("2d"))}catch(n){}return function(){return t}}();var a=function(){var e=document.createElement("canvas");var t=false;var n;try{if(typeof e.getContext=="function"&&(n=e.getContext("2d"))){t=typeof n.getImageData=="function"}}catch(r){}return function(){return t}}();var f=function(){var e=false;var t=document.createElement("canvas");if(u()&&a()){t.width=t.height=1;var n=t.getContext("2d");n.fillStyle="rgb(255,0,0)";n.fillRect(0,0,1,1);var r=document.createElement("canvas");r.width=r.height=1;var i=r.getContext("2d");i.fillStyle="rgb(0,0,255)";i.fillRect(0,0,1,1);n.globalAlpha=.5;n.drawImage(r,0,0);var s=n.getImageData(0,0,1,1).data;e=s[2]!=255}return function(){return e}}();return{parseOnLoad:false,debug:false,applyAction:function(e,t,n,r){r=r||{};var i=e.tagName.toLowerCase()=="canvas";if(i&&Pixastic.Client.isIE()){if(Pixastic.debug)o("Tried to process a canvas element but browser is IE.");return false}var s,u;var a=false;if(Pixastic.Client.hasCanvas()){a=!!r.resultCanvas;s=r.resultCanvas||document.createElement("canvas");u=s.getContext("2d")}var f=e.offsetWidth;var l=e.offsetHeight;if(i){f=e.width;l=e.height}if(f==0||l==0){if(e.parentNode==null){var c=e.style.position;var h=e.style.left;e.style.position="absolute";e.style.left="-9999px";document.body.appendChild(e);f=e.offsetWidth;l=e.offsetHeight;document.body.removeChild(e);e.style.position=c;e.style.left=h}else{if(Pixastic.debug)o("Image has 0 width and/or height.");return}}if(n.indexOf("(")>-1){var p=n;n=p.substr(0,p.indexOf("("));var d=p.match(/\((.*?)\)/);if(d[1]){d=d[1].split(";");for(var v=0;v<d.length;v++){thisArg=d[v].split("=");if(thisArg.length==2){if(thisArg[0]=="rect"){var m=thisArg[1].split(",");r[thisArg[0]]={left:parseInt(m[0],10)||0,top:parseInt(m[1],10)||0,width:parseInt(m[2],10)||0,height:parseInt(m[3],10)||0}}else{r[thisArg[0]]=thisArg[1]}}}}}if(!r.rect){r.rect={left:0,top:0,width:f,height:l}}else{r.rect.left=Math.round(r.rect.left);r.rect.top=Math.round(r.rect.top);r.rect.width=Math.round(r.rect.width);r.rect.height=Math.round(r.rect.height)}var g=false;if(Pixastic.Actions[n]&&typeof Pixastic.Actions[n].process=="function"){g=true}if(!g){if(Pixastic.debug)o('Invalid action "'+n+'". Maybe file not included?');return false}if(!Pixastic.Actions[n].checkSupport()){if(Pixastic.debug)o('Action "'+n+'" not supported by this browser.');return false}if(Pixastic.Client.hasCanvas()){if(s!==e){s.width=f;s.height=l}if(!a){s.style.width=f+"px";s.style.height=l+"px"}u.drawImage(t,0,0,f,l);if(!e.__pixastic_org_image){s.__pixastic_org_image=e;s.__pixastic_org_width=f;s.__pixastic_org_height=l}else{s.__pixastic_org_image=e.__pixastic_org_image;s.__pixastic_org_width=e.__pixastic_org_width;s.__pixastic_org_height=e.__pixastic_org_height}}else if(Pixastic.Client.isIE()&&typeof e.__pixastic_org_style=="undefined"){e.__pixastic_org_style=e.style.cssText}var y={image:e,canvas:s,width:f,height:l,useData:true,options:r};var b=Pixastic.Actions[n].process(y);if(!b){return false}if(Pixastic.Client.hasCanvas()){if(y.useData){if(Pixastic.Client.hasCanvasImageData()){s.getContext("2d").putImageData(y.canvasData,r.rect.left,r.rect.top);s.getContext("2d").fillRect(0,0,0,0)}}if(!r.leaveDOM){s.title=e.title;s.imgsrc=e.imgsrc;if(!i)s.alt=e.alt;if(!i)s.imgsrc=e.src;s.className=e.className;s.style.cssText=e.style.cssText;s.name=e.name;s.tabIndex=e.tabIndex;s.id=e.id;if(e.parentNode&&e.parentNode.replaceChild){e.parentNode.replaceChild(s,e)}}r.resultCanvas=s;return s}return e},prepareData:function(e,t){var n=e.canvas.getContext("2d");var r=e.options.rect;var i=n.getImageData(r.left,r.top,r.width,r.height);var s=i.data;if(!t)e.canvasData=i;return s},process:function(e,t,n,r){if(e.tagName.toLowerCase()=="img"){var i=new Image;i.src=e.src;if(i.complete){var s=Pixastic.applyAction(e,i,t,n);if(r)r(s);return s}else{i.onload=function(){var s=Pixastic.applyAction(e,i,t,n);if(r)r(s)}}}if(e.tagName.toLowerCase()=="canvas"){var s=Pixastic.applyAction(e,e,t,n);if(r)r(s);return s}},revert:function(e){if(Pixastic.Client.hasCanvas()){if(e.tagName.toLowerCase()=="canvas"&&e.__pixastic_org_image){e.width=e.__pixastic_org_width;e.height=e.__pixastic_org_height;e.getContext("2d").drawImage(e.__pixastic_org_image,0,0);if(e.parentNode&&e.parentNode.replaceChild){e.parentNode.replaceChild(e.__pixastic_org_image,e)}return e}}else if(Pixastic.Client.isIE()){if(typeof e.__pixastic_org_style!="undefined")e.style.cssText=e.__pixastic_org_style}},Client:{hasCanvas:u,hasCanvasImageData:a,hasGlobalAlpha:f,isIE:function(){return!!document.all&&!!window.attachEvent&&!window.opera}},Actions:{}}}();Pixastic.Actions.hsl={process:function(e){var t=parseInt(e.options.hue,10)||0;var n=(parseInt(e.options.saturation,10)||0)/100;var r=(parseInt(e.options.lightness,10)||0)/100;if(n<0){var i=1+n}else{var i=1+n*2}t=t%360/360;var s=t*6;var o=1/255;var u=r*255;var a=1+r;var f=1-r;if(Pixastic.Client.hasCanvasImageData()){var l=Pixastic.prepareData(e);var c=e.options.rect;var h=c.width*c.height;var p=h*4,d=p+1,v=p+2,m=p+3;while(h--){var g=l[p-=4];var y=l[d=p+1];var b=l[v=p+2];if(t!=0||n!=0){var w=g;if(y>w)w=y;if(b>w)w=b;var E=g;if(y<E)E=y;if(b<E)E=b;var S=w-E;var x=(E+w)/510;if(x>0){if(S>0){if(x<=.5){var T=S/(w+E)*i;if(T>1)T=1;var N=x*(1+T)}else{var T=S/(510-w-E)*i;if(T>1)T=1;var N=x+T-x*T}if(g==w){if(y==E)var C=5+(w-b)/S+s;else var C=1-(w-y)/S+s}else if(y==w){if(b==E)var C=1+(w-g)/S+s;else var C=3-(w-b)/S+s}else{if(g==E)var C=3+(w-y)/S+s;else var C=5-(w-g)/S+s}if(C<0)C+=6;if(C>=6)C-=6;var k=x+x-N;var L=C>>0;if(L==0){g=N*255;y=(k+(N-k)*(C-L))*255;b=k*255}else if(L==1){g=(N-(N-k)*(C-L))*255;y=N*255;b=k*255}else if(L==2){g=k*255;y=N*255;b=(k+(N-k)*(C-L))*255}else if(L==3){g=k*255;y=(N-(N-k)*(C-L))*255;b=N*255}else if(L==4){g=(k+(N-k)*(C-L))*255;y=k*255;b=N*255}else if(L==5){g=N*255;y=k*255;b=(N-(N-k)*(C-L))*255}}}}if(r<0){g*=a;y*=a;b*=a}else if(r>0){g=g*f+u;y=y*f+u;b=b*f+u}if(g<0)l[p]=0;else if(g>255)l[p]=255;else l[p]=g;if(y<0)l[d]=0;else if(y>255)l[d]=255;else l[d]=y;if(b<0)l[v]=0;else if(b>255)l[v]=255;else l[v]=b}return true}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData()}}

window.hWsApi = null;
var hitbtc = {
    currentSymbol: 'BTCUSD',
    symbols: {"ETHBTC":"ETH\/BTC","IXTBTC":"IXT\/BTC","ATSBTC":"ATS\/BTC","EBTCNEWBTC":"EBTC\/BTC","EBTCNEWETH":"EBTC\/ETH","EBTCNEWUSD":"EBTC\/USD","STUBTC":"STU\/BTC","STUETH":"STU\/ETH","BTXUSDT":"BTX\/USD","LTCETH":"LTC\/ETH","BCNETH":"BCN\/ETH","MAIDETH":"MAID\/ETH","NXTETH":"NXT\/ETH","STRATETH":"STRAT\/ETH","XDNETH":"XDN\/ETH","XEMETH":"XEM\/ETH","PLRBTC":"PLR\/BTC","SURBTC":"SUR\/BTC","BQXBTC":"BQX\/BTC","DOGEETH":"DOGE\/ETH","DRPUETH":"DRPU\/ETH","XRPETH":"XRP\/ETH","XRPUSDT":"XRP\/USD","SPFETH":"SPF\/ETH","STARETH":"STAR\/ETH","SBTCUSDT":"SBTC\/USD","XUCETH":"XUC\/ETH","XUCBTC":"XUC\/BTC","BTCUSD":"BTC\/USD","ADXBTC":"ADX\/BTC","ADXUSD":"ADX\/USD","LSKETH":"LSK\/ETH","LSKUSD":"LSK\/USD","PLRUSD":"PLR\/USD","SURUSD":"SUR\/USD","BQXUSD":"BQX\/USD","DRTUSDT":"DRT\/USD","REPETH":"REP\/ETH","REPUSDT":"REP\/USD","SNTBTC":"SNT\/BTC","ZECBTC":"ZEC\/BTC","XMRBTC":"XMR\/BTC","ARDRBTC":"ARDR\/BTC","DASHBTC":"DASH\/BTC","LSKBTC":"LSK\/BTC","STEEMBTC":"STEEM\/BTC","LTCBTC":"LTC\/BTC","EMCBTC":"EMC\/BTC","XDNBTC":"XDN\/BTC","WAVESBTC":"WAVES\/BTC","DOGEBTC":"DOGE\/BTC","XEMBTC":"XEM\/BTC","NXTBTC":"NXT\/BTC","FCNBTC":"FCN\/BTC","BCNBTC":"BCN\/BTC","ZECUSD":"ZEC\/USD","XEMUSD":"XEM\/USD","BCNUSD":"BCN\/USD","XDNUSD":"XDN\/USD","MAIDUSD":"MAID\/USD","SCBTC":"SC\/BTC","LTCUSD":"LTC\/USD","COSSBTC":"COSS\/BTC","SBDBTC":"SBD\/BTC","DSHBTC":"DSH\/BTC","DOGEUSD":"DOGE\/USD","MAIDBTC":"MAID\/BTC","AMPBTC":"AMP\/BTC","BUSBTC":"BUS\/BTC","DGDBTC":"DGD\/BTC","ICNBTC":"ICN\/BTC","SNGLSBTC":"SNGLS\/BTC","1STBTC":"1ST\/BTC","TRSTBTC":"TRST\/BTC","GNOBTC":"GNO\/BTC","REPBTC":"REP\/BTC","TIMEBTC":"TIME\/BTC","QCNBTC":"QCN\/BTC","CLDBTC":"CLD\/BTC","ICXBTC":"ICX\/BTC","MANAETH":"MANA\/ETH","MANABTC":"MANA\/BTC","NEOBTC":"NEO\/BTC","ELMBTC":"ELM\/BTC","ECHBTC":"ECH\/BTC","EDOBTC":"EDO\/BTC","DATABTC":"DATA\/BTC","CSNOBTC":"CSNO\/BTC","ORMEBTC":"ORME\/BTC","POLLBTC":"POLL\/BTC","ICXUSD":"ICX\/USD","DLTBTC":"DLT\/BTC","PIXBTC":"PIX\/BTC","UTTBTC":"UTT\/BTC","BNTETH":"BNT\/ETH","BNTUSD":"BNT\/USD","KICKBTC":"KICK\/BTC","SCLBTC":"SCL\/BTC","YOYOWBTC":"YOYOW\/BTC","BCCBTC":"BCC\/BTC","KMDBTC":"KMD\/BTC","QAUBTC":"QAU\/BTC","MIPSBTC":"MIPS\/BTC","XVGBTC":"XVG\/BTC","DNTBTC":"DNT\/BTC","FYPBTC":"FYP\/BTC","ATLBTC":"ATL\/BTC","OPTBTC":"OPT\/BTC","DGBBTC":"DGB\/BTC","ETPBTC":"ETP\/BTC","EKOBTC":"EKO\/BTC","STXBTC":"STX\/BTC","OTXBTC":"OTX\/BTC","LATBTC":"LAT\/BTC","DRPUBTC":"DRPU\/BTC","NEBLBTC":"NEBL\/BTC","HACBTC":"HAC\/BTC","VIBEBTC":"VIBE\/BTC","CATBTC":"CAT\/BTC","CTXBTC":"CTX\/BTC","VOISEBTC":"VOISE\/BTC","ENJBTC":"ENJ\/BTC","TIOBTC":"TIO\/BTC","ELEBTC":"ELE\/BTC","BCHBTC":"BCH\/BTC","WAXBTC":"WAX\/BTC","ZSCBTC":"ZSC\/BTC","ARNBTC":"ARN\/BTC","ZRCBTC":"ZRC\/BTC","SISABTC":"SISA\/BTC","BOSBTC":"BOS\/BTC","DCTBTC":"DCT\/BTC","ANTBTC":"ANT\/BTC","ETBSBTC":"ETBS\/BTC","ULTCBTC":"ULTC\/BTC","TRXBTC":"TRX\/BTC","EETBTC":"EET\/BTC","INDIBTC":"INDI\/BTC","VENBTC":"VEN\/BTC","BTXBTC":"BTX\/BTC","C20BTC":"C20\/BTC","ZRXBTC":"ZRX\/BTC","ARTBTC":"ART\/BTC","IDHBTC":"IDH\/BTC","RVTBTC":"RVT\/BTC","EVXETH":"EVX\/ETH","IPLBTC":"IPL\/BTC","ICOSBTC":"ICOS\/BTC","EBTCOLDBTC":"EBTCOLD\/BTC","AEBTC":"AE\/BTC","PTOYBTC":"PTOY\/BTC","PPCBTC":"PPC\/BTC","ITSBTC":"ITS\/BTC","BKBBTC":"BKB\/BTC","AMMBTC":"AMM\/BTC","EXNBTC":"EXN\/BTC","TGTBTC":"TGT\/BTC","VERIBTC":"VERI\/BTC","UGTBTC":"UGT\/BTC","DBIXBTC":"DBIX\/BTC","PREBTC":"PRE\/BTC","PRGBTC":"PRG\/BTC","KBRBTC":"KBR\/BTC","CFIBTC":"CFI\/BTC","CTRBTC":"CTR\/BTC","TBTBTC":"TBT\/BTC","EROBTC":"ERO\/BTC","PLBTBTC":"PLBT\/BTC","SMSBTC":"SMS\/BTC","BNTBTC":"BNT\/BTC","BMCBTC":"BMC\/BTC","BMTBTC":"BMT\/BTC","ZAPBTC":"ZAP\/BTC","DOVBTC":"DOV\/BTC","SUBBTC":"SUB\/BTC","CNDBTC":"CND\/BTC","FRDBTC":"FRD\/BTC","WTCBTC":"WTC\/BTC","OTNBTC":"OTN\/BTC","XTZBTC":"XTZ\/BTC","SKINBTC":"SKIN\/BTC","CNXBTC":"CNX\/BTC","DICEBTC":"DICE\/BTC","EMGOBTC":"EMGO\/BTC","ATBBTC":"ATB\/BTC","CFIETH":"CFI\/ETH","PTOYETH":"PTOY\/ETH","HSRBTC":"HSR\/BTC","1STETH":"1ST\/ETH","LENDBTC":"LEND\/BTC","XAURETH":"XAUR\/ETH","ODNBTC":"ODN\/BTC","TAASETH":"TAAS\/ETH","BTMBTC":"BTM\/BTC","TIMEETH":"TIME\/ETH","FUNBTC":"FUN\/BTC","DICEETH":"DICE\/ETH","SWTETH":"SWT\/ETH","SBTCBTC":"SBTC\/BTC","XMRETH":"XMR\/ETH","ETCETH":"ETC\/ETH","B2XBTC":"B2X\/BTC","DASHETH":"DASH\/ETH","HVNBTC":"HVN\/BTC","BTCABTC":"BTCA\/BTC","ZECETH":"ZEC\/ETH","PLUETH":"PLU\/ETH","GNOETH":"GNO\/ETH","FUELBTC":"FUEL\/BTC","XRPBTC":"XRP\/BTC","ATMBTC":"ATM\/BTC","NETETH":"NET\/ETH","WRCBTC":"WRC\/BTC","STRATUSD":"STRAT\/USD","POEBTC":"POE\/BTC","LIFEBTC":"LIFE\/BTC","STRATBTC":"STRAT\/BTC","LOCBTC":"LOC\/BTC","VIBBTC":"VIB\/BTC","MCAPBTC":"MCAP\/BTC","SWFTCBTC":"SWFTC\/BTC","EOSBTC":"EOS\/BTC","NTOBTC":"NTO\/BTC","EOSUSD":"EOS\/USD","MNEBTC":"MNE\/BTC","BTGBTC":"BTG\/BTC","STORMBTC":"STORM\/BTC","ICOBTC":"ICO\/BTC","PINGBTC":"PING\/BTC","SMARTBTC":"SMART\/BTC","GAMEBTC":"GAME\/BTC","XTZETH":"XTZ\/ETH","DIMBTC":"DIM\/BTC","HPCBTC":"HPC\/BTC","XTZUSD":"XTZ\/USD","NGCBTC":"NGC\/BTC","MTHBTC":"MTH\/BTC","IXTETH":"IXT\/ETH","WMGOBTC":"WMGO\/BTC","CLBTC":"CL\/BTC","EMCETH":"EMC\/ETH","MCOBTC":"MCO\/BTC","LRCBTC":"LRC\/BTC","COSSETH":"COSS\/ETH","MCOUSD":"MCO\/USD","CLDETH":"CLD\/ETH","ICXETH":"ICX\/ETH","CLDUSD":"CLD\/USD","NEOETH":"NEO\/ETH","CPAYETH":"CPAY\/ETH","EVXUSD":"EVX\/USD","NEOUSD":"NEO\/USD","EDOETH":"EDO\/ETH","DATAETH":"DATA\/ETH","EDOUSD":"EDO\/USD","HGTETH":"HGT\/ETH","DATAUSD":"DATA\/USD","PIXETH":"PIX\/ETH","UTTETH":"UTT\/ETH","INDETH":"IND\/ETH","UTTUSD":"UTT\/USD","BCCETH":"BCC\/ETH","KMDETH":"KMD\/ETH","QAUETH":"QAU\/ETH","MANAUSD":"MANA\/USD","BCCUSD":"BCC\/USD","KMDUSD":"KMD\/USD","XVGETH":"XVG\/ETH","XVGUSD":"XVG\/USD","DGBETH":"DGB\/ETH","DGBUSD":"DGB\/USD","ETPETH":"ETP\/ETH","EKOETH":"EKO\/ETH","TNTETH":"TNT\/ETH","ETPUSD":"ETP\/USD","DCNETH":"DCN\/ETH","DCNUSD":"DCN\/USD","STXETH":"STX\/ETH","CDXETH":"CDX\/ETH","STXUSD":"STX\/USD","CCTETH":"CCT\/ETH","EBETETH":"EBET\/ETH","NEBLETH":"NEBL\/ETH","CATETH":"CAT\/ETH","CTXETH":"CTX\/ETH","CATUSD":"CAT\/USD","ENJETH":"ENJ\/ETH","TIOETH":"TIO\/ETH","ENJUSD":"ENJ\/USD","TIOUSD":"TIO\/USD","BCHETH":"BCH\/ETH","BCHUSD":"BCH\/USD","WAXETH":"WAX\/ETH","ZSCETH":"ZSC\/ETH","ARNETH":"ARN\/ETH","WAXUSD":"WAX\/USD","ENGETH":"ENG\/ETH","ZSCUSD":"ZSC\/USD","SISAETH":"SISA\/ETH","XUCUSD":"XUC\/USD","TRXETH":"TRX\/ETH","EETETH":"EET\/ETH","GVTETH":"GVT\/ETH","TRXUSD":"TRX\/USD","EETUSD":"EET\/USD","BASETH":"BAS\/ETH","VENETH":"VEN\/ETH","C20ETH":"C20\/ETH","ZRXETH":"ZRX\/ETH","VENUSD":"VEN\/USD","ZRXUSD":"ZRX\/USD","IDHETH":"IDH\/ETH","QVTETH":"QVT\/ETH","ICOSETH":"ICOS\/ETH","ICOSUSD":"ICOS\/USD","EBTCOLDETH":"EBTCOLD\/ETH","EBTCOLDUSD":"EBTCOLD\/USD","PPCUSD":"PPC\/USD","QTUMETH":"QTUM\/ETH","AMMETH":"AMM\/ETH","ATSETH":"ATS\/ETH","VERIETH":"VERI\/ETH","AMMUSD":"AMM\/USD","VERIUSD":"VERI\/USD","IGNISETH":"IGNIS\/ETH","UGTETH":"UGT\/ETH","UGTUSD":"UGT\/USD","PRGETH":"PRG\/ETH","CTRETH":"CTR\/ETH","PRGUSD":"PRG\/USD","CTRUSD":"CTR\/USD","SMSETH":"SMS\/ETH","SMSUSD":"SMS\/USD","BMCETH":"BMC\/ETH","BMTETH":"BMT\/ETH","BMCUSD":"BMC\/USD","SNTETH":"SNT\/ETH","DOVETH":"DOV\/ETH","SUBETH":"SUB\/ETH","CNDETH":"CND\/ETH","SUBUSD":"SUB\/USD","CNDUSD":"CND\/USD","BQXETH":"BQX\/ETH","EMGOUSD":"EMGO\/USD","ATBETH":"ATB\/ETH","CDTETH":"CDT\/ETH","ATBUSD":"ATB\/USD","CDTUSD":"CDT\/USD","LENDETH":"LEND\/ETH","BTMETH":"BTM\/ETH","FUNETH":"FUN\/ETH","BTMUSD":"BTM\/USD","SBTCETH":"SBTC\/ETH","FUNUSD":"FUN\/USD","B2XETH":"B2X\/ETH","HVNETH":"HVN\/ETH","BTCAETH":"BTCA\/ETH","B2XUSD":"B2X\/USD","BTCAUSD":"BTCA\/USD","FUELETH":"FUEL\/ETH","ATMETH":"ATM\/ETH","FUELUSD":"FUEL\/USD","ATMUSD":"ATM\/USD","WRCETH":"WRC\/ETH","WRCUSD":"WRC\/USD","POEETH":"POE\/ETH","SNCETH":"SNC\/ETH","ADXETH":"ADX\/ETH","LOCETH":"LOC\/ETH","VIBETH":"VIB\/ETH","BETETH":"BET\/ETH","LOCUSD":"LOC\/USD","VIBUSD":"VIB\/USD","EOSETH":"EOS\/ETH","DRTETH":"DRT\/ETH","DENTETH":"DENT\/ETH","STUUSD":"STU\/USD","HDGETH":"HDG\/ETH","SWFTCETH":"SWFTC\/ETH","SANETH":"SAN\/ETH","SWFTCUSD":"SWFTC\/USD","BTGETH":"BTG\/ETH","DIMETH":"DIM\/ETH","MSPETH":"MSP\/ETH","DDFETH":"DDF\/ETH","BTGUSD":"BTG\/USD","DIMUSD":"DIM\/USD","RKCETH":"RKC\/ETH","TKRETH":"TKR\/ETH","SMARTETH":"SMART\/ETH","UETETH":"UET\/ETH","PPTETH":"PPT\/ETH","SMARTUSD":"SMART\/USD","MYBETH":"MYB\/ETH","NGCETH":"NGC\/ETH","SURETH":"SUR\/ETH","MTHETH":"MTH\/ETH","NGCUSD":"NGC\/USD","PLRETH":"PLR\/ETH","WMGOUSD":"WMGO\/USD","CLETH":"CL\/ETH","TIXETH":"TIX\/ETH","NDCETH":"NDC\/ETH","CLUSD":"CL\/USD","PROETH":"PRO\/ETH","AVTETH":"AVT\/ETH","LRCETH":"LRC\/ETH","LAETH":"LA\/ETH","MCOETH":"MCO\/ETH","GUPBTC":"GUP\/BTC","PLUBTC":"PLU\/BTC","LUNBTC":"LUN\/BTC","TAASBTC":"TAAS\/BTC","NXCBTC":"NXC\/BTC","EDGBTC":"EDG\/BTC","RLCBTC":"RLC\/BTC","SWTBTC":"SWT\/BTC","TKNBTC":"TKN\/BTC","WINGSBTC":"WINGS\/BTC","XAURBTC":"XAUR\/BTC","AIRBTC":"AIR\/BTC","AIRETH":"AIR\/ETH","AIRUSD":"AIR\/USD","SNMETH":"SNM\/ETH","CDTBTC":"CDT\/BTC","EVXBTC":"EVX\/BTC","XMRUSD":"XMR\/USD","ETCBTC":"ETC\/BTC","ETCUSD":"ETC\/USD","DASHUSD":"DASH\/USD","ETHUSD":"ETH\/USD","NXTUSD":"NXT\/USD","XDNCOBTC":"XDNCO\/BTC","FYNETH":"FYN\/ETH","CVCUSD":"CVC\/USD","PAYBTC":"PAY\/BTC","PPTBTC":"PPT\/BTC","OMGBTC":"OMG\/BTC","AEONBTC":"AEON\/BTC","TNTUSD":"TNT\/USD","TNTBTC":"TNT\/BTC","SNCBTC":"SNC\/BTC","SNCUSD":"SNC\/USD","OAXUSD":"OAX\/USD","OAXBTC":"OAX\/BTC","QTUMBTC":"QTUM\/BTC","PAYETH":"PAY\/ETH","OAXETH":"OAX\/ETH","OMGETH":"OMG\/ETH","QTUMUSD":"QTUM\/USD","EMCUSDT":"EMC\/USD","SNTUSD":"SNT\/USD","OMGUSD":"OMG\/USD"},
    serverUrl: 'https://hitbtc.com/',
    bg: "data:image/png;base64,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",
    css: '#hitbtc-ticker{cursor:pointer; font-family:Verdana,Arial,Helvetica,sans-serif; font-size: 14px; color:#ffffff; width:275px; height:160px; position:relative; overflow-y:visible;}' +
    '#hitbtc-ticker #hitbtc-main-value{position:absolute; font-size:50px; font-weight:bold; margin:66px auto auto 14px;line-height:62px;z-index: 4;}' +
    '#hitbtc-ticker .small{font-size:8px; float:right; clear:both; line-height:16px;}' +
    '#hitbtc-ticker .small span{font-weight:bold; min-width:40px; display:inline-block;}' +
    '#hitbtc-ticker .top-block{padding:10px;z-index: 5; position:relative;}' +
    '#hitbtc-ticker #hitbtc-selector-label{padding:5px; width:100%; cursor:pointer; line-height:20px; text-align:left;}' +
    '#hitbtc-ticker #hitbtc-selector-label:after{content:""; height:6px; position:absolute; right:10px; top:15px; width:10px; background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAARklEQVR42mOYe/KWBBAzMuAAQDkOIOYFMeqAOBmImbAoEgPiTiA2B3F4gbgeXTGSoiBknSiKsSrCojgDpyI0xZVAHIAuBwBFZVBReBmICwAAAABJRU5ErkJggg==");}' +
    '#hitbtc-ticker #hitbtc-selector{border:1px solid rgba(255, 255, 255, 0.4); border-radius:5px; -moz-border-radius:5px; -webkit-border-radius:5px; position:absolute; margin:11px 0 0 16px; z-index:999; font-weight:bold;width:132px;}' +
    '#hitbtc-ticker #hitbtc-selector:hover{border:1px solid rgba(255, 255, 255, 0.6);}' +
    '#hitbtc-ticker #hitbtc-selector ul{overflow-y: auto; text-align:left; position:relative; z-index: 20;color:#0e6887; list-style-type:none; display:none; background-color:#eaf3f6; margin:0; padding-left:0px; width:130px; cursor: pointer; outline:none; -webkit-border-bottom-right-radius:5px; -webkit-border-bottom-left-radius:5px; -moz-border-radius-bottomright:5px; -moz-border-radius-bottomleft:5px; border-bottom-right-radius:5px; border-bottom-left-radius:5px;	position: absolute;}' +
    '#hitbtc-ticker #hitbtc-selector ul.up{border-top-right-radius: 5px;border-top-left-radius: 5px;border-bottom-right-radius: 0;border-bottom-left-radius: 0;}' +
    '#hitbtc-ticker #hitbtc-selector ul li{padding-left:10px;}' +
    '#hitbtc-ticker #hitbtc-selector ul li:hover{color:#ffffff; background-color:#0a6280;}' +
    '#hitbtc-ticker #hitbtc-logo{font-size:8px; position:absolute; z-index:6;display:inline-block; height:20px; width:100%; left:0; bottom: 0; text-align:right;}' +
    '#hitbtc-ticker #hitbtc-logo:after{margin:-13px 5px 0 -2px; height:27px; width:30px; z-index:6; display:inline-block; content:""; background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAbCAYAAABr/T8RAAACDUlEQVR42sWW20sCURCHNaIiL1BERdlTD0EXoogi6iEIpEhLCiKqhwp1va5pFzNN/c9tBn4Lw7BH20oVPnbZPZ7vzJzZ2fX5hvDrdDq7w5CuEclBSxeJOnHeT8kycUBEiSvijsgQT8RKv4RJwiLa4IsoEzEi6HXCBWIVx0nDmLiQpcT5DTHrVThBnKoImE8ijxRyJCe4nsExieORV6Gf2CTeMEFaiZkWRBUxjq/ZiDjuVTqPIpCSd7VnlriWcckGF9SI17Q21URVHOuIvKYW5Ix/RqQc/S1nzWtaNVkI3yGVWLhXVf+pd+1QIq0vRA4rTkFWRlqz2Du9oBwKrID/FBH9J+7zwkIm8Z7aP03eUFwN4oMoGQougSxcd4t6nDjGZFrsTNxUW2GJvdVyruozYprYMj33cgFh4kKktagmLChRTaRci/OImOcK/LS654h7VKlboVVwLjPwqsQtscANr8/zvXp2a4gkDdGLSr0UO3XBWUt4Fc9A2DZE9ijS3USxSXEVdVP6zdsm6tKVnHNuNhEhTyuxs/+260sCDYS71oyhm5kayyrGOPIGsNXjyFnb79a9gixyubdtEAfEGEeeVmILtTL2m3T7VQPhvSy4jIug29lC+sDP81++LJaEmKs5ZhgXgYylOz1fFD+UX4rGst7j82fqP7+nQqhqrtTwoD9RD7lYhvFBPsryv87zDU/dGVhEPb6qAAAAAElFTkSuQmCC");}' +
    '#hitbtc-ticker #hitbtc-logo b{font-size:12px; opacity:0.60; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha"(Opacity=60); filter:alpha(opacity=60);}' +
    '#hitbtc-ticker #hitbtc-selector ul li:first-child:hover{border-radius:0;}' +
    '#hitbtc-ticker #hitbtc-selector ul li:last-child:hover{-webkit-border-bottom-right-radius:5px; -webkit-border-bottom-left-radius:5px; -moz-border-radius-bottomright:5px; -moz-border-radius-bottomleft:5px; border-bottom-right-radius:5px; border-bottom-left-radius:5px;}' +
    '#hitbtc-ticker #hitbtc-selector ul.up li:first-child:hover{-webkit-border-top-right-radius:5px; -webkit-border-top-left-radius:5px; -moz-border-radius-topright:5px; -moz-border-radius-topleft:5px; border-top-right-radius:5px; border-top-left-radius:5px;}' +
    '#hitbtc-ticker #hitbtc-selector ul.up li:last-child:hover{border-radius:0;}' +
    '#hitbtc-ticker .small-font{font-size: 36px!important;}' +
    '#hitbtc-ticker .super-small-font{font-size: 28px!important;}' +
    '#hitbtc-ticker .big-font{font-size: 50px!important;}' +
    '#hitbtc-ticker canvas, #hitbtc-ticker img{display:block; width:275px; height:160px;}' +
    '#hitbtc-canvas {position: absolute; top: 0; left: 0; z-index: 1;}' +

    '#hitbtc-ticker.hit-small{font-size: 9px; width:193px; height:112px;}' +
    '#hitbtc-ticker.hit-small #hitbtc-main-value{font-size:28px; margin-top:43px;}' +
    '#hitbtc-ticker.hit-small #hitbtc-selector{margin:8px 0 0 9px; width:92px;}' +
    '#hitbtc-ticker.hit-small #hitbtc-selector-label{width:80px; line-height:9px;}' +
    '#hitbtc-ticker.hit-small #hitbtc-logo{font-size:7px;}' +
    '#hitbtc-ticker.hit-small #hitbtc-logo:after{height:20px; margin:-8px -1px 0 -2px; width:27px; height:23px; background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAYAAAD6FjQuAAABaUlEQVR42u2UzUvDQBDFY8XisYhCDyKIB72IaNGbiuhVL5KqiFaoJmm1WvGzNYn+5/ENvIUhBGQ3rRdd+JHsJsybnX07njeGkWXZpvcbA0IroD2u4EtgHxyBJrgBW67BJsFEwXodXIA38AWGFJtxFVoGlyABPQY/BLugC27BI0jBqqtIDZwx45BP4R0EFJF5zO8N15Jtgw8lIGV6ZdCUuxwooRaYshVaVBkLL5y3QcTAIecd8Mn/xBAHNkLrLM+dOnBTQp2AnM813/sUanG3c7YW7uTOJ2UJEyUg4k/qv3OwZm0QsTjYYLBABQyUUe5zpjGuPHV1Y5UZd0lEQblLD9zxQImFTLDiKrigsjeGERFf7dac6zN3PF+mFflKrM+gFXDM65GokvasXEmB6dzljhlMnOpz3Qias4z5XivbaPcoFukGywbgc/0EzI6iq1eVO+sFHadR1KjLCMo9uhpp0B/u3473P/7c+AYzrqDa2+4mRgAAAABJRU5ErkJggg==");}' +
    '#hitbtc-ticker.hit-small #hitbtc-logo b{font-size:10px;}' +
    '#hitbtc-ticker.hit-small .small{line-height:14px; font-size:7px;}' +
    '#hitbtc-ticker.hit-small .top-block{padding:8px;}' +
    '#hitbtc-ticker.hit-small #hitbtc-selector ul{width:92px;}' +
    '#hitbtc-ticker.hit-small #hitbtc-selector-label:after{top: 8px;}' +
    '#hitbtc-ticker.hit-small .small-font{font-size: 22px!important;}' +
    '#hitbtc-ticker.hit-small .super-small-font{font-size: 18px!important;}' +
    '#hitbtc-ticker.hit-small .big-font{font-size: 28px!important;}' +
    '#hitbtc-ticker.hit-small canvas, #hitbtc-ticker.hit-small img{width:193px; height:112px;}' +

    '#hitbtc-ticker.hit-big{font-size:22px; width:495px; height:288px;}' +
    '#hitbtc-ticker.hit-big #hitbtc-main-value{font-size:74px; margin-top:145px;}' +
    '#hitbtc-ticker.hit-big #hitbtc-selector{margin:28px 0 0 35px; width: 186px;}' +
    '#hitbtc-ticker.hit-big #hitbtc-selector-label{width:175px; line-height:28px;}' +
    '#hitbtc-ticker.hit-big #hitbtc-logo{height:25px; font-size:9px;}' +
    '#hitbtc-ticker.hit-big .small{line-height:25px;font-size: 21px;}' +
    '#hitbtc-ticker.hit-big .small span{min-width:112px;}' +
    '#hitbtc-ticker.hit-big .top-block{padding:25px;}' +
    '#hitbtc-ticker.hit-big #hitbtc-selector ul{width:186px;}' +
    '#hitbtc-ticker.hit-big #hitbtc-selector-label:after{top: 18px;}' +
    '#hitbtc-ticker.hit-big .small-font{font-size: 50px!important;}' +
    '#hitbtc-ticker.hit-big .super-small-font{font-size: 50px!important;}' +
    '#hitbtc-ticker.hit-big .big-font{font-size: 74px!important;}' +
    '#hitbtc-ticker.hit-big canvas, #hitbtc-ticker.hit-big img{width:495px; height:288px;}',
    widget: function (element, size, color, defaultPair, refId) {
        var mainValue,
            askValue,
            bidValue,
            cacheData = {},
            connect = function () {
                
                subscribe(hitbtc.currentSymbol);
            },
            isEmptyObject = function (obj) {
                for (var name in obj) {
                    return false;
                }
                return true;
            },
            isUndefined = function (data) {
                return typeof data === 'undefined' || data === null;
            },
            addDataToCache = function (pair, data) {
                if (!isUndefined(data) && !isEmptyObject(data)) {
                    cacheData[pair] = data;
                }
            },
            getSymbolSign = function (currency) {
                switch (currency) {
                    case 'USD':
                        return '$';
                        break;
                    case 'EUR':
                        return '&euro;';
                        break;
                    case 'LTC':
                        return '&#321;';
                        break;
                    case 'BTC':
                        return '&#3647;';
                        break;
                    case 'DOG':
                        return 'D';
                        break;
                    default:
                        return currency;
                }
            },
            getFirstSymbolSign = function (currencyPair) {
                var currency = currencyPair.substr(currencyPair.length - 3, 3);
                return getSymbolSign(currency);
            },
            getSecondSymbolSign = function (currencyPair) {
                var currency = currencyPair.substr(0, 3);
                return getSymbolSign(currency);
            },
            updateWidget = function () {
                var main = 0,
                    bid = 0,
                    ask = 0,
                    symbolSign = getFirstSymbolSign(hitbtc.currentSymbol);

                if (!isUndefined(cacheData[hitbtc.currentSymbol])) {
                    var data = cacheData[hitbtc.currentSymbol];

                    if (!isUndefined(data.last)) {
                        main = data.last;
                    }

                    if (!isUndefined(data.bid)) {
                        bid = data.bid;
                    }

                    if (!isUndefined(data.ask)) {
                        ask = data.ask;
                    }
                }

                mainValue.innerHTML = symbolSign + ' ' + main;
                bidValue.innerHTML = symbolSign + ' ' + bid;
                askValue.innerHTML = symbolSign + ' ' + ask;

                if (mainValue.innerHTML.length > 9) {
                    mainValue.setAttribute("class", "super-small-font");
                } else if (mainValue.innerHTML.length > 8) {
                    mainValue.setAttribute("class", "small-font");
                } else {
                    mainValue.setAttribute("class", "big-font");
                }
            },
            unsubscribe = function (pair) {
                if (hWsApi && hWsApi.readyState == hWsApi.OPEN) {
                    hWsApi.send(JSON.stringify({channel: 'ticker', event: 'unsub', params:{symbol: pair}}));
                }
            },
            subscribe = function (pair) {
                var reconnectInterval = null;
                function wsInit() {
                    clearInterval(reconnectInterval);
                    hWsApi = new WebSocket('wss://api.hitbtc.com/api/2/ws');
                    hWsApi.onopen = function (e) {
                        if (hWsApi.readyState == hWsApi.OPEN) {
                            hWsApi.send(JSON.stringify({channel: 'ticker', event: 'sub', params:{symbol: pair}}));
                        }
                    };
                    hWsApi.onmessage = function (e) {
                        try {
                            var doc = JSON.parse(e.data.toString());
                            if (doc.data) {
                                addDataToCache(doc.data.symbol, doc.data);
                                updateWidget();
                            }
                        } catch (err) {
                            console.error(err);
                        }
                    };
                    hWsApi.onclose = function (e) {
                        reconnectInterval = setTimeout(function () {
                            wsInit();
                        }, 500);
                    };
                }

                if (hWsApi && hWsApi.readyState == hWsApi.OPEN) {
                    hWsApi.send(JSON.stringify({channel: 'ticker', event: 'sub', params:{symbol: pair}}));
                } else {
                    wsInit();
                }
            },
            stopEvent = function (e) {
                if (!e) {
                    e = window.event;
                }

                if (e.stopPropagation) {
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true;
                }
            },
            appendCss = function () {
                if (!document.getElementById('hit_widget_style')) {
                    var style = document.createElement('style'),
                        head = document.head || document.getElementsByTagName('head')[0];

                    style.id = 'hit_widget_style';
                    style.type = 'text/css';
                    if (style.styleSheet) {
                        style.styleSheet.cssText = hitbtc.css;
                    } else {
                        style.appendChild(document.createTextNode(hitbtc.css));
                    }

                    head.appendChild(style);
                }
            },
            generateWidget = function (element, size, color, defaultPair, refId) {
                appendCss();
                if (!isUndefined(element)) {
                    var parentEl = document.getElementById(element);
                    if (!isUndefined(parentEl)) {
                        var sizeClass = '',
                            dataHue = '',
                            dataRef = '';

                        if (!isUndefined(size)) {
                            switch (size) {
                                case 'big':
                                    sizeClass = ' class="hit-big"';
                                    break;
                                case 'small':
                                    sizeClass = ' class="hit-small"';
                                    break;
                                default:
                                    break;
                            }
                        }

                        if (!isUndefined(color)) {
                            color = +color;
                            if (!isNaN(color)) {
                                dataHue = ' data-hue="' + color + '"';
                            }
                        }

                        if (!isUndefined(defaultPair)) {
                            defaultPair = defaultPair.toUpperCase();
                            if (!isUndefined(hitbtc.symbols[defaultPair])) {
                                hitbtc.currentSymbol = defaultPair;
                            }
                        }

                        if (!isUndefined(refId)) {
                            dataRef = ' data-refId="' + refId + '"';
                        }

                        parentEl.innerHTML = '<div id="hitbtc-ticker"' + sizeClass + dataHue + dataRef + '></div>';
                    }
                }

                var el = document.getElementById('hitbtc-ticker');

                if (isUndefined(el)) {
                    return;
                }

                el.onclick = function () {
                    var url = hitbtc.serverUrl + '/exchange/' + hitbtc.currentSymbol,
                        refId = this.getAttribute('data-refId');
                    if (refId) {
                        url = url + '?ref_id=' + refId;
                    }
                    window.open(url, '_blank');
                };

                var tmpEl = document.createElement('div'),
                    ul = document.createElement('ul');
                ul.tabIndex = 1;

                for (var pair in hitbtc.symbols) {
                    if (hitbtc.symbols.hasOwnProperty(pair)) {
                        var li = document.createElement('li');
                        li.innerHTML = hitbtc.symbols[pair];
                        li.setAttribute('data-id', pair);
                        ul.appendChild(li);
                    }
                }

                tmpEl.appendChild(ul);
                el.innerHTML =
                    '<div id="hitbtc-canvas"></div>' +
                    '<div id="hitbtc-selector">' +
                        '<div id="hitbtc-selector-label">' + hitbtc.symbols[hitbtc.currentSymbol] + '</div>' +
                        '' + tmpEl.innerHTML + '' +
                    '</div>' +
                    '<div id="hitbtc-main-value">' +
                        '<span></span>' +
                    '</div>' +
                    '<div class="top-block">' +
                        '<div class="small" id="hitbtc-ask-value">' +
                        'Ask: <span></span>' +
                    '</div>' +
                    '<div class="small" id="hitbtc-bid-value">' +
                        'Bid: <span></span>' +
                        '</div>' +
                    '</div>' +
                    '<div id="hitbtc-logo">Powered by <b>Pemburu Coin Gratis
info_outlineAbout import_contactsContact </b></div>';

                var img = new Image(),
                    hue = el.getAttribute("data-hue");

                if (isUndefined(hue)) {
                    hue = 0;
                }

                hue = +hue;
                img.src = hitbtc.bg;
                document.getElementById('hitbtc-canvas').appendChild(img);
                Pixastic.process(img, "hsl", {hue: hue, saturation: 0, lightness: 0});

                mainValue = document.getElementById('hitbtc-main-value').getElementsByTagName('span')[0];
                askValue = document.getElementById('hitbtc-ask-value').getElementsByTagName('span')[0];
                bidValue = document.getElementById('hitbtc-bid-value').getElementsByTagName('span')[0];

                var selector = document.getElementById('hitbtc-selector-label'),
                    selectorLi = document.getElementById('hitbtc-selector').getElementsByTagName('li'),
                    selectorUl = document.getElementById('hitbtc-selector').getElementsByTagName('ul')[0];

                selector.onclick = function (e) {
                    if (selectorUl.style.display == 'none' || selectorUl.style.display == '') {
                        selectorUl.style.display = "block";

                        var pos = selectorUl.getBoundingClientRect(),
                            selectorOffsetHeight = selector.offsetHeight;
                        
                        var shownTop = selectorUl.className == 'up';
                        var topPosition = !shownTop ? pos.top : pos.top + pos.height;
                        var showTop = topPosition  / window.innerHeight  >= 0.5;
                        
                        if (showTop) {
                            selectorUl.style.bottom = (selectorOffsetHeight) + 'px';
                            selectorUl.className = 'up';
                            selectorUl.style.maxHeight = (Math.max(250, topPosition - 40)) + 'px';
                        } else {
                            selectorUl.style.bottom ='inherit';
                            selectorUl.className = '';
                            selectorUl.style.maxHeight = (Math.max(200, window.innerHeight - pos.top - 40)) + 'px';
                        }
                        
                        selectorUl.focus();
                    } else {
                        selectorUl.blur();
                    }
                    stopEvent(e);
                    return false;
                };

                selector.onmousedown = function (e) {
                    if (selectorUl.style.display == 'block') {
                        stopEvent(e);
                        return false;
                    }
                };

                selectorUl.onblur = function (e) {
                    selectorUl.style.display = "none";
                    stopEvent(e);
                    return false;
                };

                connect();

                for (var i = 0; i < selectorLi.length; i++) {
                    selectorLi[i].onclick = function (e) {

                        if (hitbtc.currentSymbol) {
                            unsubscribe(hitbtc.currentSymbol);
                        }
                        selectorUl.blur();
                        var newSymbol = this.getAttribute('data-id');
                        selector.innerHTML = this.innerHTML;
                        hitbtc.currentSymbol = newSymbol;
                        subscribe(hitbtc.currentSymbol);
                        stopEvent(e);
                        return false;
                    };
                }

                window.setInterval(function () {
                    updateWidget()
                }, 1000);
            };

        generateWidget(element, size, color, defaultPair, refId);
    }
};

(function () {
    var el = document.getElementById('hitbtc-ticker');
    if (el !== null) {
        hitbtc.widget();
    }
})();
