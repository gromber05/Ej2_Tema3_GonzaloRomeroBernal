import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { Cliente } from '../models/cliente.model';
import { DatosClienteService } from '../services/datos-cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule // Para formularios reactivos
  ],
})
export class ClientePage implements OnInit {
  clienteForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datosService: DatosClienteService,
    private router: Router
  ) {}

  ngOnInit() {
    // Inicialización del formulario reactivo [cite: 29]
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      // Validación: requerido y formato de email [cite: 29]
      email: ['', [Validators.required, Validators.email]], 
      nacionalidad: ['', Validators.required]
    });
  }

  guardar() {
    // Solo si el formulario es válido se permite guardar [cite: 29]
    if (this.clienteForm.valid) {
      const nuevoCliente: Cliente = this.clienteForm.value as Cliente;
      
      // 1. Transmitir los datos mediante el servicio 
      this.datosService.guardarDatos(nuevoCliente);
      
      // 2. Navegar a la ruta DatosCliente 
      this.router.navigateByUrl('/datos-cliente');
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      this.clienteForm.markAllAsTouched();
    }
  }

  // Getter para un acceso más fácil a los controles del formulario en el HTML
  get c() {
    return this.clienteForm.controls;
  }
}