import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {
  listCurso: string[] = ['Registro de Usuario', 'Registro Asociación Usuario Sede', 'Registro de Ciudades','Registro de Sede', 'Consulta Usuario'];
  habilitar: boolean = true;
  constructor() { }
  setHabilitar(): void{
    this.habilitar = (this.habilitar==true)?false:true;
  }

}
