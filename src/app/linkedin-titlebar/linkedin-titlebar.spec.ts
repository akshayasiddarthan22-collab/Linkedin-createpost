import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinTitlebar } from './linkedin-titlebar';

describe('LinkedinTitlebar', () => {
  let component: LinkedinTitlebar;
  let fixture: ComponentFixture<LinkedinTitlebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedinTitlebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinTitlebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
