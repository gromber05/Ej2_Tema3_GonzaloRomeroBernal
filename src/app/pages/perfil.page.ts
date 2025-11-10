import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput,
  IonButton, IonList, IonNote
} from '@ionic/angular/standalone';
import { LocalStorageService } from '../core/local-storage.service';
import { UserStateService } from '../core/user-state.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-perfil',
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonInput, IonButton, IonList, IonNote
  ],
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']  
})
export class PerfilPage {
  private storage = inject(LocalStorageService);
  private userState = inject(UserStateService);
  private router = inject(Router);

  // Estado visual del botón
  feedbackActive = false;

  model = {
    nombre:    this.storage.get('nombre')    || '',
    apellidos: this.storage.get('apellidos') || '',
    domicilio: '',
    edad: null as number | null,
    curso: '',
    email: '',
    password: ''
  };

  guardar(f: NgForm) {
    if (!f.valid) return;

    // Persistencia + comunicación entre componentes
    this.storage.set('nombre', this.model.nombre);
    this.storage.set('apellidos', this.model.apellidos);
    this.userState.updateExtra({
      domicilio: this.model.domicilio,
      edad: this.model.edad,
      curso: this.model.curso,
      email: this.model.email,
      password: this.model.password
    });

    // Persistir también los campos "extra" en localStorage para sobrevivir recargas
    this.storage.set('domicilio', this.model.domicilio || '');
    this.storage.set('edad', this.model.edad != null ? String(this.model.edad) : '');
    this.storage.set('curso', this.model.curso || '');
    this.storage.set('email', this.model.email || '');
    this.storage.set('password', this.model.password || '');

    // Navegar a la vista Datos para mostrar la información guardada
    this.router.navigateByUrl('/list/datos');

    // 🔔 Feedback visual temporal del botón
    this.feedbackActive = true;
    setTimeout(() => this.feedbackActive = false, 1000); // 1s
  }
}
