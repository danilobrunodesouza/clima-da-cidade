import { NgModule } from "@angular/core";
import { CanvasComponent } from './canvas.component';
import { CommonModule } from '@angular/common';

NgModule({
    declarations : [ CanvasComponent ],
    exports : [ CanvasComponent ],
    imports : [ CommonModule ],
})