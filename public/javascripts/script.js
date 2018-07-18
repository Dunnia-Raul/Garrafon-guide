document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  const madrid = {
    lat: 40.4167,
    lng: -3.70325
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
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


  $(function(){
        
    var options = {
      map: "#map",
      location: "Madrid"
    };
    
    $("#geocomplete").geocomplete(options);
    
  });

  

  $.log = function(message){
    var $logger = $("#logger");
    $logger.html($logger.html() + "\n * " + message );
  }


  $(function(){
    $("#geocomplete").geocomplete({
      map: "#map",
      details: "form ",
      markerOptions: {
        draggable: true
      }
    });

    $("#geocomplete").bind("geocode:click", function(event, latLng){
      $("input[name=lat]").val(latLng.lat());
      $("input[name=lng]").val(latLng.lng());
      $("#reset").show();
    });

    $("#find").click(function () {
      $("#geocomplete").trigger("geocode");
    });

    

  });



  // window.placesAux.forEach(place => {
  //   new google.maps.Marker({
  //     position: {
  //       lat: place.location.coordinates[0],
  //       lng: place.location.coordinates[1]
  //     },
  //     map: map,
  //     title: `${place.name} - ${place.zone}`
  //   });
  // })


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


