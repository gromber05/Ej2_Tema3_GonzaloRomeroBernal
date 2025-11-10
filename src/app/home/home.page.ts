import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  IonicModule
} from '@ionic/angular';
import { UserStateService } from '../core/user-state.service';
import { CounterComponent } from '../components/counter/counter.component';

import { CalculadoraComponent } from './calculadora/calculadora.component';
import { Resultados } from '../models/calculadora.model';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule, FormsModule, RouterLink, RouterOutlet,
    IonicModule, CalculadoraComponent,
    CounterComponent
  ],
  templateUrl: './home.page.html'
})
export class HomePage {
  //private state = inject(UserStateService);

  // Título que viaja a otras vistas (padre → hijos por servicio, como antes)
 // titulo = this.state.headerTitle();

  // Contador gestionado en el padre y mostrado en el hijo
  parentCount = 0;

  // Mensaje cuando el hijo alcanza una decena
  milestoneMsg = '';

  /*onTituloChange(v: string) {
    this.titulo = v;
    this.state.setHeaderTitle(v);
  }*/

  incrementFromParent() {
    this.parentCount++;
  }

  onMilestoneReached(n: number) {
    this.milestoneMsg = `Ha llegado al ${n}`;
    // (Opcional) limpiar el mensaje a los X segundos:
    setTimeout(() => this.milestoneMsg = '', 3000);
  }

  num1: number = 0;
  num2: number = 0;
  // Variables que se envían al hijo (para forzar el cambio en el Input del hijo al hacer clic)
  valorAEnviar: number | null = null;
  valorBEnviar: number | null = null;
  
  resultados: Resultados | null = null; // Variable para guardar los resultados del hijo [cite: 26]

  constructor() {}

  calcular() {
    // Al hacer clic en Calcular, actualiza las variables de Input para disparar el cálculo en el hijo [cite: 25]
    this.valorAEnviar = this.num1;
    this.valorBEnviar = this.num2;
  }

  // Método que recibe el evento (Output) del componente hijo [cite: 26]
  mostrarResultados(res: Resultados) {
    this.resultados = res;
  }
}
