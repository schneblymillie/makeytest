 // Stuff Before Event

$('html').keypress( function(e){
  
  if (e.keyCode === 32) {
    
    // Stuff During Event
   console.log(e.keyCode);
    
    //Store Greetings
var img1 = 'https://s-media-cache-ak0.pinimg.com/736x/ab/63/5c/ab635cc003d86146f0437eae401e5a31.jpg'; 
var img2 = 'Whats up yo'; 
var img3 = 'Hey you!';


//Get/make random number
var limit = 3;
var numRand = Math.floor( Math.random()*limit);
console.log( numRand ); 

//Show random Greetings
$('h1').text(eval('img' + numRand));

//console.log('msg' + numRand); 
    
    
  }
  
  // Stuff After Event
  
});