import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesViewboxComponent } from './profiles-viewbox.component';

describe('ProfilesViewboxComponent', () => {
  let component: ProfilesViewboxComponent;
  let fixture: ComponentFixture<ProfilesViewboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesViewboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesViewboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
