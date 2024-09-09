import { OverlayContainer } from '@angular/cdk/overlay';
import { Directive, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';

@Directive({
  selector: '[customOverlayContainer]',
})
export class CustomOverlayContainerDirective extends OverlayContainer {
  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) document: Document,
    platform: Platform
  ) {
    super(document, platform);
  }

  protected override _createContainer(): void {
    const container = this._document.createElement('div');
    container.classList.add('cdk-overlay-container');
    this.elementRef.nativeElement.appendChild(container);
    this._containerElement = container;
  }
}
