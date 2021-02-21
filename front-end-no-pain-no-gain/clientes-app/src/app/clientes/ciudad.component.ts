import { Component, OnInit } from '@angular/core';
import {Ciudad} from './ciudad';
import {ClienteService} from './cliente.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html'
})
export class CiudadComponent implements OnInit {

 city: Ciudad[];
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

      this.clientesService.getCiudades()
        .pipe(
          // el tap es para escribir por consola
          tap(response => {
            console.log('CiudadesComponent: tap 3');
            (response.rows as Ciudad[]).forEach(ciudad => console.log(ciudad.descripcionCiudad));
          })
        ).subscribe(response => {
          this.city = response.rows as Ciudad[];
          
        });
    });
  }


  

}
