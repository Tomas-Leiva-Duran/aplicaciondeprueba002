import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CalculadoraPage implements OnInit {
  
  Numero1: number = 0
  Numero2: number = 0

  numeros = {
    Numero1:0,
    Numero2:0
  }

  constructor() { 

   /*   calcular() {
        console.log("Numero1= " ,this.Numero1)
        console.log("Numero2= " ,this.Numero2)
      }
    */
  }

  ngOnInit() {
  }

}
/*
function calcular() {
  throw new Error('Function not implemented.');
}
*/
