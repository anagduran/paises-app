import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `
    li {
      cursor: pointer
    }
  `
  ]
})
export class PorPaisComponent implements OnInit {

  constructor(
    private paisS: PaisService
  ) { }

  termino: string = "";
  hayError: boolean = false;
  paises: Country[]= [];
  paisesSugeridos: Country[]= [];
  mostrarSugerencias: boolean = false;

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
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


  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino
    this.mostrarSugerencias = true;
    this.paisS.buscarPais(termino).subscribe(
      paises => {
        this.paisesSugeridos = paises.splice(0,5),
        (err)=> this.paisesSugeridos = []
      }
    )
    
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
   
  }

}
