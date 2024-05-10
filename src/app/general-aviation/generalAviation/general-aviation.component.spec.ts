import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAviationComponent } from './general-aviation.component';

describe('GeneralAviationComponent', () => {
  let component: GeneralAviationComponent;
  let fixture: ComponentFixture<GeneralAviationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralAviationComponent]
    });
    fixture = TestBed.createComponent(GeneralAviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
