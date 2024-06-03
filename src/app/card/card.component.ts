import { CommonModule } from '@angular/common';
import {
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
  selector: 'p-card',
  template: `
    <div class="p-card" [class]="class">
      <div class="p-card-header" *ngIf="header">
        <ng-container *ngTemplateOutlet="header"></ng-container>
      </div>
      <div class="p-card-content">
        <div class="p-card-header" *ngIf="cardTitle">
          {{ cardTitle }}
        </div>

        <ng-content></ng-content>
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </div>
      <div class="p-card-footer" *ngIf="footer">
        <ng-container *ngTemplateOutlet="footer"></ng-container>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./card.css'],
  host: {
    class: 'p-element',
  },
})
export class Card {
  @Input() cardTitle: string | undefined;
  @Input() class: string | undefined;

  @ContentChild('header') header!: TemplateRef<any>;
  @ContentChild('content') content!: TemplateRef<any>;
  @ContentChild('footer') footer!: TemplateRef<any>;
  @ContentChild('content') titleTemplate!: TemplateRef<any>;

  constructor(private el: ElementRef) {}
}

@NgModule({
  imports: [CommonModule],
})
export class CardModule {}
