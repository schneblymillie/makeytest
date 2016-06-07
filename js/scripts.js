// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";

// My Scripts 

// Stuff Before Event

$('html').keypress( function(e){
  
  if (e.keyCode === 32) {
    
    // Stuff During Event
   console.log(e.keyCode);
    
    //Store Greetings
var img1 = '../img/one.jpg'; 
var img2 = 'two.jpg'; 
var img3 = 'Hey you!';


////Get/make random number
//var limit = 20;
//var numRand = Math.floor( Math.random()*limit);
//console.log( numRand ); 

//Show random Greetings
$('h1').show(eval('img' + 1));

//console.log('msg' + numRand); 
    
    
  }
  
  // Stuff After Event
  
});