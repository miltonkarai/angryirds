class Restricao {
    constructor(bodyA,pointB) {
        var options={
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
          }
          this.pointB=pointB
     this.restricao=Constraint.create(options)
World.add(world,this.restricao)

    }
    display(){
    if(this.restricao.bodyA){
      line (this.restricao.bodyA.position.x,this.restricao.bodyA.position.y,this.pointB.x,this.pointB.y) 
    }
    }
lanca (){
  this.restricao.bodyA=null

}

  };
  