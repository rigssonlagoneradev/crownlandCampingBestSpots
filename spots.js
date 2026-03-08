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
{"lat":51.6327104,"lng":-115.0916087,"desc":"The next 4 are right on the Red Deer river at a bridge. There is a fair bit of space but fills up by Wed or Thurs each week."},
{"lat":51.632912,"lng":-115.1028414,"desc":"The next 3 span almost a kilometer with multiple spots. The river runs in behind this area with some spots you can camp right beside it. This are gets busy with a fair number of atv's as well."},
{"lat":51.6334211,"lng":-115.1052139,"desc":"The next 3 span almost a kilometer with multiple spots. The river runs in behind this area with some spots you can camp right beside it. This are gets busy with a fair number of atv's as well."},
{"lat":51.6341532,"lng":-115.1080741,"desc":"The next 3 span almost a kilometer with multiple spots. The river runs in behind this area with some spots you can camp right beside it. This are gets busy with a fair number of atv's as well."},
{"lat":51.6345442,"lng":-115.1318495,"desc":"The next 3 span almost a kilometer with multiple spots. The river runs in behind this area with some spots you can camp right beside it. This are gets busy with a fair number of atv's as well."},
{"lat":51.6147358,"lng":-115.1485466,"desc":"The next 4 spots are all on the river again at a bridge. This first spot is where you turn in to reach the big open area on the river where the next 3 spots are. If you are pulling a big trailer 26ft or bigger might be tough to get to the back spots."},
{"lat":51.6152542,"lng":-115.1496507,"desc":"Entrance to the next 3"},
{"lat":51.6153262,"lng":-115.1501774,"desc":"Entrance to the next 3"},
{"lat":51.6152852,"lng":-115.151084,"desc":"Entrance to the next 3"},
{"lat":51.6151393,"lng":-115.1479911,"desc":"This spot is great for 1 trailer and a tent. It's just across the bridge on the left."},
{"lat":51.6160597,"lng":-115.1457873,"desc":"This spot is great for 1 trailer and a tent. It's just across the bridge on the left."},
{"lat":51.615857,"lng":-115.144045,"desc":"This next spot is where I run some of my group camps. This area of Burnt Timber is fairly quiet not alot of traffic as it dead ends about 1km past. This are you can fit 10+ trailers and tents. Lots of dead fall left from logging just past this spot."},
{"lat":51.6125231,"lng":-115.1377769,"desc":"This next and final spot is up a step hill if you take a drive up to the end of the road it's a pumping station and a big turn around area but amazing views up there."}
],

/* DATA CONTINUES EXACTLY THE SAME — NOT CHANGED */

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

/* Add map pins */
allSpots.forEach(s=>{

const m=L.marker([s.lat,s.lng]).addTo(map);

const id = `${s.lat},${s.lng}`;

function buildPopup(){
const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
const saved = favs.includes(id);

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
}

m.bindPopup(buildPopup());

});

/* Render campsite list */
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
behavior: "smooth"
});

};

list.appendChild(div);

});

};

window.locateUser=function(){

if(!navigator.geolocation) return;

navigator.geolocation.getCurrentPosition(pos=>{

const lat=pos.coords.latitude;
const lng=pos.coords.longitude;

map.setView([lat,lng],10);

L.marker([lat,lng]).addTo(map).bindPopup("You are here").openPopup();

});

};

function getFavorites(){
return JSON.parse(localStorage.getItem("favorites") || "[]");
}

function toggleFavorite(id){

let favs = getFavorites();

if(favs.includes(id)){
favs = favs.filter(f=>f!==id);
}else{
favs.push(id);
}

localStorage.setItem("favorites",JSON.stringify(favs));

renderList();
map.closePopup();

}

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
