import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosClientePage } from './datos-cliente.page';

describe('DatosClientePage', () => {
  let component: DatosClientePage;
  let fixture: ComponentFixture<DatosClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
