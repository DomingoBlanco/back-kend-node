import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import { Sede } from './sede';
import {ClienteService} from './cliente.service';
import {Router,ActivatedRoute} from '@angular/router';
import  swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
 public cliente: Cliente = new Cliente()
 public sede: Sede = new Sede()
 sedes: Sede[];
 private titulo:string= "Crear cliente"
 errores: string[]
  constructor(private clienteService :ClienteService,
              private router:Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
    this.consultarSedes();

    

  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
      }

    })

  }

  public create(): void {
    console.log('Angular Sede '+this.cliente.idSede);
    this.clienteService.create(this.cliente)
    .subscribe(
      respuetaServiceJSON => {
       this.router.navigate(['/clientes'])

       swal.fire('Nuevo Cliente', `creado con exito`, 'success')
     },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          swal.fire('Error Cliente', 'Usuario ya existe', 'error')
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

  public update(): void {
    this.clienteService.update(this.cliente)
    .subscribe(
      respuetaServiceJSON => {
       this.router.navigate(['/clientes'])

       swal.fire('Cliente ', `${respuetaServiceJSON.mensaje}: ${respuetaServiceJSON.cliente.nombre} Actualizado con exito`, 'success')
     },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
   );

  }

}
