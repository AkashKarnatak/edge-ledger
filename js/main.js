let mymap = L.map('map').setView([28.60974, 77.185], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWthc2hrYXJuYXRhayIsImEiOiJja2RnOWE2M28wNTU5MndvYnNmdG1lOXVsIn0.nbRgWQvgc8dDmaJIcf15mg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

let marker = L.marker([28.60974, 77.185]).addTo(mymap);

window.addEventListener('scroll', function() {
    if(window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
})

$('#navbar a, #showcase .showcase-content .btn').on('click', function (e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 98
        }, 500);
    }
});