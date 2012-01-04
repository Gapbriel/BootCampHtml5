    var movie = Backbone.Model.extend({
		defaults: {
			name: "Not specified",
			principalArtist: "Not specified"
		    
		},
        initialize: function(){
            console.log("initialize movie");
        }
    });
    
    var videoLibrary = Backbone.Collection.extend({
		model: movie
	});
	
	
	
	var movie1 = new movie({ name: "Top", principalArtist: "Tom Cruise" });
	var movie2 = new movie({ name: "The wall", principalArtist: "Roger Waters" });
	var movie3 = new movie({ name: "Titanic", principalArtist: "Leonardo Di Caprio" });
	
	
	
	
	var myFavoritesMovies = new videoLibrary([ movie1, movie2, movie3]);
	console.log( myFavoritesMovies.models ); 