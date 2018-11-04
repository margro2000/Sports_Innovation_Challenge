import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitProfileBoxComponent } from './twit-profile-box.component';

describe('TwitProfileBoxComponent', () => {
  let component: TwitProfileBoxComponent;
  let fixture: ComponentFixture<TwitProfileBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitProfileBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitProfileBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
