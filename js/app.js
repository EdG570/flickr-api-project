$(document).ready(function(){
    $('form').submit(function(event){
      event.preventDefault();

      //$('#results').addClass('pad');
      
      var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      var animal = $('#search').val();
      var flickrOptions = { 
        tags: animal,
        format: 'json'
      };
      
      function displayPhotos(data) {
        var photoHTML = '<ul>';
        $.each(data.items, function(i, photo){
            photoHTML += '<li class="list">';
            photoHTML += '<a href="' + photo.link + '" class="image">';
            photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        });
        
        photoHTML += '</ul>';
        $('#results').html(photoHTML);
      }
      $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    });
}); //end ready