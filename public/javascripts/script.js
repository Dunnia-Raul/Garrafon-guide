document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  const madrid = {
    lat: 40.4167,
    lng: -3.70325
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 20,
      center: madrid
    }
  );

  // const myMarker = new google.maps.Marker({
  //   position: {
  //     lat: 41.3977381,
  //     lng: 2.190471916
  //   },
  //   map: map,
  //   title: "I'm here"
  // });

  // Template.find.onRendered(function() { this.autorun(function () { if (GoogleMaps.loaded()) { $("#geolocater").geocomplete({ details: "form", detailsAttribute: "data-geo", map:".map", mapOptions: { mapTypeControlOptions: { mapTypeIds:"ROADMAP" }, streetViewControl: false, }, markerOptions: { draggable: false } }).bind("geocode:result", function(event, result){ var map = $("#geolocater").geocomplete("map"); map.setZoom(15); }); } }); });



  $(function () {

    var options = {
      map: "#map",
      location: "Madrid"
    };

    $("#geocomplete").geocomplete(options);

  });



  $.log = function (message) {
    var $logger = $("#logger");
    $logger.html($logger.html() + "\n * " + message);
  }

    $(function(){
      $("#geocomplete").geocomplete({
        map: "#map",
        details: "form ",
        markerOptions: {
          draggable: true
        }
      });
      
      $("#geocomplete").bind("geocode:dragged", function(event, latLng){
        $("input[name=lat]").val(latLng.lat());
        $("input[name=lng]").val(latLng.lng());
        $("#reset").show();
      });
      
      
      $("#reset").click(function(){
        $("#geocomplete").geocomplete("resetMarker");
        $("#reset").hide();
        return false;
      });
    

    $("#find").click(function () {
      $("#geocomplete").trigger("geocode");
    });



  });

  // $('#map').click(function() {
  //   const lat = Number($("input[name=lat]").val());
  //   const lng = Number($("input[name=lng]").val());

  //   const center = {
  //       lat,
  //       lng
  //   }

  //   console.log(center)

  //   const marker = new google.maps.Marker({
  //       position: center,
  //       map: map,
  //       title: "title"
  //   })
  //   marker.setMap(map)
  // });



  window.placesAux.forEach(place => {
    new google.maps.Marker({
      position: {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1]
      },
      map: map,
      title: `${place.name} - ${place.zone}`
    });
  })


  // map.addListener("click", function (event) {
  //   var latitude = event.latLng.lat();
  //   var longitude = event.latLng.lng();
  //   console.log(latitude)
  //   document.getElementById("lat").value = latitude
  //   document.getElementById("lng").value = longitude
  // });

  // const geolocate = () => {
  //   return new Promise((resolve, reject) => {
  //     // Try to get a geolocation object from the web browser
  //     if (navigator.geolocation) {

  //       // Get current position
  //       // The permissions dialog will popup
  //       navigator.geolocation.getCurrentPosition(function (position) {
  //         // Create an object to match
  //         // google's Lat-Lng object format
  //         console.log(position)
  //         const myPosition = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude
  //         };
  //         console.log('myPosition: ', myPosition)
  //         resolve(myPosition);
  //       }, () => reject('Error in the geolocation service.')); // If something else goes wrong
  //     } else {
  //       reject('Browser does not support geolocation.'); // Browser says: Nah! I do not support this.

  //     }
  //   })
  // }
}, false);


