import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColdComponent } from './cold/cold.component';
import { DarkComponent } from './dark/dark.component';
import { HotComponent } from './hot/hot.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:'',redirectTo:'header',pathMatch:'full'},
  {path:'header', component:HeaderComponent},
  {path:'carousel',component:CarouselComponent},
  {path:'cold',component: ColdComponent},
  {path:'dark',component:DarkComponent},
  {path:'hot',component:HotComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
