import { Component, ViewChild } from '@angular/core';
import { OptionsModalComponent } from '../../modals/options-modal/options-modal.component';
import { SkeletonImageComponent } from '../../modals/skeleton-image/skeleton-image.component';

@Component({
  selector: 'app-user-publication',
  standalone: true,
  imports: [OptionsModalComponent,SkeletonImageComponent],
  templateUrl: './user-publication.component.html',
  styleUrl: './user-publication.component.scss'
})
export class UserPublicationComponent {
  @ViewChild(OptionsModalComponent) modal!: OptionsModalComponent;

  openOptions(){
    this.modal.openModal();
  }
}
