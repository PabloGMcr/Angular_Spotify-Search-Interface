import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/Services/web-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Variable Local
   
  ObternerCancion:any=[];

  constructor(private _servicio:WebServiceService) { }

  ngOnInit(): void {
    this.ObtenerCanciones()
    
    
    
  }

  ObtenerCanciones () {

    this._servicio.ObtenerCanciones().subscribe((data:any)=>{
      console.log(data)
      this.ObternerCancion=data.albums.items
      console.warn(this.ObternerCancion)
    })


  }

}


// 1.Inyectar servicio en constructor
// 2.Suscribirme
// 3.console.log
// 4.Variable local
// 5.Pintar en html
    

  
