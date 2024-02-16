import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalkComponent } from './talk/talk.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'chat/:id',
    component: TalkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
