import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-dueno',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './modificar-dueno.component.html',
  styleUrl: './modificar-dueno.component.scss',
})
export class ModificarDuenoComponent {
  dueno : { dni:string,apellido:string, nombre:string, sena:string }  | undefined; 
  dniDuenoFind: string = '';
  findedDuenoBoolean:boolean = false;
  errorMensage: string = '';
  errorModifyDueno: boolean = false;
  duenos = [
    { dni: '17905189', apellido: 'Terleski', nombre: 'Julio', sena: 'T' },
    { dni: '43266572', apellido: 'Terleski', nombre: 'Isaac', sena: 'OT' },
    { dni: '17905105', apellido: 'Terleski', nombre: 'Juan', sena: 'TE' },
    { dni: '44545648', apellido: 'Terleski', nombre: 'Isaac', sena: 'OT' },
    { dni: '2', apellido: 'Terleski', nombre: 'Isaac', sena: 'OT' },
    { dni: '12121312', apellido: 'Terleski', nombre: 'Isaac', sena: 'OT' },
  ];

  
  /**
   * Finds the owner.
   *
   * @return {void} No return value.
   */
  findDueno(): void {
    if(this.dniDuenoFind===''){
      this.errorMensage = 'DNI vacio';
      this.errorModifyDueno = true;
      this.findedDuenoBoolean = false;
    }else{
      this.dueno = this.duenos.find((dueno) => dueno.dni === this.dniDuenoFind)!;
      if (this.dueno === undefined) {
        this.errorMensage = 'Dueno no encontrado';
        this.errorModifyDueno = true;
        this.findedDuenoBoolean = false;
      }else{
        this.findedDuenoBoolean = true;
        this.errorMensage = '';
        this.errorModifyDueno = false;
      }
    }
  }
}
