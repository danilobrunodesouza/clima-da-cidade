import { FloatingObjects } from '../interfaces/floating-objects.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Square } from '../simple-forms/square';


export class Airplane implements FloatingObjects {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    width: number;
    height: number;
    direction: number;
    speed: number;

    sizeSquare = 40;
    sizeSpace = this.sizeSquare / 10;

    corPrimaria = '#f07dd1';
    corSecundaria = '#960f72';


    constructor(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        width: number,
        height: number,
        direction: number,
        speed: number,
    ) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.speed = speed;

    }

    draw() {
        this._drawBody();
        this._drawFront();
        
        this._drawWing();
        this._drawWindows();
        this._drawTail();
        
    }
    _drawTail() {
        this.ctx.fillStyle = this.corSecundaria;

        this.ctx.beginPath();
        this.ctx.moveTo(this.x - this.sizeSquare - this.sizeSpace, this.y  - (this.sizeSquare / 2) - this.sizeSpace);
        this.ctx.lineTo(this.x - this.sizeSpace , this.y  - (this.sizeSquare / 2) - this.sizeSpace);
        //this.ctx.lineTo(this.x + (this.sizeSquare / 2) + (this.sizeSquare * 2), this.y - (this.sizeSquare / 2));
        this.ctx.lineTo(this.x - (this.sizeSquare / 2) - this.sizeSpace, this.y - 40);
        this.ctx.fill();
    }
    _drawFront() {
       
        this.ctx.fillStyle = this.corSecundaria;

        this.ctx.beginPath();
        this.ctx.moveTo(this.x + 3 * this.sizeSquare, this.y);
        this.ctx.lineTo(this.x + (this.sizeSquare + this.sizeSpace) * 2 , this.y + (this.sizeSquare / 2));
        //this.ctx.lineTo(this.x + (this.sizeSquare / 2) + (this.sizeSquare * 2), this.y - (this.sizeSquare / 2));
        this.ctx.lineTo(this.x + (this.sizeSquare + this.sizeSpace) * 2, this.y - (this.sizeSquare / 2));
        this.ctx.fill();
    }

    _drawBody(){
        this.ctx.fillStyle = this.corPrimaria;
        this.ctx.fillRect(this.x, this.y - (this.sizeSquare / 2), this.sizeSquare, this.sizeSquare);
        this.ctx.fillRect(this.x - this.sizeSquare - this.sizeSpace, this.y - (this.sizeSquare / 2), this.sizeSquare, this.sizeSquare);
        this.ctx.fillRect(this.x + this.sizeSquare + this.sizeSpace, this.y - (this.sizeSquare / 2), this.sizeSquare, this.sizeSquare);
        
    }
    
    _drawWing(){
        this.ctx.fillStyle = this.corSecundaria;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x - this.sizeSquare, this.y + (this.sizeSquare * 0.35) );
        this.ctx.lineTo(this.x + 2 * this.sizeSquare, this.y + (this.sizeSquare * 0.35));
        this.ctx.lineTo(this.x + (this.sizeSquare / 2) - this.sizeSquare, this.y + this.sizeSquare);
        this.ctx.fill();

    }

    _drawWindows(){
        this.ctx.beginPath();
        this.ctx.arc(this.x + (this.sizeSquare * 1.5) + this.sizeSpace, this.y, 8, 0, 2 * Math.PI, false);
        this.ctx.arc(this.x + (this.sizeSquare / 2), this.y, 8, 0, 2 * Math.PI, false);
        this.ctx.arc(this.x - (this.sizeSquare * 0.5) - this.sizeSpace, this.y, 8, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = '#fce1f5';
        this.ctx.fill();

    }

    move() {
        this.x += this.speed;
        if(this.x > 1000){
            this.x = -100;
        }

    }

}