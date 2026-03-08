document.addEventListener("DOMContentLoaded", function(){

const data={
"Burnt Timber":[
{"lat":51.5714078,"lng":-114.9846127,"desc":"The main road running through this area is all gravel but maintained. Lots of oil or natural gas pumping and compressor stations in the area as well as active logging."},
{"lat":51.5750865,"lng":-114.9907744,"desc":"This is the South entrance beside the old gas plant."},
{"lat":51.5760831,"lng":-114.9913866,"desc":"This and the next 2 spots are almost like a staging area. It's a huge space. It can also get fairly muddy in this field."},
{"lat":51.5772775,"lng":-114.9925272,"desc":"This and the next 2 spots are almost like a staging area. It's a huge space. It can also get fairly muddy in this field."},
{"lat":51.6017451,"lng":-115.0123461,"desc":"Between this spot and the next 2 there is camping in nodes only. Most of which is on the right hand side(east) of the road"},
{"lat":51.6153081,"lng":-115.0373023,"desc":"Between this spot and the next 2 there is camping in nodes only. Most of which is on the right hand side(east) of the road"},
{"lat":51.6181464,"lng":-115.0420462,"desc":"Between this spot and the next 2 there is camping in nodes only. Most of which is on the right hand side(east) of the road"},
{"lat":51.6179177,"lng":-115.0507694,"desc":"Between this spot and the next 2 there is camping in nodes only. Most of which is on the right hand side(east) of the road"},
{"lat":51.6310588,"lng":-115.0905469,"desc":"The next 4 are right on the Red Deer river at a bridge. There is a fair bit of space but fills up by Wed or Thurs each week."},
{"lat":51.6318723,"lng":-115.0901445,"desc":"The next 4 are right on the Red Deer river at a bridge. There is a fair bit of space but fills up by Wed or Thurs each week."},
{"lat":51.6313113,"lng":-115.0920734,"desc":"The next 4 are right on the Red Deer river at a bridge. There is a fair bit of space but fills up by Wed or Thurs each week."},
{"lat":51.6327104,"lng":-115.0916087,"desc":"The next 4 are right on the Red Deer river at a bridge. There is a fair bit of space but fills up by Wed or Thurs each week."}
],

/* rest of your data unchanged */

};

let allSpots=[];

Object.keys(data).forEach(area=>{
data[area].forEach(s=>{
allSpots.push({...s,area});
});
});

const map=L.map("map").setView([51,-114.5],7);

L.tileLayer(
"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
{maxZoom:19}
).addTo(map);


/* FAVORITES */

function getFavorites(){
return JSON.parse(localStorage.getItem("favorites") || "[]");
}


/* ADD MAP MARKERS */

allSpots.forEach(s=>{

const m=L.marker([s.lat,s.lng]).addTo(map);

const id = `${s.lat},${s.lng}`;

m.buildPopup=function(){

const favs=getFavorites();
const saved=favs.includes(id);

return `
<b>${s.area}</b><br>
${s.desc}<br><br>

<a target="_blank" href="https://maps.google.com/?q=${s.lat},${s.lng}">
Open in Google Maps
</a>

&nbsp;&nbsp;

<button onclick="event.stopPropagation(); toggleFavorite('${id}')">
${saved ? "⭐ Saved" : "⭐ Save Favorite"}
</button>
`;

};

m.bindPopup(m.buildPopup());

});


/* FAVORITE TOGGLE */

function toggleFavorite(id){

let favs=getFavorites();

if(favs.includes(id)){
favs=favs.filter(f=>f!==id);
}else{
favs.push(id);
}

localStorage.setItem("favorites",JSON.stringify(favs));

renderList();

/* refresh popup */

map.eachLayer(function(layer){

if(layer instanceof L.Marker && layer.buildPopup){

layer.setPopupContent(layer.buildPopup());

}

});

}


/* RENDER LIST */

window.renderList=function(){

const filter=document.getElementById("areaFilter").value;
const list=document.getElementById("list");

list.innerHTML="";

allSpots.forEach(s=>{

if(filter!=="All" && s.area!==filter) return;

const div=document.createElement("div");
div.className="site";

div.innerHTML=`
<b>Area:</b> ${s.area}<br>
<b>Description:</b> ${s.desc}<br>

<b>Satellite Imagery:</b><br>

<a target="_blank" href="https://maps.google.com/?q=${s.lat},${s.lng}">
Open in Google Maps
</a>
`;

div.style.cursor="pointer";

div.onclick=function(){

map.setView([s.lat,s.lng],14);

L.popup()
.setLatLng([s.lat,s.lng])
.setContent(`<b>${s.area}</b><br>${s.desc}`)
.openOn(map);

window.scrollTo({
top: document.getElementById("map").offsetTop,
behavior:"smooth"
});

};

list.appendChild(div);

});

};


/* USER LOCATION */

window.locateUser=function(){

if(!navigator.geolocation) return;

navigator.geolocation.getCurrentPosition(pos=>{

const lat=pos.coords.latitude;
const lng=pos.coords.longitude;

map.setView([lat,lng],10);

L.marker([lat,lng]).addTo(map).bindPopup("You are here").openPopup();

});

};


/* FAVORITES LIST */

window.showFavorites=function(){

const list=document.getElementById("list");
list.innerHTML="";

const favs=getFavorites();

allSpots.forEach(s=>{

const id=`${s.lat},${s.lng}`;

if(!favs.includes(id)) return;

const div=document.createElement("div");
div.className="site";

div.innerHTML=`
<b>Area:</b> ${s.area}<br>
<b>Description:</b> ${s.desc}<br>

<a target="_blank" href="https://maps.google.com/?q=${s.lat},${s.lng}">
Open in Google Maps
</a>
`;

list.appendChild(div);

});

};

renderList();

});
