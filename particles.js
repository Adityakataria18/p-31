class Particle{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
       this.r=8
       this.body=Bodies.circle(x,y,this.r,options)
       this.color=color(random(0,255)),(random(0,255)),(random(0,255))
       World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill((random(0,255)),(random(0,255)),(random(0,255)));
        pos.x=200
        pos.y=0
        pop();
    }
}