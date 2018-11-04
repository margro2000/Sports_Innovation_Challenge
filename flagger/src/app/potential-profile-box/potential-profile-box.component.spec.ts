import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialProfileBoxComponent } from './potential-profile-box.component';

describe('PotentialProfileBoxComponent', () => {
  let component: PotentialProfileBoxComponent;
  let fixture: ComponentFixture<PotentialProfileBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialProfileBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialProfileBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
