import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCiudadesComponent } from './list-ciudades.component';

describe('ListCiudadesComponent', () => {
  let component: ListCiudadesComponent;
  let fixture: ComponentFixture<ListCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
