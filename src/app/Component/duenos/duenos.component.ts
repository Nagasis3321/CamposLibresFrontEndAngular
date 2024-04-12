import { Component } from '@angular/core';
import { AnadirDuenoComponent } from './anadir-dueno/anadir-dueno.component';
import { ModificarDuenoComponent } from './modificar-dueno/modificar-dueno.component';
import { BorrarDuenoComponent } from './borrar-dueno/borrar-dueno.component';

import { BuscarDuenoComponent } from './buscar-dueno/buscar-dueno.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-duenos',
  standalone: true,
  imports: [AnadirDuenoComponent,ModificarDuenoComponent,BorrarDuenoComponent,BuscarDuenoComponent,CommonModule],
  templateUrl: './duenos.component.html',
  styleUrl: './duenos.component.scss'
})
export class DuenosComponent {
  viewComponente:"new" |"modify"| "delete" | "find"  ="modify"
  constructor() {}
  seleccionarComponente( eleccion:"new" |"modify"| "delete" | "find" ){
    this.viewComponente = eleccion;
  }


}
