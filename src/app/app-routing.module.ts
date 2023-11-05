import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './_auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[authGuard],
    children:[
      {
        path:'home',
        component:HomeComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      }
    ]
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
