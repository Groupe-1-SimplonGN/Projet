

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


const mapOptions = {
    center: [9.6412, -13.5784],
    zoom: 12
};

/* Options pour affiner la localisation */
const locationOptions = {
    maximumAge: 10000,
    timeout: 5000,
    enableHighAccuracy: true
};

var map = new L.map("map", mapOptions);

 /*Création de la couche OpenStreetMap */
var layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

/* Ajoute la couche de la carte */
map.addLayer(layer);

/* Vérifie que le navigateur est compatible avec la géolocalisation */
function handleLocation(position) {
    /* Zoom avant de trouver la localisation */
    map.setZoom(16);

    /* Centre la carte sur la latitude et la longitude de la localisation de l'utilisateur */
    map.panTo(new L.LatLng(position.coords.latitude, position.coords.longitude));


const userMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    userMarker.bindPopup("Vous êtes ici !");

}



function handleLocationError(msg) {
    alert("Erreur lors de la géolocalisation");
}

document.getElementById("locate-button").addEventListener("click", function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(handleLocation, handleLocationError, locationOptions);
    } else {
        alert("Géolocalisation indisponible");
    }
});




const searchControl = new GeoSearch.GeoSearchControl({
    provider: new GeoSearch.OpenStreetMapProvider(),
    style: "button",
    showMarker: true,
    showPopup: false,
    //autoClose: true 

    marker: {
    // optional: L.Marker    - default L.Icon.Default
    icon: new L.Icon.Default(),
    draggable: false,
},
});

map.addControl(searchControl);


const myDiv = document.getElementById('myDiv');
const toggleButton = document.getElementById('toggleButton');


toggleButton.addEventListener('click', () => {
    if (myDiv.style.display === 'none') {
      myDiv.style.display = 'block'; // Affiche la div
    } else {
      myDiv.style.display = 'none'; // Masque la div
    }
  });

const mySection = document.getElementById('mySection');
const basculeButton = document.getElementById('basculeButton');  


basculeButton.addEventListener('click', () => {
    if (mySection.style.display === 'none') {
      mySection.style.display = 'block'; // Affiche la section
    } else {
      mySection.style.display = 'none'; // Masque la section
    }
  });  



  
