import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  constructor(
    private paisS: PaisService
  ) { }

  termino: string = "Hola mundo";
  hayError: boolean = false;
  paises: Country[]= [];

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino)

    this.paisS.buscarPais(this.termino).subscribe(
      (res) =>{
        console.log(res)

        this.paises = res
    
      },
      (error)=>{
        console.log("aqui")
        console.log(error)
        this.hayError= true;
        this.paises=[]
      }
    )
  }


  sugerencias(event: any){
    this.hayError = false;
    
  }

}
