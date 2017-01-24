var N = 100;

var B1;
var B2;


function setup() {
  createCanvas( windowWidth , windowHeight );
  
  B1 = new Array(N);
  B2 = new Array(N);

  for ( n = 0 ; n < N ; n++ ){
    B1[n] = new Ball();
    B2[n] = new Ball();

    }
  

 
  var r = random( 0 || 255);
  var g = random( 0 || 255);
  var b = random( 0 || 255);
 
  background( r , g , b );
 
  stroke( r , g , b );
 
}

function draw() {

  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();
   
  }
}

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
    
  var r = random( 0 || 255);
  var g = random( 0 || 255);
  var b = random( 0 || 255);

   
    fill( 255||1 , 255||1 , 255||1 );
    ellipse( this.pos.x , this.pos.y , 20 );
   
    
  };
  
};


function keyTyped() {
  if( key === 's' ) {
    saveCanvas( 'canvas' , 'jpg' );
    console.log("saved");
  };
 }

