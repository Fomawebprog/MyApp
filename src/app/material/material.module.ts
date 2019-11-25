import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

const Material = [
  MatButtonModule,
  MatBadgeModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
