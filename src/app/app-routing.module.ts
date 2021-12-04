import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: ()=> import("./modules/greet/greet.module").then(m => m.GreetModule)},
  {path: 'my-map', loadChildren: ()=> import("./modules/my-map/my-map.module").then(m => m.MyMapModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
