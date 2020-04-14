// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 14.549695, lng: 121.045500 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('.main-nav').style.opacity = 0.9;
  } else {
    document.querySelector('.main-nav').style.opacity = 1;
  }
});


// Smooth Scrolling
$('.main-nav a, .banner a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});