import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { Ciudad } from '../models/Ciudad';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioClimaService {
  url = 'https://ws.smn.gob.ar/map_items/weather';
  listCiudades: Ciudad[] = [];

  constructor(private http: HttpClient) {

  }

  getClima(): Observable<any> {

    return this.http.get<any>(this.url);
  }

  setlistCiudades(list: Ciudad[]) {
    this.listCiudades = list;
  }

  getlistCiudades(): Ciudad[] {

    return this.listCiudades;
  }

  filtrarCiudadPorId(name: string): Ciudad {
    return this.listCiudades.find(item => item.name === name);
  };



}




