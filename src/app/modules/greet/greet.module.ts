import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {GreetComponent} from "./greet.component";

const routes: Routes = [
  {path: "", component: GreetComponent}
];

@NgModule({
  declarations: [GreetComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreetModule { }
