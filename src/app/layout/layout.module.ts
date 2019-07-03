import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';

/* @export
 * @class LayoutModule
 */
@NgModule({
  imports: [CommonModule, CoreModule, AppRoutingModule, TranslateModule],
  providers: [],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class LayoutModule {}
