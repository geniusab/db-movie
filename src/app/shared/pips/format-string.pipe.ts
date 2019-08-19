import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatString'
})
export class FormatStringPipe implements PipeTransform {

    transform(value: string): string {
        if (value.length > 250) {
            return value.slice(0, 250) + '...';
        } else {
            return value;
        }
    }

}
