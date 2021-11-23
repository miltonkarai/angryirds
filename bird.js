class Bird extends Base {
    constructor(x, y) {
      super(x,y,50,50)

      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':2.0
      }
     this.image=loadImage("sprites/bird.png") 
    }
    display(){
      //var pos =this.body.position;
     // pos.x=mouseX
      //pos.y=mouseY
super.display()
    }
  };
  