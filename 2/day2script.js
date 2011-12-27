$('div').live('pagebeforecreate',function(event, ui){
     
      $('#buttonLoad').click(function(){
                            $.mobile.showPageLoadingMsg();                 
       }); 
       
       $('body').keyup(function(key){
                            if ($.browser.mozilla  && key.which == 13){
                                    $.mobile.hidePageLoadingMsg();
                            }
                            /*For IE , Safari and Chrome this is the ESC key */
                            if ( key.which == 27){
                                    $.mobile.hidePageLoadingMsg();
                            }
       });


      
     buttonAjax();
     buttonMovies();
});


  function buttonAjax()
 {
    $("#bAjax").click(function(){
     $.post('api/dispatcher.php',
     {service: 'welcome.hello',
      params: {"name": $('#alias').val()}})
      .success(function(dataFromServer) {
       $('#response').html(dataFromServer);
       $('#response').css("background-color","lightgreen");})
      .error(function() {
       $('#response').html('error in the service');
       $('#response').css('background-color','red');});
      });
 
 }
 
 function buttonMovies()
 {
        $("#bMovie").click(function(){
                       $.ajax({
                                                    url: 'http://albertomiranda.com.ar/html5/bootcamp/api/dispatcher.php?service=movie.getTop',
                                                    type: 'POST',
                                                    //jsonp..llamadas entre dominios, asi poder usar APIs de terceros!
                                                    dataType : 'jsonp',
                                                    crossDomain: true,
                                                    success: function(datos){
                                                            var metadatos = datos.data;
                                                            $.each(metadatos,function(indice,value){
                                                                    $("#movieResponse").append("<div >");
                                                                    $("#movieResponse").append("Peli: "+metadatos[indice].Name);
                                                                    $("#movieResponse").append("</div>");
                                                            });
                                                            $( '#movieResponse' ).css( "padding-left","50%" );
                                                            $( '#movieResponse' ).css( "border","1px solid" );
                                                    },                                                     
                                                    error: function(data){
                                                                    alert('error response');
                                                    }
                                    });
       });
        
 
 }