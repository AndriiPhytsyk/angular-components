import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopPageComponent } from './components/top-page/top-page.component';
import { ComponentDocumentationComponent } from './pages/component-documentation/component-documentation.component';
import { OtherDocumentationComponent } from './pages/other-documentation/other-documentation.component';
import { ServicesDocumentationComponent } from './pages/services-documentation/services-documentation.component';
import { DirectivesDocumentationComponent } from './pages/directives-documentation/directives-documentation.component';
import { PipesDocumentationComponent } from './pages/pipes-documentation/pipes-documentation.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { CreditCardFormatterPipe } from './pipes/credit-card-formatter.pipe';
import { CreditCartInputComponent } from './components/credit-cart-input/credit-cart-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './components/linkedin-post/linkedin-post.component';
import { FlattenPipe } from './pipes/flatten.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { DebounceDirective } from './directives/debounce.directive';
import { QuoteComponent } from './components/quote/quote.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { FilterTermPipe } from './pipes/tranform.pipe';
import { RichTextViewerComponent } from './components/rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './components/debounce-search/debounce-search.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { PagingComponent } from './components/paging/paging.component';
import { TabComponent } from './components/tab/tab.component';
import { RippleDirective } from './directives/ripple.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortTableComponent } from './components/sort-table/sort-table.component';
import { ReactiveFormsEmailComponent } from './components/reactive-forms-email/reactive-forms-email.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { BannerCutOutComponent } from './components/banner-cut-out/banner-cut-out.component';
import { ScaleDirective } from './directives/scale.directive';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { PopupComponent } from './components/popup/popup.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CopyDirective } from './directives/copy.directive';
import { LazyLoadImageDirective } from './directives/lazy-load-image.directive';
import { FooterComponent } from './components/footer/footer.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { SocialMediaBarComponent } from './components/social-media-bar/social-media-bar.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { FieldsetToggleComponent } from './components/fieldset-toggle/fieldset-toggle.component';
import { PillComponent } from './components/pill/pill.component';
import { PillFiltersComponent } from './components/pill-filters/pill-filters.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PasswordComponent } from './components/password/password.component';
import { RichTextPipe } from './pipes/rich-text.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SortByKeyPipe } from './pipes/sort-by-key.pipe';
import { OverlayComponent } from './components/overlay/overlay.component';
import { HttpClientModule } from '@angular/common/http';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { NotificationModule } from './pages/demo/services';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
  MatNativeDateModule
} from '@angular/material/core';

const APP_DATE_FORMATS: MatDateFormats = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: {
    dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'long' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    TopPageComponent,
    ComponentDocumentationComponent,
    OtherDocumentationComponent,
    ServicesDocumentationComponent,
    DirectivesDocumentationComponent,
    PipesDocumentationComponent,
    TruncatePipe,
    LoaderComponent,
    CreditCardFormatterPipe,
    CreditCartInputComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    FlattenPipe,
    ModalComponent,
    DebounceDirective,
    QuoteComponent,
    ToggleComponent,
    FilterTermPipe,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    SimpleTableComponent,
    PagingComponent,
    TabComponent,
    RippleDirective,
    SortTableComponent,
    ReactiveFormsEmailComponent,
    RibbonComponent,
    ButtonToggleComponent,
    BannerCutOutComponent,
    ScaleDirective,
    SnackbarComponent,
    PopupComponent,
    CountdownTimerComponent,
    CopyDirective,
    LazyLoadImageDirective,
    FooterComponent,
    SkeletonLoaderComponent,
    SocialMediaBarComponent,
    BottomSheetComponent,
    FieldsetToggleComponent,
    PillComponent,
    PillFiltersComponent,
    NotFoundComponent,
    PasswordComponent,
    RichTextPipe,
    SortByPipe,
    SortByKeyPipe,
    OverlayComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NotificationModule.forRoot(),
    MatNativeDateModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
