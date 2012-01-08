var profile = 
         {
			   "name" : "Juan Perez";    
			   "birthday": [10,5,86]; 
            "xp": [Danone,Adidas,Ford,Globant];   	   		   
			 };
			 
var template = "<h1> {{name}} </h1>" + 
               "<p> Birthday: {{birthday.0}}/{{birthday.1}}/{{birthday.2}} </p>" +
               "<p> Experience: <ul>{{#xp}} <li>{{.}}</li> {{/xp}}</ul> </p>" ;
    
var html = Mustache.to_html(template,profile);

$(".result").html(html);

