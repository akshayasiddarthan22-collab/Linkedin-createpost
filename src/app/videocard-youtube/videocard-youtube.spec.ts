import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardYoutube } from './videocard-youtube';

describe('VideocardYoutube', () => {
  let component: VideocardYoutube;
  let fixture: ComponentFixture<VideocardYoutube>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideocardYoutube]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideocardYoutube);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
