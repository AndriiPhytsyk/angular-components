import { Component, OnInit } from '@angular/core';
import { AccordionItem } from '../../components/accordion/accordion-item.interface';
import { LoaderType } from '../../components/loader/loader.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabItem } from '../../components/tab/tab.model';
import { RibbonType } from '../../components/ribbon/ribbon.type';
import { RibbonLocation } from '../../components/ribbon/ribbon-location.enum';
import { ButtonMeta } from '../../components/button-toggle/button-meta.model';
import { slideRightAnimation } from '../other-documentation/animations/slide-right.animation';
import { SocialMediaIcon } from '../../components/social-media-bar/models/social-media-icon.interface';
import { SocialMedia } from '../../components/social-media-bar/models/social-media.enum';
import { PillType } from '../../components/pill/pill-type.enum';

type RibbonStyle = {
  [key: string]: string;
};

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
  animations: [slideRightAnimation]
})
export class ComponentDocumentationComponent implements OnInit {
  // eslint-disable-next-line no-magic-numbers
  public progressValue = 25;
  public loaderType = LoaderType.Loading;

  public socialMedia: SocialMediaIcon[] = [
    {
      href: 'https://www.facebook.com',
      type: SocialMedia.Facebook
    },
    {
      href: 'https://www.instagram.com',
      type: SocialMedia.Instagram
    },
    {
      href: 'https://www.linkedin.com',
      type: SocialMedia.LinkedIn
    },
    { href: 'https://twitter.com', type: SocialMedia.Twitter },
    {
      href: 'https://www.YouTube.com',
      type: SocialMedia.YouTube
    }
  ];

  public isShownOverlay = false;

  PillType = PillType;

  public accordionItems: AccordionItem[] = [
    {
      title: 'Test title 1',
      content:
        'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
      isExpanded: false
    },
    {
      title: 'Test title 2',
      content: 'Test content 2',
      isExpanded: false
    }
  ];

  public tableData = [
    { name: 'Andrii', lastName: 'Fytsyk', date: '10.12.1994' },
    { name: 'Serhii', lastName: 'Ivanenko', date: '12.03.1992' },
    { name: 'Andrii', lastName: 'Fytsyk', date: '23.18.2001' }
  ];

  toggleValue = false;

  public loaded = false;

  public form!: FormGroup;

  tabSelectedIndex = 0;

  tabsItems: TabItem[] = [
    { title: 'Tab 1', isSelected: true },
    { title: 'Tab 2', isSelected: false }
  ];

  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle: RibbonStyle = {
    type: RibbonType.Info,
    location: RibbonLocation.TopLeft as string
  };

  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' })
  ];

  public multipleSelection = false;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      toggle: this.fb.control(false)
    });

    this.form.valueChanges.subscribe(value => console.log(value));
  }

  searchUpdate(e: string) {
    console.log(e);
  }

  changeRibbonStyle(
    style: keyof RibbonStyle,
    value: RibbonLocation | RibbonType
  ) {
    this.ribbonStyle[style] = value;
  }

  selectionChange(selection: ButtonMeta[]) {
    console.log(selection);
  }

  toggleMultipleSelection(b: boolean) {
    this.multipleSelection = b;
  }

  selectedPills(selected: any) {
    console.log(selected);
  }
}
