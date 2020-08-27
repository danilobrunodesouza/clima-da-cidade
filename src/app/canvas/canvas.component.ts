import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Square } from '../shared/simple-forms/square';
import { Airplane } from '../shared/models/airplane';

@Component({
  selector: 'cdc-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  interval: any;
  airplane: Airplane;

  constructor() { }
  
  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.interval = setInterval(() => {
      this.loop();  
    }, 1000 / 60);

    this.airplane = new Airplane(this.ctx, 50, 100, 200,200, 1, 4);
  }

  loop(){
    this.move();
    this.draw();
  }

  draw() {
    this.drawSky();
    this.airplane.draw(); 
  }

  drawSky() {
    const grd = this.ctx.createLinearGradient(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    grd.addColorStop(0, "#aeeafc");
    grd.addColorStop(1, "#78ddfa");
    
    this.ctx.fillStyle = grd;
    const square = new Square(this.ctx);  
    square.draw(0, 0, this.canvas.nativeElement.width);
  }
  
  move(){
    this.airplane.move();
  }

}
