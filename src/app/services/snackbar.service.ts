import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  public snackbar$ = new Subject<string>();

  callSnackbar(message: string) {
    this.snackbar$.next(message);
  }
}
