import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbpsPipePipe } from './nbps-pipe.pipe';



@NgModule({
  declarations: [
    NbpsPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [NbpsPipePipe]

})
export class NbpsModule { }
