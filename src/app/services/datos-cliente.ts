import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class DatosClienteService {
  private datosCliente: Cliente | null = null;

  constructor() { }

  guardarDatos(cliente: Cliente) {
    this.datosCliente = cliente;
  }

  obtenerDatos(): Cliente | null {
    return this.datosCliente;
  }
}