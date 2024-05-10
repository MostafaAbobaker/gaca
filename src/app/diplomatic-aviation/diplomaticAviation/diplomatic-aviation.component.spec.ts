import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaticAviationComponent } from './diplomatic-aviation.component';

describe('DiplomaticAviationComponent', () => {
  let component: DiplomaticAviationComponent;
  let fixture: ComponentFixture<DiplomaticAviationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiplomaticAviationComponent]
    });
    fixture = TestBed.createComponent(DiplomaticAviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
