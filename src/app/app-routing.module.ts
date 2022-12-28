import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateGuard } from './core/guards/private.guard';
import { PublicGuard } from './core/guards/public.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        component: ProductComponent,
      },
      {
        path: 'product/:productId',
        component: DetailProductComponent,
      },
      {
        path: 'sales',
        component: SalesComponent,
      },
    ],
    canActivate: [PrivateGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [PublicGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PublicGuard],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
