import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { WebServiceService } from 'src/app/Services/web-service.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  // Variable Global
  
  mibusqueda:any=[]; // <---

  artista:string="";
 
  constructor(private _router:ActivatedRoute, private _servicio:WebServiceService){}
  

  ngOnInit(): void {

    

    this._router.params.subscribe(data=>{
      
      
      this.artista=data['termino']
      console.log(this.artista)
      this.buscar(this.artista)
                   
    })  
  }
    buscar(nombre:string){

    this._servicio.buscador(nombre).subscribe((data:any)=>{
      console.log(data);
   this.mibusqueda= data.artists.items  // <---
  console.log(this.mibusqueda);

    })
  } 
 
  }



// Notas
// Servicio:crear un metodo que busque el termino en el arreglo
// Iyectarlo y pasar el valor que de activated routed
// Pintar informacion del heroe encontrado eb el html 