import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyword: string): any {
     if (!field || !keyword){
      console.log(list);
      return list;
    }

    return list.filter(item => {
      let itemFilterValue = item[field].toUpperCase();
      return itemFilterValue.indexOf(keyword) >= 0;
    });
  }

}
