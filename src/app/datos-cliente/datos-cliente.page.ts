// src/app/datos-cliente/datos-cliente.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Cliente } from '../models/cliente.model';
import { DatosClienteService } from '../services/datos-cliente';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.page.html',
  styleUrls: ['./datos-cliente.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule // Para NgIf
  ],
})
export class DatosClientePage implements OnInit {
  cliente: Cliente | null = null;

  constructor(private datosService: DatosClienteService) { }

  ngOnInit() {
    // Recupera los datos del cliente desde el servicio 
    this.cliente = this.datosService.obtenerDatos();
  }
}