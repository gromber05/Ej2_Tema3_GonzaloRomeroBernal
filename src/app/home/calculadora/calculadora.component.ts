// src/app/home/calculadora/calculadora.component.ts

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Resultados } from 'src/app/models/calculadora.model';
import { IonicModule } from '@ionic/angular';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
  imports: [IonicModule, NgIf],
})
export class CalculadoraComponent implements OnChanges {
  // 1. Inputs para recibir los valores desde el padre [cite: 24]
  @Input() valor1: number | null = null;
  @Input() valor2: number | null = null;

  // 2. Output para devolver los resultados al padre [cite: 26]
  @Output() resultadosCalculados = new EventEmitter<Resultados>();

  ngOnChanges(changes: SimpleChanges): void {
    // Solo si ambos valores son válidos, realiza el cálculo.
    if (this.valor1 !== null && this.valor2 !== null) {
      this.realizarCalculos();
    }
  }

  realizarCalculos() {
    if (this.valor1 === null || this.valor2 === null) return;

    const resultados: Resultados = {
      suma: this.valor1 + this.valor2,
      resta: this.valor1 - this.valor2,
      multiplicacion: this.valor1 * this.valor2,
      // Manejo de división por cero
      division: this.valor2 !== 0 ? this.valor1 / this.valor2 : NaN,
    };

    // 3. Emite el objeto de resultados al componente padre [cite: 26]
    this.resultadosCalculados.emit(resultados);
  }
}