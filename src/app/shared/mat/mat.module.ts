import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatCheckboxModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  declarations: [
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ]
})
export class MatModule { }
