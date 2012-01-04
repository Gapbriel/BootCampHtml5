    var Movie = function (){
           
            this.tit='';
            this.rating=0;
            this.id=1;
           
           
            Movie.prototype.getTitle = function(){
                                    return this.tit;
            };
            Movie.prototype.setTitle = function(titulo){
                                    this.tit = titulo;
            };
           
           
            Movie.prototype.getRating = function (){
                                    return this.rating;
            };
            Movie.prototype.setRating = function (rait){
                                    rating = rait;
            };
            Movie.prototype.getId = function (){
                                    return this.id;
            };
            Movie.prototype.setId = function (ide){
                                    this.id = ide;
            };
           
            Movie.prototype.play= function(){
                                    console.log('Playing '+this.getTitle());
                                    
            };
            Movie.prototype.stop= function(){
                                    console.log('Stopping '+this.getTitle());
                                    
            };
          
    }
	
	    function call(){
                   
            var movie = new Movie;
           
            movie.setTitle('caperusa roja');
            movie.setRating(21);
            movie.setId(4);
           
            console.log('se creo una nueva peli '+movie.getTitle()+' '+movie.getRating()+' '+movie.getId());
           
            console.log(movie.getId());
            movie.setId(21);
            console.log(movie.getId());
            movie.setTitle('Star Wars')
            console.log(movie.getTitle());
            movie.play();
            movie.stop();
			
	}