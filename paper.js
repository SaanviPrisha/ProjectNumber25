class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }

        this.body = Bodies.circle(x, y, 20, options);

        this.x = x;
        this.y = y;
        this.radius = 20

        this.image = loadImage("PaperBall.png")

        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS)
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image, 0, 0, 30, 30);
        pop();
    }
}