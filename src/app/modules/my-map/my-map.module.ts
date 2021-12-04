import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import {MyMapComponent} from "./my-map.component";

const routes: Routes = [
  {path: '', component: MyMapComponent}
];

@NgModule({
  declarations: [MyMapComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [RouterModule]
})
export class MyMapModule { }
