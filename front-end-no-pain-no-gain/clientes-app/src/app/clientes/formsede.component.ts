import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import { Sede } from './sede';
import { Ciudad } from './ciudad';
import {ClienteService} from './cliente.service';
import {Router,ActivatedRoute} from '@angular/router';
import  swal from 'sweetalert2';

@Component({
  selector: 'app-formsede',
  templateUrl: './formsede.component.html'
})
export class FormsedeComponent implements OnInit {
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
   // this.cargarCliente();
    this.consultarSedes();
    this.consultarCiudades();

  }

  
  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
      }

    })

  }

  public createSede(): void {
    console.log('Angular Sede ciudad '+this.sede.ciudad+' nombre sede '+this.sede.nombreSede);
    
    this.clienteService.createSede(this.sede)
    .subscribe(
      respuetaServiceJSON => {
       this.router.navigate(['clientes/sede'])

       swal.fire('Nuevo Sede', `creada con exito`, 'success')
     },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          swal.fire('Error Sede', 'No se ha podido crear la sede', 'error')
          ;
        }

   );

  }

  public consultarSedes(): void {
    this.clienteService.getSedes()
    .subscribe(response => {
      this.sedes = response.rows as Sede[];
     
    });

  }

  public consultarCiudades(): void {
    this.clienteService.getCiudades()
    .subscribe(response => {
      this.ciudades = response.rows as Ciudad[];
     
    });

  }

}
