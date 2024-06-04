import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { ColdComponent } from './cold/cold.component';
import { DarkComponent } from './dark/dark.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    ColdComponent,
    DarkComponent,
    AboutComponent
  ],
  bootstrap:[AppComponent],
  imports: [
    BrowserModule,
    MenubarModule,
    RouterModule,
    AppRoutingModule,
    GalleriaModule,
    FieldsetModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    PanelModule 
   
  ],
  providers: []
})
export class AppModule { }
