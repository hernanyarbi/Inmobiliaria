import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesComponent } from './propiedades.component';

describe('PropiedadesComponent', () => {
  let component: PropiedadesComponent;
  let fixture: ComponentFixture<PropiedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});