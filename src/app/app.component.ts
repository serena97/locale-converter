import { Component } from '@angular/core';
import numeral from 'numeral';
import 'numeral/locales';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'locale-converter';
  inputAmount = '123,456'
  outputAmount = 123456
  locales = ['bg', 'de', 'en', 'es', 'fr', 'it', 'chs']
  selectedLocale = this.locales[0];


  onChangeAmount(event: Event) {
    const amt = (event.target as HTMLInputElement).value;
    this.convertAmt(this.selectedLocale, amt);
  }

  onChangeLocale(event: Event) {
    const locale = (event.target as HTMLInputElement).value;
    this.convertAmt(locale, this.inputAmount);
  }

  convertAmt(locale: string, inputAmount: string) {
    numeral.locale(locale);
    const num = numeral(inputAmount);
    this.outputAmount = num.value();
  }

}
