import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiniStoryComponent } from '../mini-story/mini-story.component';

@Component({
  selector: 'app-stories-page',
  standalone: true,
  imports: [MiniStoryComponent],
  templateUrl: './stories-page.component.html',
  styleUrl: './stories-page.component.scss'
})
export class StoriesPageComponent {
  username: string | null = null;
  storyId: string | null = null;
  private durationTime: number = 8;
  private intervalId: any;
  private startTime: number = 0;
  private elapsedTime: number = 0;
  private totalElapsedTime: number = 0;

  isPaused: boolean = true;
  private progressBar!: HTMLElement;

  private linkToNextStory: string = "/stories/fweewfwe/feefsef";
  private linkToPreviousStory: string = "/stories/fweewfwe/feefsef";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
      this.storyId = params.get('storyId');
      console.log(this.username);
      console.log(this.storyId)
    });
    this.intervalId = null;
    this.startTime = 0;
    this.elapsedTime = 0;
    this.totalElapsedTime = 0;
    this.progressBar = document.querySelector('.progress-bar-inner') as HTMLElement;
    this.resetProgress();
    this.startProgress();
  }

  startProgress(): void {
    if (this.isPaused) {
      this.resumeProgress();
      return;
    }
    else{
      this.pauseProgress();
    }
    this.elapsedTime = 0;
    this.updateProgress();
  }

  pauseProgress(): void {
    if (!this.isPaused) {
      this.isPaused = true;
      this.totalElapsedTime += this.elapsedTime;
      clearInterval(this.intervalId);
    }
  }

  resumeProgress(): void {
    if (this.isPaused) {
      this.isPaused = false;
      this.updateProgress();
    }
  }

  resetProgress(): void {
    clearInterval(this.intervalId);
    this.progressBar.style.width = '0%';
    this.startTime = Date.now();
    this.elapsedTime = 0;
    this.isPaused = false;
  }

  private updateProgress(): void {
    this.elapsedTime = 0;
    this.startTime = Date.now();
    const update = () => {
      if (this.isPaused) return;
      if(this.elapsedTime + this.totalElapsedTime > this.durationTime) return;

      const currentTime = Date.now();
      this.elapsedTime = (currentTime - this.startTime) / 1000; // tiempo en segundos
      const progress = Math.min(((this.elapsedTime + this.totalElapsedTime) / this.durationTime) * 100, 100);
      this.progressBar.style.width = `${progress}%`;

      if (progress < 100) {
        this.intervalId = requestAnimationFrame(update);
      }
      else{
        this.JumpToNextStory();
        return;
      }
    };

    this.intervalId = requestAnimationFrame(update);
  }

  JumpToNextStory(){
    this.router.navigate([this.linkToNextStory]).then(() => {
      window.location.reload();
    });
  }
  backToMenu(){
    this.router.navigate(['/home']);
  }
}
