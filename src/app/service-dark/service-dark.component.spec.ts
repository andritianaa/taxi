import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDarkComponent } from './service-dark.component';

describe('ServiceDarkComponent', () => {
  let component: ServiceDarkComponent;
  let fixture: ComponentFixture<ServiceDarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDarkComponent]
    });
    fixture = TestBed.createComponent(ServiceDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
