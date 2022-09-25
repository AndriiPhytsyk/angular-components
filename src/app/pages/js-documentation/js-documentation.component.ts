import { Component, OnInit } from '@angular/core';

interface IObj {
  property1: string;
  property2: string;
}

interface IObjExt {
  property3: string;
}

@Component({
  selector: 'app-js-documentation',
  templateUrl: './js-documentation.component.html',
  styleUrls: ['./js-documentation.component.scss']
})
export class JsDocumentationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const obj: IObj = {
      property1: '1',
      property2: '2'
    };

    const obj2 = { ...obj, property3: '3' };
  }
}
