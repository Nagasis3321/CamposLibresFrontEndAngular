import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPelajeComponent } from './buscar-pelaje.component';

describe('BuscarPelajeComponent', () => {
  let component: BuscarPelajeComponent;
  let fixture: ComponentFixture<BuscarPelajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarPelajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarPelajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
