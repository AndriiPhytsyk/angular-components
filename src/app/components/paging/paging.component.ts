import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {
  @Input() public totalItems = 1;
  @Input() public pagesSize = 25;
  @Input() public currentPage = 1;
  @Input() public step = 2;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  public get totalPages(): number {
    return Math.ceil(this.totalItems || 1) / (this.pagesSize || 1);
  }

  public get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  public isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  public isNextDisabled(): boolean {
    return this.currentPage + this.step > this.totalPages;
  }

  public isPreviousDisabled(): boolean {
    return this.currentPage - this.step < 1;
  }

  public get pages(): number[] {
    const pages = [];

    if (this.currentPage > 1) {
      pages.push(this.currentPage - 1);
    }

    pages.push(this.currentPage);

    if (this.currentPage < this.totalPages) {
      pages.push(this.currentPage + 1);
    }

    if (this.currentPage + 1 < this.totalPages) {
      pages.push(this.currentPage + 2);
    }

    if (this.currentPage + 1 < this.totalPages && this.currentPage === 1) {
      pages.push(this.currentPage + 3);
    }

    return pages;
  }

  public setPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }
}
