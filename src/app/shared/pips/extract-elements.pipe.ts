import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'extractElements'
})
export class ExtractElementsPipe implements PipeTransform {

    transform(data: any[]): any {
        let list = '';
        data.forEach(item => {
            list += item['name'] + ', ';
        });
        return list.slice(0, -2);
    }
}

