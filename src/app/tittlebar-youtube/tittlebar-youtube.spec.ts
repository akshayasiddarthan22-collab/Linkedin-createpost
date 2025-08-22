import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TittlebarYoutube } from './tittlebar-youtube';

describe('TittlebarYoutube', () => {
  let component: TittlebarYoutube;
  let fixture: ComponentFixture<TittlebarYoutube>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TittlebarYoutube]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TittlebarYoutube);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
