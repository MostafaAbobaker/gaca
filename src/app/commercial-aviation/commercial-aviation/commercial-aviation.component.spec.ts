import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialAviationComponent } from './commercial-aviation.component';

describe('CommercialAviationComponent', () => {
  let component: CommercialAviationComponent;
  let fixture: ComponentFixture<CommercialAviationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommercialAviationComponent]
    });
    fixture = TestBed.createComponent(CommercialAviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
