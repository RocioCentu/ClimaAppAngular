import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Component, AfterContentInit, DoCheck, OnInit } from '@angular/core';


import { Ciudad } from 'src/app/models/Ciudad';
import { ServicioClimaService } from 'src/app/services/servicio-clima.service';
import { ListCiudadesComponent } from '../list-ciudades/list-ciudades.component';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  id: string;
  ciudadSeleccionda: Ciudad;
  ciudad: Ciudad;
  loading = true;
  listCiudades: Ciudad[] = [];
  list: Ciudad[] = [];

  constructor(private aRoute: ActivatedRoute, private servicesClima: ServicioClimaService, private router: Router) {
    this.id= this.aRoute.snapshot.paramMap.get('id');

  }


  ngOnInit(): void {
    this.getCiudad();
  }

  getCiudad(): void {
    this.ciudadSeleccionda = this.servicesClima.filtrarCiudadPorId(this.id);

    if (this.ciudadSeleccionda === undefined) {
      //vuelvo a hacer la llamada a la api para tener todas las ciudades
      this.servicesClima.getClima().subscribe(data => {
        this.ciudad = null;
        const tope = data.length;
        for (let i = 0; i < tope; i++) {
          this.ciudad = {
            id: data[i]._id,
            name: data[i].name,
            temp: data[i].weather.temp,
            humidity: data[i].weather.humidity,
            wheater: data[i].weather.description,
            province: data[i].province,
            pressure: data[i].weather.pressure,
            visibility: data[i].weather.visibility,
            wind_speed: data[i].weather.wind_speed,
            temp_min: data[i].forecast.forecast.tepm_min,
            temp_max: data[i].forecast.forecast.temp_max,
            date: data[i].forecast.date_time,

          }
          this.listCiudades = [...this.listCiudades, this.ciudad];
        } 
        this.servicesClima.setlistCiudades(this.listCiudades);
        //filtro la ciudad seleccionada
        this.ciudadSeleccionda = this.servicesClima.filtrarCiudadPorId(this.id);
        this.loading = false;

      

      });
    } else {
      this.loading = false;
    }
  }



}
