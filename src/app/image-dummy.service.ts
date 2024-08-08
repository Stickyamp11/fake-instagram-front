import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDummyService {

  constructor() { }

  getRandomNumberBetween(x: number, y: number): number {
    return Math.floor(Math.random() * (y - x + 1)) + x;
  }

  public getFullPathToRandomUserImage(): string {
    return  "assets/profile" + this.getRandomNumberBetween(1,20) + ".png";
  }

  public getFullPathToRandomPublicationImage(): string {
    return  "assets/content_" + this.getRandomNumberBetween(1,12) + ".jpg";
  }
}
