class Rope{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.01,
          length: 10
      }
      this.pointB=pointB;
      this.Rope = Constraint.create(options);
      World.add(world, this.Rope);
  }

  fly(){
      this.Rope.bodyA=null;
  }

  Launch(bodyA){
      this.Rope.bodyA=bodyA;
  }

  display(){
     
  }
  
}