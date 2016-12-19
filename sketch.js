 var N = 500;

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
  
 background( 0 , 0 , 0 );
 
  var r = random( 0 , 255);
  var g = random( 0 , 255);
  var b = random( 0 , 255);
 
  stroke( r , g , b );
  //noStroke();
}

function draw() {

  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();
    
    
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
   this.v.mult( random( 7 , 7 ) );
  
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
