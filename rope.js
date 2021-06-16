class rope{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointb:{x:this.offsetX,y:this.offsetY}                                         
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display()
    {
        var pointa = this.rope.bodyA.position
        var pointb  = this.rope.bodyB.position
        var anchor1x = pointa.x
        var anchor1y = pointa.y
        var anchor2x = pointb.x + this.offsetX
        var anchor2y = pointb.y + this.offsetY
        line(anchor1x,anchor1y,anchor2x,anchor2y);

    }
}