import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPelajeComponent } from './borrar-pelaje.component';

describe('BorrarPelajeComponent', () => {
  let component: BorrarPelajeComponent;
  let fixture: ComponentFixture<BorrarPelajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrarPelajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorrarPelajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
