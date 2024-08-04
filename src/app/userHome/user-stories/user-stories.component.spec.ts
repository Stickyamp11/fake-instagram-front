import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStoriesComponent } from './user-stories.component';
import { IndividualStoryComponent } from '../individual-story/individual-story.component';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';

describe('UserStoriesComponent', () => {
  let component: UserStoriesComponent;
  let fixture: ComponentFixture<UserStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, IndividualStoryComponent, UserStoriesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoriesComponent);
    component = fixture.componentInstance;
    component.userStories = new ElementRef({
      children: [{ offsetWidth: 100 }],
      offsetWidth: 300,
      scrollWidth: 500,
      scrollTo: jasmine.createSpy('scrollTo'),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly identify the first index', () => {
    component.currentIndex = 0;
    expect(component.isFirstIndex()).toBeTrue();
  });

  it('should correctly identify the last index', () => {
    component.currentIndex = 1;
    component.hiddenNumberOfItemsSig.update(() => 1);
    expect(component.isLastIndex()).toBeTrue();
  });

  it('should increment currentIndex on goToNextIcon when not last', () => {
    component.currentIndex = 0;
    component.hiddenNumberOfItemsSig.update(() => 1);
    component.goToNextIcon();
    expect(component.currentIndex).toBe(1);
  });

  it('should not increment currentIndex on goToNextIcon when last', () => {
    component.currentIndex = 1;
    component.hiddenNumberOfItemsSig.update(() => 1);
    component.goToNextIcon();
    expect(component.currentIndex).toBe(1);
  });

  it('should decrement currentIndex on goToPreviousIcon when not first', () => {
    component.currentIndex = 1;
    component.goToPreviousIcon();
    expect(component.currentIndex).toBe(0);
  });

  it('should not decrement currentIndex on goToPreviousIcon when first', () => {
    component.currentIndex = 0;
    component.goToPreviousIcon();
    expect(component.currentIndex).toBe(0);
  });
});