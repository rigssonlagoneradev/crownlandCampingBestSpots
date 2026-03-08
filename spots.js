document.addEventListener("DOMContentLoaded", function(){

const data={
"Burnt Timber":[
{"lat":51.5714078,"lng":-114.9846127,"desc":"Main gravel road area with several camping spots."},
{"lat":51.5750865,"lng":-114.9907744,"desc":"South entrance beside the old gas plant."},
{"lat":51.5760831,"lng":-114.9913866,"desc":"Large staging area, can get muddy."}
],
"Dutch Creek":[
{"lat":49.7975444,"lng":-114.1533099,"desc":"Turnoff at Maycroft Hwy 22."},
{"lat":49.8668425,"lng":-114.3754988,"desc":"Large staging and camping area near Hwy 40."}
],
"Indian Graves":[
{"lat":50.298577,"lng":-114.232322,"desc":"Turnoff from Hwy 22."},
{"lat":50.2658393,"lng":-114.3155226,"desc":"Several camping areas nearby."}
],
"Porcupine Hills":[
{"lat":49.9682872,"lng":-114.1230761,"desc":"Entrance to Porcupine Hills."},
{"lat":49.9741151,"lng":-114.0867881,"desc":"Intersection along Hwy 520."}
],
"Waiporous":[
{"lat":51.2242373,"lng":-114.6601251,"desc":"Waiporous entrance."},
{"lat":51.2782657,"lng":-114.9344919,"desc":"Turn toward TransAlta loop."}
]
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

m.bindPopup(
`<b>${s.area}</b><br>
${s.desc}<br><br>
<a target="_blank" href="https://maps.google.com/?q=${s.lat},${s.lng}">Open in Google Maps</a>`
);

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
<a target="_blank" href="https://maps.google.com/?q=${s.lat},${s.lng}">Open in Google Maps</a>
`;

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

renderList();

});
