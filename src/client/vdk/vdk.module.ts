import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsService } from './forms/forms.service';
import { GridOptionService } from './forms/grid/grid.option.service';

@NgModule({
  imports: [ 
    CommonModule, 
    HttpModule, 
    FormsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule
  ]
})
export class VDKModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VDKModule,
      providers: [
        FormsService,
        GridOptionService
      ]
    }
  }
}

