import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonesearch'
})
export class PhonesearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;
    
    return value.filter((item: any)=>{
       return JSON.stringify(item).toLocaleLowerCase().includes(args);
    
  })
  }

}
