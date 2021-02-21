import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import {Sede} from './sede';
import {ClienteService} from './cliente.service';
import  swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html'
})
export class SedeComponent implements OnInit {

 clientes: Cliente[];
 sedes: Sede[];
 //variable donde se asigna el json que contiene los datos para paginar
 paginador : any;



  constructor(private clientesService : ClienteService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
// el activeroute nos ayuda a recibir el parametro de la url
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.clientesService.getSedes()
        .pipe(
          // el tap es para escribir por consola
          tap(response => {
            console.log('SedeComponent: tap 3');
            (response.rows as Sede[]).forEach(sedes => console.log(sedes.nombreSede));
          })
        ).subscribe(response => {
          this.sedes = response.rows as Sede[];
          
        });
    });
  }


  

}
