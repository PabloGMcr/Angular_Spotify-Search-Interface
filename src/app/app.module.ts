import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule} from '@angular/common/http';
import { NavComponent } from './Components/Components/nav/nav.component';
import { HomeComponent } from './Components/Components/home/home.component';
import { BusquedaComponent } from './Components/Components/busqueda/busqueda.component';
import { FooterComponent } from './Components/Components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BusquedaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
