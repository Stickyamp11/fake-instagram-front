import { AfterViewInit, booleanAttribute, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { OptionsModalComponent } from '../../modals/options-modal/options-modal.component';
import { SkeletonImageComponent } from '../../modals/skeleton-image/skeleton-image.component';
import { PseudoGlobalStateService } from '../../pseudo-global-state.service';
import { ImageDummyService } from '../../image-dummy.service';

@Component({
  selector: 'app-user-publication',
  standalone: true,
  imports: [OptionsModalComponent,SkeletonImageComponent],
  templateUrl: './user-publication.component.html',
  styleUrl: './user-publication.component.scss'
})
export class UserPublicationComponent implements AfterViewInit {
  @ViewChild(OptionsModalComponent) modal!: OptionsModalComponent;
  @Input({ transform: booleanAttribute }) isLast: boolean = false;
  @Input() observer: IntersectionObserver | undefined;
  @ViewChild('element') element!: ElementRef;

  imageUrl: string = "";
  publicationImageUrl: string = "";
  constructor(private pseudoGlobalStateService: PseudoGlobalStateService, private imageDummyService: ImageDummyService){
    this.imageUrl = this.imageDummyService.getFullPathToRandomUserImage();
    this.publicationImageUrl = this.imageDummyService.getFullPathToRandomPublicationImage();
  }

  ngAfterViewInit(){
    console.log(this.observer, "this is the observer");
    if(this.isLast == true) console.log(this.isLast,"this is last");
    if(this.isLast) this.observeLastElement();
  }
  observeLastElement() {
    this.pseudoGlobalStateService.clearAllObservedElements();
    console.log("observing", this.observer, this.element.nativeElement);
    this.observer?.observe(this.element.nativeElement);
    this.pseudoGlobalStateService.addObservedElement(this.element.nativeElement);
  }

  openOptions(){
    this.modal.openModal();
  }
}
