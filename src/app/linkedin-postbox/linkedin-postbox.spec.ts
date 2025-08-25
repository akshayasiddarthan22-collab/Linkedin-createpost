import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinPostbox } from './linkedin-postbox';

describe('LinkedinPostbox', () => {
  let component: LinkedinPostbox;
  let fixture: ComponentFixture<LinkedinPostbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedinPostbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinPostbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
