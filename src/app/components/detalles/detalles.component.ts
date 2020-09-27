import { Component, AfterContentInit,DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ciudad } from 'src/app/models/Ciudad';
import { ServicioClimaService } from 'src/app/services/servicio-clima.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  id:string;
  ciudadSeleccionda:Ciudad;
  loading=true;
  listCiudades: any[]=[];
  
  constructor(private aRoute:ActivatedRoute ,private servicesClima: ServicioClimaService) { 
    this.id= this.aRoute.snapshot.paramMap.get('id');
    
  }
 
 

  ngOnInit(): void {
    this.getCiudad();
    
   
  }

  getCiudad():void{
       this.listCiudades=this.servicesClima.getlistCiudades();
       this.ciudadSeleccionda=this.servicesClima.filtrarCiudadPorId(this.id);
       
       if(this.ciudadSeleccionda === undefined){
              
               alert("error al cargar los datos");
       }else{
            this.loading=false;
       }
     
  }

}
