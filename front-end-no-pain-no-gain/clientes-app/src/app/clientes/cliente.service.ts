import { Injectable } from '@angular/core';
import {Cliente} from './cliente';
import {Sede} from './sede';
import {Ciudad} from './ciudad';
import {Observable, throwError} from 'rxjs';
import {of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import  swal from 'sweetalert2';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEnpoint:string = 'http://localhost:8080/api/gym/';
  private httpHeader = new HttpHeaders({'Content-Type':'application/json'});
  
  constructor(private http: HttpClient, private router : Router) { }

  getClientes(page: number): Observable<any> {
  return this.http.get(this.urlEnpoint + 'allUsuarios').pipe(
    tap((response: any) => {
       console.log('ClienteService: tap 1 ');
       (response.rows as Cliente[]).forEach(cliente => console.log(cliente.nombre));
     }),
     map((response: any) => {
       (response.rows as Cliente[]).map(cliente => {
         cliente.nombre = cliente.nombre.toUpperCase();
    
         return cliente;
       });
       return response;
     }),
     tap(response => {
       console.log('ClienteService: tap 2');
       (response.rows as Cliente[]).forEach(cliente => console.log(cliente.nombre));
     })
   );
 }



create(cliente:Cliente): Observable<any>{
  console.log('angular rol '+cliente.rol)
  return this.http.post<any>(this.urlEnpoint,cliente,{headers:this.httpHeader}).pipe(
    catchError(e => {
      //this.router.navigate(['/clientes']);
      if(e.status == 400){
        return throwError(e);
      }

     console.error(e.error.mensaje);
     swal.fire(e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    })
  );
}

getCliente(id): Observable<Cliente>{
  return this.http.get<Cliente>(`${this.urlEnpoint}/${id}`).pipe(
    catchError(e => {
      this.router.navigate(['/clientes']);
     console.error(e.error.mensaje);
     swal.fire('Error al editar', e.error.mensaje, 'error');
      return throwError(e);
    })
  );
}


getSedes(): Observable<any> {
  return this.http.get(this.urlEnpoint + 'allSedes').pipe(
    tap((response: any) => {
       console.log('Sedes: tap 1 ');
       (response.rows as Sede[]).forEach(sedes => console.log(sedes.nombreSede));
     }),
     map((response: any) => {
       (response.rows as Sede[]).map(sedes => {
        sedes.nombreSede = sedes.nombreSede.toUpperCase();
    
         return sedes;
       });
       return response;
     }),
     tap(response => {
       console.log('Sede: tap 2');
       (response.rows as Sede[]).forEach(sede => console.log(sede.nombreSede));
     })
   );
 }

 getCiudades(): Observable<any> {
  return this.http.get(this.urlEnpoint + 'allCiudades').pipe(
    tap((response: any) => {
       console.log('Ciudades: tap 1 ');
       (response.rows as Ciudad[]).forEach(ciudad => console.log(ciudad.descripcionCiudad));
     }),
     map((response: any) => {
       (response.rows as Ciudad[]).map(ciudad => {
        ciudad.descripcionCiudad = ciudad.descripcionCiudad.toUpperCase();
    
         return ciudad;
       });
       return response;
     }),
     tap(response => {
       console.log('Ciudad: tap 2');
       (response.rows as Ciudad[]).forEach(ciudad => console.log(ciudad.descripcionCiudad));
     })
   );
 }

 createSede(sede:Sede): Observable<any>{
  console.log('angular rol '+sede.nit)
  return this.http.post<any>(this.urlEnpoint+'sede',sede,{headers:this.httpHeader}).pipe(
    catchError(e => {
      //this.router.navigate(['/clientes']);
      if(e.status == 400){
        return throwError(e);
      }

     console.error(e.error.mensaje);
     swal.fire(e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    })
  );
}


createCiudad(ciudad:Ciudad): Observable<any>{
  console.log('angular ciudad '+ciudad.descripcionCiudad)
  return this.http.post<any>(this.urlEnpoint+'ciudad',ciudad,{headers:this.httpHeader}).pipe(
    catchError(e => {
      //this.router.navigate(['/clientes']);
      if(e.status == 400){
        return throwError(e);
      }

     console.error(e.error.mensaje);
     swal.fire(e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    })
  );
}


update(cliente:Cliente): Observable<any>{
  return this.http.put<any>(`${this.urlEnpoint}/${cliente.id_usuario}`,cliente,{headers:this.httpHeader}).pipe(
    catchError(e => {
    //  this.router.navigate(['/clientes']);
    // condicional para tomar los errores de la validacion de los campos en el backend
     if(e.status == 400){
       return throwError(e);
     }
     console.error(e.error.mensaje);
     swal.fire(e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    })
  );
}

delete(id: number): Observable<Cliente>{
  return this.http.delete<Cliente>(`${this.urlEnpoint}/${id}`,{headers:this.httpHeader}).pipe(
    catchError(e => {
    //  this.router.navigate(['/clientes']);
     console.error(e.error.mensaje);
     //swal.fire('Error al eliminar', e.error.mensaje, 'error');
     swal.fire(e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    })
  );
}


}
