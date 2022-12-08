import { Component, Input, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-br' }],
})
export class ParentDataComponent {
  @Input() currentData!: Date;
  @Input() appVersion!: string;
}
