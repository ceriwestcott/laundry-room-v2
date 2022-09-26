import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserINputFormComponent } from './user-input-form.component';

describe('UserINputFormComponent', () => {
  let component: UserINputFormComponent;
  let fixture: ComponentFixture<UserINputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserINputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserINputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
