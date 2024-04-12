import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPelaje',
  standalone: true,
})
export class FilterPelajePipe implements PipeTransform {
  transform(items: any[], filter: any): any[] {
    if (!items || !filter) {
      return items;
    }

    return items.filter((item) => this.applyFilter(item, filter));
  }
  private applyFilter(item: any, filter: any): boolean {
    for (const key in filter) {
      if (filter.hasOwnProperty(key)) {
        const itemValue = item[key].toString().toLowerCase();
        const filterValue = filter[key].toString().toLowerCase();

        if (itemValue.indexOf(filterValue) === -1) {
          return false;
        }
      }
    }
    return true;
  }
}
