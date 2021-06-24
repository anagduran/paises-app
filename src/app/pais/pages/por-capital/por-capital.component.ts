import { Component, OnInit } from '@angular/core';
import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

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

    this.paisS.buscarCapital(this.termino).subscribe(
      (res) =>{
        this.paises = res
    
      },
      (error)=>{
        this.hayError= true;
        this.paises=[]
      }
    )
  }




}
