import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

const Material = [
  MatButtonModule,
  MatBadgeModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
