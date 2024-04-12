import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarDuenoComponent } from './borrar-dueno.component';

describe('BorrarDuenoComponent', () => {
  let component: BorrarDuenoComponent;
  let fixture: ComponentFixture<BorrarDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrarDuenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorrarDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
