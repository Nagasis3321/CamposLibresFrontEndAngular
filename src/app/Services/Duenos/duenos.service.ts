import { Injectable } from '@angular/core';
import { Dueno } from '../../Interfaces/Index';
@Injectable({
  providedIn: 'root',
})
export class DuenosService {
  duenos: Dueno[] = [
    { dni: 17905189, apellido: 'Terleski', nombre: 'Julio', sena: 'T' },
    { dni: 43266572, apellido: 'Terleski', nombre: 'Isaac', sena: 'IT' },
    { dni: 17905189, apellido: 'Terleski', nombre: 'Juan', sena: 'TJ' },
    { dni: 17905189, apellido: 'Terleski', nombre: 'Elio', sena: 'TE' },
    { dni: 17905189, apellido: 'Terleski', nombre: 'Debora', sena: 'TD' },
  ];

  getDuenos(): Dueno[] {
    return this.duenos;
  }

  getDueno(dni: number): Dueno | undefined {
    return this.duenos.find((dueno: Dueno) => {
      dueno.dni === dni;
    });
  }

  constructor() {}
}
