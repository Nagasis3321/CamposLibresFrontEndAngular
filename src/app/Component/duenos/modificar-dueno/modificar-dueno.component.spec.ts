import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDuenoComponent } from './modificar-dueno.component';

describe('ModificarDuenoComponent', () => {
  let component: ModificarDuenoComponent;
  let fixture: ComponentFixture<ModificarDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarDuenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
