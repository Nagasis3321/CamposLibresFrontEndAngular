import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDuenoComponent } from './buscar-dueno.component';

describe('BuscarDuenoComponent', () => {
  let component: BuscarDuenoComponent;
  let fixture: ComponentFixture<BuscarDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarDuenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
