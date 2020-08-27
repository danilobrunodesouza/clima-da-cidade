export class Square {
    constructor(private ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number, size: number) {
    this.ctx.fillRect(size * x, size * y, size, size);
  }
}