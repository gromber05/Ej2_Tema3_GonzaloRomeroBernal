import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { LocalStorageService } from '../core/local-storage.service';
import { UserStateService } from '../core/user-state.service';

@Component({
  standalone: true,
  selector: 'app-datos',
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList],
  templateUrl: './datos.page.html'
})
export class DatosPage {
  private storage = inject(LocalStorageService);
  private userState = inject(UserStateService);

  nombre = this.storage.get('nombre');
  apellidos = this.storage.get('apellidos');

  extra$ = this.userState.extra$;

  ngOnInit() {
    // Si hay datos en localStorage, inicializamos el estado compartido
    const domicilio = this.storage.get('domicilio') || '';
    const edadStr = this.storage.get('edad');
    const edad = edadStr ? Number(edadStr) : null;
    const curso = this.storage.get('curso') || '';
    const email = this.storage.get('email') || '';
    const password = this.storage.get('password') || '';

    // Solo parchear si hay algún valor guardado
    if (domicilio || edadStr || curso || email || password) {
      this.userState.updateExtra({ domicilio, edad, curso, email, password });
    }
  }
}
