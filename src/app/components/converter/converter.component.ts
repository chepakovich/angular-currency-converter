import { Component, OnInit, Input } from '@angular/core';
import { ForexService } from '../../services/forex.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  // Initial data is fetched once by parent component so as not to send 3 API calls to server
  @Input() raw;
  rates;
  currencies: string[] = [];
  currency1 = 'USD';
  currency2 = 'USD';
  amount1;
  amount2;
  currentExchangeRate = 1;

  constructor(private forex: ForexService) { }

  ngOnInit() {
    // Subscribe to observable passed via Input() variable, parse data
    this.raw = this.forex.data; 
    this.raw.subscribe(
      data => {
        this.parseData(data);  
      },
      err => {
        console.log('An error has occurred, please try again.');
      }
    );
  }


  parseData(data) {
    // Add initial base currency to currencies list since API omits whatever the base is
    this.currencies.push(data.base);
    // Parsing object keys to currencies array
    Object.keys(data.rates).forEach(curr => this.currencies.push(curr));
    this.rates = data.rates;
  }

  changeBaseAmount() {
    // Ignore if user clears field
    if (this.amount1 !== null) {
      this.calculateConverted();
    }
  }

  // Calls API setting new base currency, parses & overwrites data, updates exchange rate
  changeBaseCurrency() {
    this.forex.getNewBase(this.currency1).subscribe(raw => {
      this.parseData(raw);
      this.currentExchangeRate = this.rates[this.currency2];
      this.calculateConverted();
    },
    err => {
      console.log('An error has occurred, please try again');
    });
  }

  // Separated into two change currency methods since changing
  // the converted currency doesn't require an API call
  changeConvertedCurrency() {
    if (this.currency1 === this.currency2) {
      this.currentExchangeRate = 1;
    } else {
      this.currentExchangeRate = this.rates[this.currency2];
    }
    this.calculateConverted();
  }

  // Two methods below to calculate currency values based on their exchange rate.
  calculateBase() {
    if (this.amount1 !== null && this.amount2 !== null) {
      this.amount1 = this.amount2 / this.currentExchangeRate;
    }
  }

  calculateConverted() {
    if (this.amount1 !== null && this.amount2 !== null) {
      this.amount2 = this.amount1 * this.currentExchangeRate;
    }
  }

}

