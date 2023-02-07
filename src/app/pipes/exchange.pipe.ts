import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchange'
})
export class ExchangePipe implements PipeTransform {

  conversion: number = 3.4;

  transform(value: number, param?: string): number {
    if(param==='usd') {
      return Math.round(value/this.conversion*100)/100;
    }
    else {
      return Math.round(value*100)/100;
    }
  }
}
