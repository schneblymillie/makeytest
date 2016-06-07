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
            var img1 = '../img/one.jpg'; 
            var img2 = '../img/two.jpg';
            var img3 = '../img/three.jpg';
            var img4 = '../img/four.jpg';
            var img5 = '../img/five.jpg';
            var img6 = '../img/six.jpg';
            var img7 = '../img/seven.jpg';
            var img8 = '../img/eight.jpg';
            var img9 = '../img/nine.jpg';
            var img10 = '../img/ten.jpg';
            var img11 = '../img/eleven.jpg';
            var img12 = '../img/twelve.jpg';
            var img13 = '../img/thirteen.jpg';
            var img14 = '../img/fourteen.jpg';
            var img15 = '../img/fifteen.jpg';
            var img16 = '../img/sixteen.jpg';
            var img17 = '../img/seventeen.jpg';
            var img18 = '../img/eighteen.jpg';
            var img19 = '../img/nineteen.jpg';
            var img20 = '../img/twenty.jpg';

$('html').keypress( function(e){
  
  if (e.keyCode === 32) {
    
    // Stuff During Event
   console.log(e.keyCode);
    
//    //Store Greetings
//            var img1 = '../img/one.jpg'; 
//            var img2 = '../img/two.jpg';
//            var img3 = '../img/three.jpg';
//            var img4 = '../img/four.jpg';
//            var img5 = '../img/five.jpg';
//            var img6 = '../img/six.jpg';
//            var img7 = '../img/seven.jpg';
//            var img8 = '../img/eight.jpg';
//            var img9 = '../img/nine.jpg';
//            var img10 = '../img/ten.jpg';
//            var img11 = '../img/eleven.jpg';
//            var img12 = '../img/twelve.jpg';
//            var img13 = '../img/thirteen.jpg';
//            var img14 = '../img/fourteen.jpg';
//            var img15 = '../img/fifteen.jpg';
//            var img16 = '../img/sixteen.jpg';
//            var img17 = '../img/seventeen.jpg';
//            var img18 = '../img/eighteen.jpg';
//            var img19 = '../img/nineteen.jpg';
//            var img20 = '../img/twenty.jpg';


//Get/make random number
var limit = 20;
var numRand = Math.floor( Math.random()*limit);
console.log( numRand ); 

//Show random Greetings
$('h1').show(eval('<' + 'img' + numRand + '/>'));

//console.log('msg' + numRand); 
    
    
  }
  
  // Stuff After Event
  
});