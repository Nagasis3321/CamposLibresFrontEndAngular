import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter-dueno.pipe';

@Component({
  selector: 'app-buscar-dueno',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './buscar-dueno.component.html',
  styleUrl: './buscar-dueno.component.scss'
})
export class BuscarDuenoComponent {
  dniFilter:string="";
  apellidoFilter:string="";
  nombreFilter:string="";
  senaFilter:string=""  ;
  duenos=[
    {dni:17905189,Apellido:"Terleski",Nombre:"Julio",sena:"T"},
    {dni:17905189,Apellido:"Terleski",Nombre:"Isaac",sena:"IT"},
    {dni:17905189,Apellido:"Terleski",Nombre:"Juan",sena:"TJ"},
    {dni:17905189,Apellido:"Terleski",Nombre:"Elio",sena:"TE"},
    {dni:17905189,Apellido:"Terleski",Nombre:"Debora",sena:"TD"}
  ]


}
