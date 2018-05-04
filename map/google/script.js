function initMap() {
        var uluru = {lat: 31, lng: -92};
        var map = new google.maps.Map(document.getElementById('id'), {
          zoom: 4,
          center: uluru,
          mapTypeId: 'satellite'
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
