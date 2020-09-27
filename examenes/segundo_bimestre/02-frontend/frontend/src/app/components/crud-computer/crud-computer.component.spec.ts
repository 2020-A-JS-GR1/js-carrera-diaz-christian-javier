import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComputerComponent } from './crud-computer.component';

describe('CrudComputerComponent', () => {
  let component: CrudComputerComponent;
  let fixture: ComponentFixture<CrudComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudComputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
