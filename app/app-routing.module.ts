import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnPushComponent } from './on-push-component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/onpush',
    pathMatch: 'full'
  },
  {
    path: 'onpush',
    component: OnPushComponent
  }/*,
  {
    path: 'non-onpush',
    component: NonOnPushComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [OnPushComponent];
