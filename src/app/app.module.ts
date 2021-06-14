import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { registerLocaleData } from '@angular/common';
import bg from '@angular/common/locales/bg';
registerLocaleData(bg);
import { ENVIRONMENT } from '@shared/shared';
import { CoreModule } from '@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';
import { bg_BG, NZ_I18N } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    LoadingBarHttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: ENVIRONMENT, useValue: environment },
    { provide: NZ_I18N, useValue: bg_BG },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
