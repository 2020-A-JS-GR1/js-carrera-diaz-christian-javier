import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPeliculaComponent } from './carta-pelicula.component';

describe('CartaPeliculaComponent', () => {
  let component: CartaPeliculaComponent;
  let fixture: ComponentFixture<CartaPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
