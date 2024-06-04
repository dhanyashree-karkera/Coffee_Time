import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColdComponent } from './cold/cold.component';
import { DarkComponent } from './dark/dark.component';
import { HotComponent } from './hot/hot.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'', component:HeaderComponent},
  {path:'carousel',component:CarouselComponent},
  {path:'cold',component: ColdComponent},
  {path:'dark',component:DarkComponent},
  {path:'hot',component:HotComponent},
  {path:'about',component:AboutComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
