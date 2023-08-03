import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHobbyGroupComponent } from './create-hobby-group.component';

describe('CreateHobbyGroupComponent', () => {
  let component: CreateHobbyGroupComponent;
  let fixture: ComponentFixture<CreateHobbyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHobbyGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHobbyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
