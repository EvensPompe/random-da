import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonHasardComponent } from './bouton-hasard.component';

describe('BoutonHasardComponent', () => {
  let component: BoutonHasardComponent;
  let fixture: ComponentFixture<BoutonHasardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonHasardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonHasardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
