import { Component, Input, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  @Input() public message = '';
  public isShown = false;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit() {
    this.snackbarService.snackbar$.subscribe(message => {
      this.message = message;
      this.show();
    });
  }

  public show() {
    this.isShown = true;

    const subscription = of(null)
      .pipe(delay(2900))
      .subscribe({
        complete: () => {
          this.isShown = false;
          subscription.unsubscribe();
        }
      });
  }
}
