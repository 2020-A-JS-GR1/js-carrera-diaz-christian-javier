import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearUsuarioComponent } from './ruta-crear-usuario.component';

describe('RutaCrearUsuarioComponent', () => {
  let component: RutaCrearUsuarioComponent;
  let fixture: ComponentFixture<RutaCrearUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
