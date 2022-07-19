import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent {
  @Input() public baseHref = 'https://www.twitter.com/AndrijFicik';
  @Input() public hashTags = [
    'FytsykAndrii',
    'Javascript',
    'Typescript',
    'Angular'
  ];

  constructor(private titleService: Title) {}

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()} and become a coding God!!!`
    );
    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');
    return `https://www.twitter.com/intent/tweet?hashtags=${encodeURIComponent(
      hashTags
    )}&url=${route}&text=`;
  }
}
