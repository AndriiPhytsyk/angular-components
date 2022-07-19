import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './loader.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() public loading = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;
  public loadingText = 'Loading';

  ngOnInit() {
    if (this.loaderType === LoaderType.Loading) {
      this.setLoadingText();
    }
  }

  private setLoadingText() {
    let dots = '';
    setInterval(() => {
      dots += '.';

      if (dots.length === 1) {
        this.loadingText = 'Loading.';
      } else if (dots.length === 2) {
        this.loadingText = 'Loading..';
      } else if (dots.length === 3) {
        this.loadingText = 'Loading...';
        dots = '';
      }
    }, 500);
  }
}
