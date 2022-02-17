if(document.location.hash == "") document.location.hash = "about";

var map = L.map('map').setView({lon: 17.05538, lat: 51.12580}, 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);
L.control.scale({imperial: false, metric: true}).addTo(map);
L.marker({lon: 17.05538, lat: 51.12580}).bindPopup('Shape of Web').addTo(map);

document.querySelector("nav").addEventListener("click", ()=>document.querySelectorAll("li>a").forEach(e=>setTimeout(()=>e.classList[e.href == document.location ? "add" : "remove"]("current-page"),20)))

document.querySelector("nav").click()