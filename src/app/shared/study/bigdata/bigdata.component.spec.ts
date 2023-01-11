import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigdataComponent } from './bigdata.component';

describe('BigdataComponent', () => {
  let component: BigdataComponent;
  let fixture: ComponentFixture<BigdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
