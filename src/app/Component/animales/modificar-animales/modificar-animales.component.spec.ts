import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAnimalesComponent } from './modificar-animales.component';

describe('ModificarAnimalesComponent', () => {
  let component: ModificarAnimalesComponent;
  let fixture: ComponentFixture<ModificarAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarAnimalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
