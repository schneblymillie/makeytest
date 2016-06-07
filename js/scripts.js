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
var img1 = '../img/two.jpg';
var img1 = '../img/three.jpg';
      var img1 = '../img/four.jpg';
      var img1 = '../img/five.jpg';
      var img1 = '../img/six.jpg';
      var img1 = '../img/seven.jpg';
      var img1 = '../img/eight.jpg';
      var img1 = '../img/nine.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      var img1 = '../img/one.jpg';
      

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