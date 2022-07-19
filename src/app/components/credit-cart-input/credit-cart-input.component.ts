import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-cart-input',
  templateUrl: './credit-cart-input.component.html',
  styleUrls: ['./credit-cart-input.component.scss']
})
export class CreditCartInputComponent implements OnInit {
  @Input() public creditCardNumber = '';

  private readonly = false;

  public get isReadonly() {
    return this.readonly;
  }

  @Input() set isReadonly(value: boolean) {
    this.creditCardNumber = value
      ? this.formatReadOnlyCCNum(this.creditCardNumber)
      : this.creditCardNumber;
    this.readonly = value;
  }

  ngOnInit() {
    this.formatReadOnlyCCNum(this.creditCardNumber);
  }

  private formatReadOnlyCCNum(ccNum: string): string {
    console.log(ccNum);
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const isLast4Shown = parts.map((part, index) => {
      // eslint-disable-next-line no-magic-numbers
      if (index !== parts.length - 1) {
        return part;
      }
      return 'xxxx';
    });

    return isLast4Shown.join('-');
  }
}
