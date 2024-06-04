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
  selector: 'dc-button',
  template: `
    <button class="dc-button" [class]="class">
      <div class="dc-button-icon-left" *ngIf="iconLeft">
        <ng-container *ngTemplateOutlet="iconLeft"></ng-container>
      </div>

      <div class="dc-button-label" *ngIf="buttonTitle">
          {{ buttonTitle }}
        </div>

        <div class="dc-button-label">
        <ng-content></ng-content>

        <ng-container *ngTemplateOutlet="content"></ng-container>

      </div>
      <div class="dc-button-icon-right" *ngIf="iconRight">
        <ng-container *ngTemplateOutlet="iconRight"></ng-container>
      </div>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./button.css'],
  host: {
    class: 'dc-element',
  },
})
export class ButtonComponent implements AfterContentInit {
    @Input() buttonTitle: string | undefined;
    @Input() class: string | undefined;
    @Input() content: TemplateRef<any> | null = null;
  
  
    @ContentChild('iconLeft')  iconLeft!: TemplateRef<any>;
    @ContentChild('iconRight')  iconRight!: TemplateRef<any>;
    @ContentChild('content') titleTemplate!: TemplateRef<any>;

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
