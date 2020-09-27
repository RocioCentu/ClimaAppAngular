import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/Ciudad';
import { ServicioClimaService } from 'src/app/services/servicio-clima.service';

@Component({
  selector: 'app-list-ciudades',
  templateUrl: './list-ciudades.component.html',
  styleUrls: ['./list-ciudades.component.css']
})
export class ListCiudadesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'temp', 'humidity', 'descripcion', 'action'];
  dataSource = new MatTableDataSource();
  listCiudades: Ciudad[] = [];
  loading = true;
  ciudad: Ciudad;

  constructor(private serviceClima: ServicioClimaService) {

  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.getClima();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  getClima(): void {
    this.serviceClima.getClima().subscribe(data => {
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
      this.dataSource = new MatTableDataSource(this.listCiudades);
      this.serviceClima.setlistCiudades(this.listCiudades);
      this.dataSource.paginator = this.paginator;
      this.loading = false;
    });
  }


}

