log=console.log.bind(window.console);
gebi=function(id){return document.getElementById(id);}

var svg={
coba:function(){alert('svg')},
json:{id:'svg',data:[
{canvas:'0 0 100 150', item:[
{nama:'person',posisi:'0 20'},
{nama:'person',posisi:'0 50'},
{nama:'ellipse',posisi:'50 0'},
{nama:'ellipse',posisi:'50 55'},
{nama:'ellipse',posisi:'50 100'},
{nama:'line',posisi:'M24 36 48 12'},
{nama:'line',posisi:'M24 36 48 114'},
{nama:'line',posisi:'M24 66 48 66'},
{nama:'line',posisi:'M24 66 48 114'},
{nama:'text',posisi:'75 14',text:'purchas'},
{nama:'text',posisi:'75 70',text:'sale'},
{nama:'text',posisi:'75 114',text:'login'},
]},
{canvas:'0 0 100 200', item:[
{nama:'terminal',posisi:'20 0'},
{nama:'process',posisi:'20 30'},
{nama:'decision',posisi:'20 60'},
{nama:'process',posisi:'20 90'},
{nama:'process',posisi:'20 120'},
{nama:'terminal',posisi:'20 150'},
{nama:'line',posisi:'M32 20 32 30'},
{nama:'line',posisi:'M32 50 32 54'},
{nama:'line',posisi:'M32 85 32 90'},
{nama:'line',posisi:'M32 110 32 120'},
{nama:'line',posisi:'M32 140 32 145 0 145 0 72 10 72'},
{nama:'line',posisi:'M52 72 56 72 56 148 32 148 32 150 '},
{nama:'text',posisi:'25 14',text:'start'},
{nama:'text',posisi:'25 164',text:'end'},
]},

]},

path:{
gradien:`<defs>
<linearGradient id="gradient" x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" >
<stop stop-color="#5757D9" offset="0%"/>
<stop stop-color="#21D9F7" offset="100%"/>
</linearGradient>
</defs>`,
ktupad:`M16 3 19 6 15 10 12 7ZM8 10 11 7 15 11 12 14ZM16 10 19 7 23 11 20 14ZM8 3 11 6 7 10 4 7ZM0 10 3 7 7 11 4 14ZM8 18 11 15 15 19 12 22ZM8 11 11 14 7 18 4 15ZM16 11 19 14 15 18 12 15Z`,
filter:`M11 12 14 12 14 22 11 22ZM4 2 7 2 7 11 4 11 4 2M11 2 14 2 14 7 16 7 16 10 9 10 9 7 11 7 11 2M18 2 21 2 21 13 18 13 18 2M2 13 9 13 9 16 7 16 7 22 4 22 4 16 2 16 2 13M16 15 23 15 23 18 21 18 21 22 18 22 18 18 16 18Z`,
// filter:`M4 21 4 14M4 10 4 3M12 21 12 12M12 8 12 3M20 21 20 16M20 12 20 3M1 14 7 14M9 8 15 8M17 16 23 16`,
person:`M2 22V19A4 4 0 015 15H19A4 4 0 0122 19V22ZM7 7A4 4 0 0017 7 4 4 0 007 7`,
house:`M20 10v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10M9 22V12h6v10M2 10 12 2l10 8`,
threedots:`M10 5A1 1 0 0014 5 1 1 0 0010 5M10 12A1 1 0 0014 12 1 1 0 0010 12M10 19A1 1 0 0014 19 1 1 0 0010 19`,
menu:`M2 5 22 5 22 8 2 8ZM2 11 22 11 22 14 2 14ZM2 17 22 17 22 20 2 20Z`,
trush:`M19 6V20A2 2 0 0117 22H7A2 2 0 015 20V6M8 6V4A2 2 0 0110 2H14A2 2 0 0116 4V6M3 6 5 6 21 6M10 11 10 17M14 11 14 17`,
check:`M2 15 12 22 22 2 19 2 11 18 2 12Z`,
x:`M2 2 6 2 12 10 18 2 22 2 14 12 22 22 18 22 12 14 6 22 2 22 10 12Z`,
plus:`M2 12a10 10 0 1020 0 10 10 0 10-20 0M11 7 13 7 13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11Z`,
printer:`M6 9V2H18V9M6 18H4A2 2 0 012 16V11A2 2 0 014 9H20A2 2 0 0122 11V16A2 2 0 0120 18H18M6 14H18V22H6Z`,
pen:`M16 3 21 8 8 21 3 21 3 16 16 3`,
chart:`M2 2V22H22L22 19 5 19 5 2ZM22 5 19 11 14 3 6 18 9 18 14 8 19 16 22 11Z`,
cart:`M4 5 2 5 2 2 5 2 8 7 22 6 19 18 11 18ZM9 21A1 1 0 0013 21 1 1 0 009 21M16 21A1 1 0 0020 21 1 1 0 0016 21ZM17 15 19 9 10 10 13 15Z`,
card:`M5 16H7M2 9H22M2 5H22V19H2Z`,
envelope:`M2 8C2 7 3 6 4 6L20 6C21 6 22 7 22 8L22 20C22 21 21 22 20 22L4 22C3 22 2 21 2 20ZM22 8 12 15 2 8`,
geo:`M4 10A1 1 0 0120 10C20 17 12 22 12 22 12 22 4 17 4 10M9 10A1 1 0 0015 10 1 1 0 009 10`,
twitter:`M23 3A11 11 0 0120 4 4 4 0 0012 7V8A10 10 0 013 4S1 14 8 17A12 12 0 011 19C10 24 21 19 21 8A4.5 4.5 0 0021 7 8 8 0 0023 3Z`,
facebook:`M17 2H14A5 5 0 009 7V10H6V14H9V22H13V14H16L17 10H13V7A1 1 0 0114 6H17Z`,
whatsapp:`M20 11A8 8 0 018 18L3 21 5 15A8 8 0 014 11 1 1 0 0120 11Z`,
instagram:`M5 2 19 2C21 2 22 3 22 5L22 19C22 21 21 22 19 22L5 22C3 22 2 21 2 19L2 5C2 3 3 2 5 2ZM7 12C7 19 17 19 17 12 17 5 7 5 7 12M20 6C20 4 17 4 17 6 17 8 20 8 20 6`,

eye:`M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12ZM9 12A3 3 0 1 0 15 12A3 3 0 1 0 9 12`,
// qrcode:`M2 2 11 2 11 11 2 11ZM14 2 23 2 23 9 14 9ZM2 14 11 14 11 20 2 20ZM15 14 23 14 23 21 15 21Z`,
qrcode:`M2 2 8 2 8 8 2 8ZM16 2 22 2 22 8 16 8ZM2 16 8 16 8 22 2 22ZM12 12 22 12 22 22 12 22z`,
search:`M20 11A1 1 0 002 11 1 1 0 0020 11M5 11A1 1 0 0117 11 1 1 0 015 11ZM17 19 19 17 24 22 22 24Z`,
minus:`M2 12a10 10 0 1020 0 10 10 0 10-20 0M7 11 17 11 17 13 7 13Z`,
bayam:`M1 18 1 6A1 1 0 0111 6L11 13 18 13A1 1 0 0118 23L6 23 6 6A1 1 0 0116 6L16 8 18 8A1 1 0 0118 18Z`,
scan:`M2 10 2 5C2 3 3 2 5 2L10 2 10 5 6 5C5 5 5 5 5 6L5 10ZM15 2 19 2C21 2 22 3 22 5L22 10 19 10 19 6C19 5 19 5 18 5L15 5ZM22 19C22 21 21 22 19 22L15 22 15 19 18 19C19 19 19 19 19 18L19 15 22 15ZM10 22 5 22C3 22 2 21 2 19L2 15 5 15 5 18C5 19 5 19 6 19L10 19Z`,
upload:`M5 8 12 2 19 8 19 12 12 6 5 12ZM5 14 2 14 2 19C2 21 3 22 5 22L19 22C21 22 22 21 22 19L22 14 19 14 19 18C19 19 19 19 18 19L6 19C5 19 5 19 5 18Z`,
download:`M5 2 12 8 19 2 19 6 12 12 5 6ZM5 14 2 14 2 19C2 21 3 22 5 22L19 22C21 22 22 21 22 19L22 14 19 14 19 18C19 19 19 19 18 19L6 19C5 19 5 19 5 18Z`,
camera:`M22 20A2 2 0 0120 22H4A2 2 0 012 20V7A2 2 0 014 5H7L9 2H15L17 5H20A2 2 0 0122 7V20M7 14A1 1 0 0017 14 1 1 0 007 14`,
bel:`M22 17H2A3 3 0 005 14V9A7 7 0 0119 9V14A3 3 0 0022 17ZM9 19 15 19A2 2 0 019 19`,
lock:`M20 12 17 12 17 7A1 1 0 007 7L7 12 4 12C3 12 2 13 2 14L2 20C2 21 3 22 4 22L20 22C21 22 22 21 22 20L22 14C22 13 21 12 20 12ZM10 12 10 7A1 1 0 0114 7L14 12Z`,
setting:`M9 12A3 3 0 1015 12 3 3 0 109 12M21 14A1.65 1.65 0 0020 17 2 2 0 0117 20 1.65 1.65 0 0014 21 2 2 0 0110 21 1.65 1.65 0 007 20 2 2 0 014 17 1.65 1.65 0 003 14 2 2 0 013 10 1.65 1.65 0 004 7 2 2 0 017 4 1.65 1.65 0 0010 3 2 2 0 0114 3 1.65 1.65 0 0017 4 2 2 0 0120 7 1.65 1.65 0 0021 10 2 2 0 0121 14Z`,
terminal:`M5 7Q1 7 1 11L1 13Q1 17 5 17L19 17Q23 17 23 13L23 11Q23 7 19 7Z`,
process:`M1 7 1 17 23 17 23 7Z`,
decision:`M12 23 1 12 12 1 23 12Z`,
io:`M5 7 1 17 19 17 23 7Z`,
connector:`M18 12A1 1 0 006 12 1 1 0 0018 12Z`,
ellipse:`M1 12C1 22 23 22 23 12 23 2 1 2 1 12`,
calendar:`M2 5Q2 3 4 3A1 1 0 016 3L18 3A1 1 0 0120 3Q22 3 22 5L22 19Q22 22 19 22L5 22Q2 22 2 19ZM4 8 20 8 20 19A1 1 0 0119 20L5 20A1 1 0 014 19Z`,
donat:`M12 10C7 5 4 14 12 17 20 14 17 5 12 10M12 22A8 8 0 0112 2 8 8 0 0112 22Z`,
file:`M4 2 13 2 20 9 20 22 4 22ZM20 9 13 9 13 2Z`,
save:`M2 2 22 2 22 22 6 22 2 18ZM5 2 19 2 19 10 5 10ZM9 16 19 16 19 22 9 22Z`,
kinjeng:`M9 4C9 2 12 2 12 4 12 2 15 2 15 4 15 8 12 5 12 4 12 5 9 8 9 4M12 8C14 9 23 12 23 7 23 5 17 8 12 8 20 7 23 6 23 1 22-2 19 3 12 8M12 6C11 6 10 6 11 10 11 13 11 22 12 22 13 22 13 13 13 10 14 6 13 6 12 6M12 8C5 3 2-2 1 1 1 6 5 7 12 8 7 8 1 5 1 7 1 12 10 9 12 8`,
ixora:`M2 2C5 2 12 9 12 11 12 9 19 2 22 2 22 5 15 12 13 12 15 12 22 19 22 22 19 22 12 15 12 13 12 15 5 22 2 22 2 19 9 12 11 12 9 12 2 5 2 2`,
ws:`M2 7 4 6 4 16 12 20 18 17 10 13 10 10 12 11 12 12 22 17 12 22 2 17 2 7M6 5 8 4 8 14 14 17 12 18 6 15 6 5M10 3 12 2 22 7 22 10 20 9 20 8 12 4 12 7 22 12 22 15 20 14 20 13 10 8 10 3`,

android:`M6 2 19 2 19 22 6 22ZM18 3 7 3 7 19 18 19ZM11 21 14 21C15 21 15 20 14 20L11 20C10 20 10 21 11 21M10 8C10 5 15 5 15 8ZM10 9 15 9 15 14 14 14 14 16C14 17 13 17 13 16L13 14 12 14 12 16C12 17 11 17 11 16L11 14 10 14ZM16 10C16 9 17 9 17 10L17 13C17 14 16 14 16 13ZM8 10C8 9 9 9 9 10L9 13C9 14 8 14 8 13Z`,
kode:`M2 2 22 2 22 16 2 16ZM3 3 3 15 21 15 21 3ZM9 17 15 17C15 18 17 18 17 18L7 18C7 18 9 18 9 17ZM7 8 4 11 7 14 7 13 5 11 7 9ZM8 14 10 8 11 8 9 14ZM12 8 15 11 12 14 12 13 14 11 12 9ZM5 5C4 5 4 4 5 4L19 4C20 4 20 5 19 5ZM5 7C4 7 4 6 5 6L16 6C17 6 17 7 16 7L5 7`,
design:`M2 2 22 2 22 16 2 16ZM3 3 3 15 21 15 21 3ZM9 17 15 17C15 18 17 18 17 18L7 18C7 18 9 18 9 17M5 5C4 5 4 4 5 4L11 4C12 4 12 5 11 5ZM5 7C4 7 4 6 5 6L12 6C13 6 13 7 12 7ZM5 9C4 9 4 8 5 8L12 8C13 8 13 9 12 9ZM17 4A1 1 0 0017 8 1 1 0 0017 4M4 14 8 10 10 12 11 11 14 14Z`,

},

html:function(){
var {data}=svg.json;
out=``;
for (i in data) {
var {mode,item,canvas}=data[i];
out+=`${b[x].svg.js.diagram(canvas,item)}`;
}
return out;
}, // end view icons

js:{
view:function(id='bayam'){
var {path}=svg;
log(path)
out='';
for(i in path){ log(i)
out+=this.icon(this.path(i));
}

log(out)

return out;
},
icon:function(id='bayam'){
  var {path}=svg;
  // ${path.gradien}
return `<svg class="svgicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
 ${this.path(id)}</svg>`;
},

diagram:function(canvas='0 0 200 200',item){
out=`<svg class="svgdiagram" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="${canvas}">`;
for (e in item) { node=item[e]; p=node.posisi; p=p.split(' ');

if(node.nama=='text'){ out+=`<text x=${p[0]} y=${p[1]} >${node.text}</text>`;}

else if(node.nama=='line'){
out+=`<marker id='panah' refX='0' refY='2' markerWidth='4' markerHeight='4'orient='auto'><path d='M0 0 4 2 0 4Z' /></marker>
<path d="${node.posisi}" marker-end='url(#panah)' />`; }

else { out+=`<svg x=${p[0]} y=${p[1]} >${b[x].svg.js.path(node.nama)}</svg>`;}

} // end for
out+=`</svg>`;
return out;
},

path:function(id='bayam'){
var {path}=svg;
return `<path id="path${id}" d="${path[id]}"  />`;
},

line:function(id='M0 0 L24 24'){
return `<path d="${id}" />`;
},


list:function(){
var {path}=svg;
for(key in path ){
list = document.getElementsByClassName("bi-"+key);
// alert(list)
if(list.length > 0){
for (var i=0 ; i<list.length; i++){ list[i].innerHTML = svg.js.icon(key);}
}
}


}, // end list


icons:function(){
var {data}=svg.json;
function icon(id='house'){
return `<svg id="svg${id}" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"
stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
fill="none" stroke="#fff"
>
<path id="path${id}" d="${data[id]}" />
</svg>`;
};

for(key in data ){
list = document.getElementsByClassName("bi-"+key);
if(list.length > 0){
for (var i=0 ; i<list.length; i++){ list[i].innerHTML = icon(key);
}}}
}, // end load icons




gallery:function(id){
var {path}=svg;

out=``;
  for(i in path){ var nod=path[i];
out+=`<div class="col-1-4">`;
out+=`<div onclick="img.controller.modal()" class="wow">`;
// out+=this.simg(nod);
out+=this.icon(this.path(i));

out+=`</div>
<span> ${i} </span>
</div>`;
}

gebi(id).innerHTML=out;

},




},// end js
}; // end svg

svg.js.list();
