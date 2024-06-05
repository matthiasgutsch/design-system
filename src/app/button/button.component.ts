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
export type DcuiButtonSize = 's' | 'm' | 'l';
export type DcuiButtonVariant = 'primary' | 'secondary' | 'text' | 'inline';
export type DcuiButtonIconPosition = 'before' | 'after';

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

      <span class="dc-button-label">
        <ng-content></ng-content>

        <ng-container *ngTemplateOutlet="content"></ng-container>
      </span>
      <div class="dc-button-icon-right" *ngIf="iconRight">
        <ng-container *ngTemplateOutlet="iconRight"></ng-container>
      </div>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./button.scss'],
  host: {
    class: 'dc-element',
  },
})
export class ButtonComponent implements AfterContentInit {
  @Input() buttonTitle: string | undefined;
  @Input() class: string | undefined;
  @Input() content: TemplateRef<any> | null = null;
  @Input() public size: DcuiButtonSize = 'm';
  @Input() public variant: DcuiButtonVariant = 'primary';
  @Input() public iconPosition: DcuiButtonIconPosition = 'before';

  @ContentChild('iconLeft') iconLeft!: TemplateRef<any>;
  @ContentChild('iconRight') iconRight!: TemplateRef<any>;
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
