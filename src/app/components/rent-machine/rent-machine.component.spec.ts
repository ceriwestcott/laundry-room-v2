import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentMachineComponent } from './rent-machine.component';

describe('RentMachineComponent', () => {
  let component: RentMachineComponent;
  let fixture: ComponentFixture<RentMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
