import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  NgModule,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'dc-message',
  template: `
    <div class="dc-message" [class]="color" [attr.data-pc-name]="'message'">
      <div class="dc-message-header" *ngIf="header">
        <ng-container *ngTemplateOutlet="header"></ng-container>
      </div>
      <div class="dc-message-content">
        <div class="dc-message-header" *ngIf="cardTitle">
          {{ cardTitle }}
        </div>
        <ng-content></ng-content>

        <ng-container *ngTemplateOutlet="content"></ng-container>
      </div>
      <div class="dc-message-footer" *ngIf="footer">
        <ng-container *ngTemplateOutlet="footer"></ng-container>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./message.css'],
  host: {
    '[class.dcui-message]': 'true',
  },
})
export class MessageComponent implements AfterContentInit {
  @Input() cardTitle: string | undefined;
  @Input() class: string | undefined;
  @Input() content: TemplateRef<any> | null = null;
  @Input() color: string | undefined;

  @ContentChild('Header') headerFacet: TemplateRef<any> | any;
  @ContentChild('Footer') footerFacet: TemplateRef<any> | any;

  @ContentChild('header') header!: TemplateRef<any>;
  @ContentChild('footer') footer!: TemplateRef<any>;
  @ContentChild('content') titleTemplate!: TemplateRef<any>;

  @HostBinding('class.dcui-message--color-success')
  public get isColorSuccess() {
    return this.color === 'success';
  }

  @HostBinding('class.dcui-message--color-alert') public get isColorAlert() {
    return this.color === 'alert';
  }

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {}
}

@NgModule({
  imports: [CommonModule],
})
export class MessageModule {}
