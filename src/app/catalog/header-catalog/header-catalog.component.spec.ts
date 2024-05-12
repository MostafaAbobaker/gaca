import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCatalogComponent } from './header-catalog.component';

describe('HeaderCatalogComponent', () => {
  let component: HeaderCatalogComponent;
  let fixture: ComponentFixture<HeaderCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCatalogComponent]
    });
    fixture = TestBed.createComponent(HeaderCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
