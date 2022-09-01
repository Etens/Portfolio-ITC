let map_paris = document.getElementById("map-paris");
let map_rome = document.getElementById("map-rome");
let map_geneva = document.getElementById("map-geneva");
let button_prev = document.getElementById("button-prev");
let button_next = document.getElementById("button-next");
let map_counter = 0;

maps = [map_paris, map_rome, map_geneva];

// change the map to the next one in the array of maps (maps[]) and hide the previous one (maps[map_counter])
button_next.addEventListener("click", function() {
    if (map_counter < maps.length - 1) {
        map_counter++;
        maps[map_counter].style.display = "block";
        maps[map_counter - 1].style.display = "none";
    }
});

button_prev.addEventListener("click", function() {
    if (map_counter > 0) {
        map_counter--;
        maps[map_counter].style.display = "block";
        maps[map_counter + 1].style.display = "none";
    }
});

// hide and display the maps
if (map_counter == 0) {
    map_paris.style.display = "block";
    map_rome.style.display = "none";
    map_geneva.style.display = "none";

} else if (map_counter == 1) {
    map_paris.style.display = "none";
    map_rome.style.display = "block";
    map_geneva.style.display = "none";
}
else if (map_counter == 2) {
    map_paris.style.display = "none";
    map_rome.style.display = "none";
    map_geneva.style.display = "block";

}

