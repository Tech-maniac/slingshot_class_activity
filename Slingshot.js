class SlingShot
{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);


        this.boomerang1=loadImage("sprites/sling1.png");
        this.boomerang2=loadImage("sprites/sling2.png");
        this.boomerang3=loadImage("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display()
    {
        image(this.boomerang1,200,20);
        image(this.boomerang2,170,20);
       
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(54,25,9);
            strokeWeight(10);
            line(pointA.x-20, pointA.y, pointB.x-16, pointB.y);
            line(pointA.x, pointA.y, pointB.x+23, pointB.y)
            image(this.boomerang3,pointA.x-25,pointA.y-5,12,25);
        }
    }
    
} 