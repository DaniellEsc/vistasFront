import { Component } from '@angular/core';

@Component({
  selector: 'app-ficha-abordaje',
  templateUrl: './ficha-abordaje.component.html',
  styleUrls: ['./ficha-abordaje.component.css']
})
export class FichaAbordajeComponent {

  selectedIdentificacion: string = '';

  selectedValue: string = '';
}
