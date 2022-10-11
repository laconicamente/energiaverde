import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [{
    path: '',
    component: HomeComponent,
  },
  {
    path: 'frame',
    component: FrameComponent
  }]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'ignore'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
