import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
  IonContent, IonItem, IonLabel, IonInput, IonRouterOutlet,IonFooter
} from '@ionic/angular/standalone';
import { UserStateService } from '../core/user-state.service';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule, FormsModule, RouterLink, RouterOutlet,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
    IonContent, IonItem, IonLabel, IonInput, IonRouterOutlet,
    CounterComponent, IonFooter
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
}
