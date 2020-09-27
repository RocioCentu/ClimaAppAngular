import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCiudadesComponent } from './components/list-ciudades/list-ciudades.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import {HttpClientModule} from '@angular/common/http';
import { DetallesComponent } from './components/detalles/detalles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
  ListCiudadesComponent,
    DetallesComponent,
    NavbarComponent,
    FooterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
