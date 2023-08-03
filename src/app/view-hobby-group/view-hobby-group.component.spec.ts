import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHobbyGroupComponent } from './view-hobby-group.component';

describe('ViewHobbyGroupComponent', () => {
  let component: ViewHobbyGroupComponent;
  let fixture: ComponentFixture<ViewHobbyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHobbyGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHobbyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
