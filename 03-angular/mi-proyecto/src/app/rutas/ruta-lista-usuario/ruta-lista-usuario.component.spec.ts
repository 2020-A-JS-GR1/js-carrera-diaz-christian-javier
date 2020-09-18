import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaUsuarioComponent } from './ruta-lista-usuario.component';

describe('RutaListaUsuarioComponent', () => {
  let component: RutaListaUsuarioComponent;
  let fixture: ComponentFixture<RutaListaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
