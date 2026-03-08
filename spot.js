document.addEventListener("DOMContentLoaded", function(){

/* YOUR DATA */

const data = {"Burnt Timber":[{"lat":51.5714078,"lng":-114.9846127,"desc":"The main road running through this area is all gravel but maintained. Lots of oil or natural gas pumping and compressor stations in the area as well as active logging."},
{"lat":51.5750865,"lng":-114.9907744,"desc":"This is the South entrance beside the old gas plant."},
{"lat":51.5760831,"lng":-114.9913866,"desc":"This and the next 2 spots are almost like a staging area. It's a huge space. It can also get fairly muddy in this field."},
{"lat":51.5772775,"lng":-114.9925272,"desc":"This and the next 2 spots are almost like a staging area. It's a huge space. It can also get fairly muddy in this field."},
{"lat":51.6017451,"lng":-115.0123461,"desc":"Between this spot and the next 2 there is camping in nodes only."},
{"lat":51.6153081,"lng":-115.0373023,"desc":"Camping nodes along this section."},
{"lat":51.6181464,"lng":-115.0420462,"desc":"Camping nodes along this section."},
{"lat":51.6179177,"lng":-115.0507694,"desc":"Camping nodes along this section."},
{"lat":51.6310588,"lng":-115.0905469,"desc":"Camping near Red Deer river bridge."},
{"lat":51.6318723,"lng":-115.0901445,"desc":"Camping near Red Deer river bridge."},
{"lat":51.6313113,"lng":-115.0920734,"desc":"Camping near Red Deer river bridge."},
{"lat":51.6327104,"lng":-115.0916087,"desc":"Camping near Red Deer river bridge."}],
"Dutch Creek":[{"lat":49.7975444,"lng":-114.1533099,"desc":"Turnoff at Maycroft on Hwy 22."},
{"lat":49.8668425,"lng":-114.3754988,"desc":"Large staging and camping area near Hwy 40."},
{"lat":49.8620817,"lng":-114.3816541,"desc":"Camping along staging area."},
{"lat":49.8612217,"lng":-114.3836949,"desc":"Camping along staging area."},
{"lat":49.8622122,"lng":-114.3830874,"desc":"Camping along staging area."}],
"Indian Graves":[{"lat":50.298577,"lng":-114.232322,"desc":"Turnoff to Indian Graves from Hwy 22."},
{"lat":50.2658393,"lng":-114.3155226,"desc":"Access to several camping areas."},
{"lat":50.2680832,"lng":-114.2985412,"desc":"Large camping areas nearby."}],
"Porcupine Hills":[{"lat":49.9682872,"lng":-114.1230761,"desc":"Entrance to Porcupine Hills."},
{"lat":49.9741151,"lng":-114.0867881,"desc":"Intersection along Hwy 520."},
{"lat":49.9714004,"lng":-114.0870165,"desc":"First campsite on right."}],
"Waiporous":[{"lat":51.2242373,"lng":-114.6601251,"desc":"Waiporous entrance area."},
{"lat":51.2782657,"lng":-114.9344919,"desc":"Turn off Hwy 40 toward TransAlta Loop."},
{"lat":51.2699708,"lng":-114.9705961,"desc":"Large camping areas along this road."}]};

/* BUILD SPOT ARRAY */

let allSpots=[];

Object.keys(data).forEach(area=>{
data[area].forEach(s=>{
allSpots.push({...s,area});
});
});


/* MAP */

const map=L.map('map').setView([51,-114.5],7);

L.tileLayer(
'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
{maxZoom:19}
).addTo(map);


/* ADD MAP PINS */

allSpots.forEach(s=>{

const marker=L.marker([s.lat,s.lng]).addTo(map);

marker.bindPopup(`
<b>${s.area}</b><br>
${s.desc || "Camping Area"}<br><br>
<a target="_blank" href="https://maps.google.com/?q=${s.lat},${s.lng}">
Open in Google Maps
</a>
`);

});


/* LIST RENDERING */

function renderList(){

const filter=document.getElementById("areaFilter").value;
const list=document.getElementById("list");

list.innerHTML="";

allSpots.forEach(s=>{

if(filter!=="All" && s.area!==filter) return;

const d=document.createElement("div");
d.className="site";

d.innerHTML=`
<b>Area:</b> ${s.area}<br>
<b>Description:</b> ${s.desc || "Satellite view recommended"}<br>
<b>Satellite Imagery:</b><br>
<a target="_blank" href="https://maps.google.com/?q=${s.lat},${s.lng}">
Open in Google Maps
</a>
`;

list.appendChild(d);

});

}


/* USER LOCATION */

window.locateUser=function(){

if(!navigator.geolocation) return;

navigator.geolocation.getCurrentPosition(pos=>{

const lat=pos.coords.latitude;
const lng=pos.coords.longitude;

map.setView([lat,lng],10);

L.marker([lat,lng])
.addTo(map)
.bindPopup("You are here")
.openPopup();

});

};


/* INITIAL LOAD */

renderList();

});
