import { Pipe, PipeTransform } from 'angular2/core';
import { ICultismo } from './cultismo';

@Pipe ({
    name: 'cultismoFilter'
})

export class CultismoFilterPipe implements PipeTransform {
        
    transform(value: ICultismo[], args: string[]): ICultismo[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((cultismo: ICultismo) =>
            cultismo.cultismo.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}