 var N = 25;

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
  
 background( 127.5 , 127.5 , 127.5 );
 
  stroke( 127.5 , 127.5 , 127.5 );
  //noStroke();
}

function draw() {

  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();
    
    
  }
}


var Ball = function(){
  this.pos = createVector( width/2 , height/2 );
  
  this.pos2 = createVector( width/2.5 , height/2.5 );
 
  this.v = p5.Vector.random2D();
   this.v.mult( random( 1 , 3 ) );
  
  this.evolveDraw =function() {
    this.pos.add( this.v );
  
    if ( this.pos.x >= width || this.pos.x <= 0 ){
      this.v.x *=-1;
    }
    if ( this.pos.y >= height || this.pos.y <= 0 ){
      this.v.y *=-1;
    }
    
   
    fill( 0 , 0 , 0 );
    ellipse( this.pos.x , this.pos.y , 20 );
   
    fill( 255 , 255 , 255 );
    ellipse( this.pos2.x , this.pos2.y , 20 );
    
  };
  
};


function keyTyped() {
  if( key === 's' ) {
    saveCanvas( 'canvas' , 'jpg' );
    console.log("saved");
  }
}
