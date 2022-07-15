import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './views/timeline/timeline.component';
import { ElectronicsComponent } from './views/electronics/electronics.component';


const routes: Routes = [
  {path:'', component: TimelineComponent},
  {path:'electronics', component: ElectronicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
