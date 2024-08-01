import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-image.component.html',
  styleUrl: './skeleton-image.component.scss'
})
export class SkeletonImageComponent {
  @Input('imageUrl') imageUrl: string = "../../../assets/manu_cs21.jpg";

  @Input('placeholder-width') widthPH: string = "100%";
  @Input('placeholder-borderRadius') borderRadiusPH: string = "0px";
  @Input('placeholder-height') heightPH: string = "100%";

  @Input('img-width') widthI: string = "100%";
  @Input('img-borderRadius') borderRadiusI: string = "0px";
  @Input('img-height') heightI: string = "100%";

  isLoaded = false;
  onLoad(){
  this.isLoaded = true;
  }
}
