import { Component, computed, ElementRef, Signal, signal, ViewChild, WritableSignal } from '@angular/core';
import { IndividualStoryComponent } from '../individual-story/individual-story.component';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-stories',
  standalone: true,
  imports: [IndividualStoryComponent, CommonModule],
  templateUrl: './user-stories.component.html',
  styleUrl: './user-stories.component.scss'
})
export class UserStoriesComponent {
  currentIndex: number = 0;
  windowSizeSig: WritableSignal<number> = signal(0);
  hiddenNumberOfItemsSig: WritableSignal<number> = signal(0);
  resizeSubscription$: Observable<number> = fromEvent(window, 'resize')
  .pipe(
    debounceTime(100),
    map((event: Event) => (event.target as Window).innerWidth),
    distinctUntilChanged()
  );

  @ViewChild('userStories') userStories!: ElementRef;
  
  ngOnInit(){
    this.resizeSubscription$.subscribe(value => {
      this.windowSizeSig.update(_ => value)
      this.hiddenNumberOfItemsSig.update(_ => this.getHiddenItems());
    })
  }
  ngAfterViewInit(){
    this.windowSizeSig.update(_ => window.innerWidth);
    this.hiddenNumberOfItemsSig.update(_ => this.getHiddenItems());
  }

  getHiddenItems(): number{
    const userStoriesEl = this.userStories.nativeElement;
      const slideWidth = userStoriesEl.children[0].offsetWidth;
      const visibleWidth = userStoriesEl.offsetWidth;
      const totalWidth = userStoriesEl.scrollWidth;
      const maxScrollPosition = totalWidth - visibleWidth;
      return Math.ceil(maxScrollPosition / slideWidth);
  }

  isFirstIndex(): boolean{
    return this.currentIndex == 0;
  }
  isLastIndex(): boolean{
    return this.currentIndex == this.hiddenNumberOfItemsSig();
  }

  goToNextIcon(){
    if(!(this.currentIndex == this.hiddenNumberOfItemsSig())){
      this.currentIndex = this.currentIndex + 1;
      this.scrollToCurrentIcon();
    }
  }
  goToPreviousIcon(){
    if(!(this.currentIndex == 0))
      {
        this.currentIndex = this.currentIndex - 1;
        this.scrollToCurrentIcon();
      }
  }

  scrollToCurrentIcon() {
    const userStoriesEl = this.userStories.nativeElement;
    const slideWidth = userStoriesEl.children[0].offsetWidth;
    const visibleWidth = userStoriesEl.offsetWidth;
    const totalWidth = userStoriesEl.scrollWidth;

    const maxScrollPosition = totalWidth - visibleWidth;

    let newScrollPosition = slideWidth * this.currentIndex;
    
    if (newScrollPosition > maxScrollPosition) {
        newScrollPosition = maxScrollPosition;

    }
    userStoriesEl.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  }

}
