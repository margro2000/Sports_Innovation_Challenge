import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionBoxComponent } from './caution-box.component';

describe('CautionBoxComponent', () => {
  let component: CautionBoxComponent;
  let fixture: ComponentFixture<CautionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CautionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CautionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
