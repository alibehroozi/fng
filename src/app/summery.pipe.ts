import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summery'
})

export class SummeryPipe implements PipeTransform{
    transform(value: number, limit: number) {
        return 's';
    }
}