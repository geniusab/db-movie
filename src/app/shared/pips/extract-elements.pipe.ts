import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'extractElements'
})
export class ExtractElementsPipe implements PipeTransform {

    transform(data: Object[]): any {
        let list = '';
        // for(let i = 0; i < data.length; i++) {
        //   list += data[i]['name'] + ', ';
        // }
        data.forEach(item => {
            list += item['name'] + ', ';
        });
        return list.slice(0, -2);
    }
}

