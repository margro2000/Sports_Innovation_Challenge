import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialsBoxComponent } from './potentials-box.component';

describe('PotentialsBoxComponent', () => {
  let component: PotentialsBoxComponent;
  let fixture: ComponentFixture<PotentialsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
