import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  httpClient: any;

  constructor(private Http:HttpClient) { 
    console.log("funcionando")

   
  }

  
 
  ObtenerCanciones() {

    const headers= new HttpHeaders({

      "Authorization":"Bearer BQCAx_xUZ3H3UBpPD69mDeYWbonQ3nN56Syo1gPCP5LcJlkvQ93FLamWse27Eb1vq7PEfprl7eCCghnCCX1xUe88zz68bLOCUvh9nvj4jQwuXMd-ALE"
    }) 
    return this.Http.get("https://api.spotify.com/v1/browse/new-releases?country=CR&limit=30",{headers}) 
             
  }

  
  /* ObtenerAlbum() {

    const headers= new HttpHeaders({

      "Authorization":"Bearer BQCFN7pADBv2oWEnjUdslWz1XCLUMxWNURUHaPyitKnHeUuBDjLAibg9GgJedUHJ-mJU0ZvdhS78lhdzndON-rvytpnEFpjLseSTETnnMsrLmz6gKk0"
    }) 
    return this.Http.get("https://api.spotify.com/v1/search?q=name&type=album&market=CR&limit=30",{headers}) 
             
  } */


     buscador(termino:string){


      const headers= new HttpHeaders({

        "Authorization":"Bearer BQCAx_xUZ3H3UBpPD69mDeYWbonQ3nN56Syo1gPCP5LcJlkvQ93FLamWse27Eb1vq7PEfprl7eCCghnCCX1xUe88zz68bLOCUvh9nvj4jQwuXMd-ALE"
      })

      
    let api=`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`

    return this.Http.get(api,{headers})
    

  }  
 

}

/* 
  buscador(busqueda:string){

    let arreglo:IHeroe []=[];
    
    busqueda=busqueda.toLocaleLowerCase();
    for (let index = 0; index < this.Heroes.length; index++) {

      let heroe = this.Heroes[index]
      let nombre = heroe.nombre.toLocaleLowerCase();

      if( nombre.indexOf(busqueda) >=0) {
        arreglo.push(heroe)
      }
         
    } 

    return arreglo;
  } */


    
 




 


