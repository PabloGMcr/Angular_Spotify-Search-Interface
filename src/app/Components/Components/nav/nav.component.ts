import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

 buscarAlbum(termino:string){
  
  console.log(termino) 

  this._router.navigate(['buscar/',termino])

 }

}


// Notas 
// 1.Vincular el ts y html del buscador en nav.component
// 2. Crear nueva regla en routing para redireccionar a Busqueda.component
// 3.Inyectar nueva regla en nav.ts 
// 4. Crear metodo de  redirecionamiento del componete nav al buscador
//
