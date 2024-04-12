import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarAnimalesComponent } from './borrar-animales.component';

describe('BorrarAnimalesComponent', () => {
  let component: BorrarAnimalesComponent;
  let fixture: ComponentFixture<BorrarAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrarAnimalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorrarAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
