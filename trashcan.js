class Trashcan {
    constructor(x, y, width, height) {
        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.image = loadImage("TrashcanImage.png")

        World.add(world,this.body);
    }

    display() {
        var position = this.body.position
        push();
        rectMode(CENTER)
        fill(255)
        rect(this.x, this.y, this.width, this.height)
        pop();
    }
}
    
