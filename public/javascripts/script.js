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

  if (window.placesAux) {
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
}

if (window.placeAux) {
  const placeOne = window.placeAux;
  //window.placeAux.forEach(place => {
    new google.maps.Marker({
      position: {
        lat: placeOne.location.coordinates[0],
        lng: placeOne.location.coordinates[1]
      },
      map: map,
      title: `${placeOne.name} - ${placeOne.zone}`
    });
  }
  //})
}, false);


