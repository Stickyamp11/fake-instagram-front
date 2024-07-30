import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniStoryComponent } from './mini-story.component';

describe('MiniStoryComponent', () => {
  let component: MiniStoryComponent;
  let fixture: ComponentFixture<MiniStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
