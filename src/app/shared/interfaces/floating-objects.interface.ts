export interface FloatingObjects {
    ctx: CanvasRenderingContext2D
    x : number
    y : number
    width : number
    height : number
    direction : number
    speed : number


    draw()

    move()
}