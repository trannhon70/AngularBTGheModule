import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDiretiveComponent } from './structural-diretive/structural-diretive.component';



@NgModule({
  declarations: [
    StructuralDiretiveComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[StructuralDiretiveComponent]
})
export class DiretiveModule { }
