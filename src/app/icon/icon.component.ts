import { CommonModule } from '@angular/common';
import {
    AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  NgModule,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'dc-icon',
  template: `
      <svg fill="#000000"  [class]="class" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g><path d="M15,6V1.76l-1.7,1.7A7,7,0,1,0,14.92,9H13.51a5.63,5.63,0,1,1-1.2-4.55L10.76,6Z"/></g>
      </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./icon.scss'],
  host: {
    class: 'dc-element',
  },
})
export class IconComponent implements AfterContentInit {
    @Input() buttonTitle: string | undefined;
    @Input() class: string | undefined;
    @Input() content: TemplateRef<any> | null = null;
  
    @ContentChild('iconLeft')  headerFacet: TemplateRef<any> | any;
    @ContentChild('iconLeft')  iconLeft!: TemplateRef<any>;
    @ContentChild('iconRight')  iconRight!: TemplateRef<any>;

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {


  }

  getBlockableElement(): HTMLElement {
    return this.el.nativeElement.children[0];
}
}

@NgModule({
  imports: [CommonModule],
})
export class CardModule {}
