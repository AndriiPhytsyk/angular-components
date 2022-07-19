import { Component, Input } from '@angular/core';

// TODO hover on stars and select value by clicking
@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() public rating = 5;

  public get fullStars(): number[] {
    const totalFullStart = Math.floor(this.rating);
    return Array(totalFullStart).fill(0);
  }

  public get hasHalfStart() {
    const hasHalfStar =
      this.rating - Math.floor(this.rating) >= 0.5 && this.rating !== 5;
    return hasHalfStar;
  }

  public get emptyStars() {
    const highestRate = 5;
    const emptyStars = Math.floor(highestRate - this.rating);
    return Array(emptyStars).fill(0);
  }
}
