import {
  Directive,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective implements OnInit, OnDestroy {
  @Output() public debounceClick = new EventEmitter();
  public clicks = new Subject<void>();
  public subscription!: Subscription;

  ngOnInit() {
    const debounceTimeInMs = 500;
    this.subscription = this.clicks
      .pipe(debounceTime(debounceTimeInMs))
      .subscribe((value: any) => this.debounceClick.emit());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  private onClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }
}
