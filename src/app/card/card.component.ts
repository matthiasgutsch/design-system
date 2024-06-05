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
  selector: 'dc-card',
  template: `
    <div class="dc-card" [class]="class" [attr.data-pc-name]="'card'">
      <div class="dc-card-header" *ngIf="header">
        <ng-container *ngTemplateOutlet="header"></ng-container>
      </div>

      <div class="dc-card-header" *ngIf="cardTitle">
          {{ cardTitle }}
        </div>

        <div class="dc-card-content">
        
 
        <ng-content></ng-content>

        <ng-container *ngTemplateOutlet="content"></ng-container>

      </div>
      <div class="dc-card-footer" *ngIf="footer">
        <ng-container *ngTemplateOutlet="footer"></ng-container>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./card.css'],
  host: {
    class: 'dc-element',
  },
})
export class CardComponent implements AfterContentInit {
  @Input() cardTitle: string | undefined;
  @Input() class: string | undefined;
  @Input() content: TemplateRef<any> | null = null;
  @ContentChild('Header')  headerFacet: TemplateRef<any> | any;
  @ContentChild('Footer')  footerFacet: TemplateRef<any> | any;
  @ContentChild('header')  header!: TemplateRef<any>;
  @ContentChild('footer')  footer!: TemplateRef<any>;
  @ContentChild('content') titleTemplate!: TemplateRef<any>;
  
  constructor(private el: ElementRef) {}

  ngAfterContentInit() {}

  getBlockableElement(): HTMLElement {
    return this.el.nativeElement.children[0];
  }
}

@NgModule({
  imports: [CommonModule],
})

export class CardModule {}
