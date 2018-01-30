import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeOverlayComponent } from './landscape-overlay.component';

describe('LandscapeOverlayComponent', () => {
  let component: LandscapeOverlayComponent;
  let fixture: ComponentFixture<LandscapeOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandscapeOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
