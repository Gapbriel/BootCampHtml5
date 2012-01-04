define( ["director"],function (director){
       
    var Movie = function () {
            this.tit='';
            this.rating=0;
            this.id=1;
            this.director = "";
           
           
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
           
		    Movie.prototype.addDirector = function () {
			   director.add(this);
			}  
		   
           } 
               
        }   
	    
	)

