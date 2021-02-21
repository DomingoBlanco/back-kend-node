import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import { Sede } from './sede';
import { Ciudad } from './ciudad';
import {ClienteService} from './cliente.service';
import {Router,ActivatedRoute} from '@angular/router';
import  swal from 'sweetalert2';

@Component({
  selector: 'app-formciudad',
  templateUrl: './formciudad.component.html'
})
export class FormciudadComponent implements OnInit {
 public cliente: Cliente = new Cliente()
 public sede: Sede = new Sede()
 sedes: Sede[];
 public ciudad: Ciudad = new Ciudad()
 ciudades: Ciudad[];
 private titulo:string= "Crear Sede"
 errores: string[]
  constructor(private clienteService :ClienteService,
              private router:Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.consultarCiudades();

  }



  public createCiudad(): void {
    console.log('Angular Sede ciudad '+this.sede.ciudad+' nombre sede '+this.sede.nombreSede);
    this.ciudad.ciudad = this.ciudad.descripcionCiudad;
    this.clienteService.createCiudad(this.ciudad)
    .subscribe(
      respuetaServiceJSON => {
       this.router.navigate(['clientes/ciudad'])

       swal.fire('Nuevo Ciudad', `creada con exito`, 'success')
     },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          swal.fire('Error Ciudad', 'No se ha podido crear la ciudad', 'error')
          ;
        }

   );

  }


  public consultarCiudades(): void {
    this.clienteService.getCiudades()
    .subscribe(response => {
      this.ciudades = response.rows as Ciudad[];
     
    });

  }

}
