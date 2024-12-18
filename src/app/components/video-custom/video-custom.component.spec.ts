import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCustomComponent } from './video-custom.component';

describe('VideoCustomComponent', () => {
  let component: VideoCustomComponent;
  let fixture: ComponentFixture<VideoCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
