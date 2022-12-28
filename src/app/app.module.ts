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
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    ProductComponent,
    SalesComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    HttpClientModule,
  ],
  providers: [
    JwtInterceptorProvider,
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.reCaptchaConfig.keyWebSite,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
