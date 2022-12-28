import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/material/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './core/layout/layout.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { JwtInterceptorProvider } from './core/interceptors/jwt.interceptor';
import {
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,
  RECAPTCHA_SETTINGS,
} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    ProductComponent,
    SalesComponent,
    NotfoundComponent,
    DetailProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptchaConfig.keyWeb,
      } as RecaptchaSettings,
    },
    JwtInterceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
