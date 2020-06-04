import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificateurComponent } from './modificateur.component';

describe('ModificateurComponent', () => {
  let component: ModificateurComponent;
  let fixture: ComponentFixture<ModificateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
