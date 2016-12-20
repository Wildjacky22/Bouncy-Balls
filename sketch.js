 var N = 100;

var B1;
var B2;
var c1;
var c2;
var c3;
var r;
var g;
var b;
var dd = 5;

function setup() {
 createCanvas( windowWidth , windowHeight );




function setup() {
  createCanvas( windowWidth , windowHeight );
  
  B1 = new Array(N);
  B2 = new Array(N);

  for ( n = 0 ; n < N ; n++ ){
    B1[n] = new Ball();
    B2[n] = new Ball();

    }
  
 background( r , g , b );
 
  var r = random( 0 , 255);
  var g = random( 0 , 255);
  var b = random( 0 , 255);
 
  stroke( r , g , b );
  //noStroke();
 
  var M = round(windowHeight/dd);
  var N = round(windowWidth/dd);
       
    dx = windowWidth/N;
    dy = windowHeight/M;


  for( a = 0 ; a < M ; a++ ){
    for( i = 0 ; i < N ; i++ ) {
 
  
  c1 = color( 28 , 75 , 204 );
  c2 = color( 58 , 175 , 81 );
  
  c3 = lerpColor( c1 , c2 , a/M );

  
  fill( c3 );
    rect( dx/2 +i*dx , dy/2 +a*dy , dx , dy );
   
   stroke( c3 );
   }
  }
 
}

function draw() {

  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();
   
rect( 0 , 0 ,250 , 250 );
  fill( 251 , 255 , 35 );
  }
}

//var Ball2 = function(){
  
  //this.pos2 = createVector( width/2 , height/2 );
 
 // this.vel = p5.Vector.random2D();
   //this.vel.mult( random( 2 , 4 ) );
  
  //this.evolveDraw =function() {
    //this.pos2.add( this.vel );
  
   // if ( this.pos2.x >= width || this.pos2.x <= 0 ){
  //    this.vel.x *=-1;
  //  }
   // if ( this.pos2.y >= height || this.pos2.y <= 0 ){
   //   this.vel.y *=-1;
  //  }

  //  fill( 255 , 255 , 255 );
   // ellipse( this.pos2.x , this.pos2.y , 20 );
   
// };
//};


var Ball = function(){
  this.pos = createVector( width/2 , height/2 );
  
  this.pos2 = createVector( width/2 , height/2 );
 
  this.v = p5.Vector.random2D();
   this.v.mult( random( 2 , 5 ) );
  
  this.evolveDraw =function() {
    this.pos.add( this.v );
  
    if ( this.pos.x >= width || this.pos.x <= 0 ){
      this.v.x *=-1;
    }
    if ( this.pos.y >= height || this.pos.y <= 0 ){
      this.v.y *=-1;
    }
    
  var r = random( 0 , 255);
  var g = random( 0 , 255);
  var b = random( 0 , 255);

   
    fill( r , g , b );
    ellipse( this.pos.x , this.pos.y , 20 );
   
    
  };
  
};


function keyTyped() {
  if( key === 's' ) {
    saveCanvas( 'canvas' , 'jpg' );
    console.log("saved");
  }
}
