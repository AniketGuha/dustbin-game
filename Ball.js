class Ball{
    constructor(x,y,width,height){
  
          var opt= {
              restitution:0.4 ,
               friction:1,
            density:1.2           }
           
           this.body = Bodies.rectangle(x,y,width,height,opt);
           this.width=width;
           this.height=height;
           this.image=loadImage("paper.png")
    
            World.add(world,this.body)
      }
  
      display(){
       var pos = this.body.position;
       var angles = this.body.angle;
       push ();
  
       translate(pos.x,pos.y);
       rotate(angles)
       imageMode (CENTER)
         image (this.image,0,0,this.width,this.height)
   pop ();
          }
  
  }