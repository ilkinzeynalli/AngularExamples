import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText: string = ""): Product[] {
    if(filterText !== "")
      filterText = filterText.toLocaleLowerCase();

    return filterText ? value.filter((f:Product) => 
                                                      f.name?.
                                                      toLocaleLowerCase().
                                                      indexOf(filterText.toString()) !== -1
                                    ) : value;
  }
}
