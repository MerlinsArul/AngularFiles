import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalComponent } from './digital.component';

describe('DigitalComponent', () => {
  let component: DigitalComponent;
  let fixture: ComponentFixture<DigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
