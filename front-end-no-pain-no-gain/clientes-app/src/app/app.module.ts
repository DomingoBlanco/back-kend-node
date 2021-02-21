import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsedeComponent } from './clientes/formsede.component';
import { FormciudadComponent } from './clientes/formciudad.component';
import { SedeComponent } from './clientes/sede.component';
import { CiudadComponent } from './clientes/ciudad.component';
import {FormsModule} from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';

const routes: Routes=[
  {path:'',redirectTo:'/clientes',pathMatch:'full'},
  {path:'directivas', component:DirectivaComponent},
  {path:'clientes',  component:ClientesComponent},
  {path:'clientes/page/:page',  component:ClientesComponent},
  {path:'clientes/form',  component:FormComponent},
  {path:'clientes/formciudad',  component:FormciudadComponent},
  {path:'clientes/formsede',  component:FormsedeComponent},
  {path:'clientes/sede',  component:SedeComponent},
  {path:'clientes/ciudad',  component:CiudadComponent},
  {path:'clientes/form/:id',  component:FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    FormsedeComponent,
    FormciudadComponent,
    SedeComponent,
    CiudadComponent,
    PaginatorComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
