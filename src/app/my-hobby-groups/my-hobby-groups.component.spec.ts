import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHobbyGroupsComponent } from './my-hobby-groups.component';

describe('MyHobbyGroupsComponent', () => {
  let component: MyHobbyGroupsComponent;
  let fixture: ComponentFixture<MyHobbyGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHobbyGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHobbyGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
