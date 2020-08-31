import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmusPlacementComponent } from './capmus-placement.component';

describe('CapmusPlacementComponent', () => {
  let component: CapmusPlacementComponent;
  let fixture: ComponentFixture<CapmusPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapmusPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapmusPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
