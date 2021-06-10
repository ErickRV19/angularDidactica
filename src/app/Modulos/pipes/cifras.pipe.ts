import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cifras'
})
export class CifrasPipe implements PipeTransform {

  transform(cifra: number){
    if(cifra < 10){
      return '0'+cifra
    }else{
      return cifra
    }
  }

}
