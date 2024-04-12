import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPelajeComponent } from './modificar-pelaje.component';

describe('ModificarPelajeComponent', () => {
  let component: ModificarPelajeComponent;
  let fixture: ComponentFixture<ModificarPelajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarPelajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarPelajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
