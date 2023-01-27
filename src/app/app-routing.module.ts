import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent} from './Components/Components/nav/nav.component';
import { HomeComponent} from './Components/Components/home/home.component';
import { BusquedaComponent } from './Components/Components/busqueda/busqueda.component';
import { FooterComponent } from './Components/Components/footer/footer.component';


const routes: Routes = [
{path:'busqueda',component:BusquedaComponent},
{path:'footer',component:FooterComponent},
{path:'home',component:HomeComponent},
{path:'nav', component:NavComponent},
{path:'buscar/:termino',component:BusquedaComponent},
{path: '**', pathMatch: 'full', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
