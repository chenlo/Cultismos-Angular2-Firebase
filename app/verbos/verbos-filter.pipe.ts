import { Pipe, PipeTransform } from 'angular2/core';
import { IVerbo } from './verbo';

@Pipe ({
    name: 'verboFilter'
})

export class VerboFilterPipe implements PipeTransform {
        
    transform(value: IVerbo[], args: string[]): IVerbo[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((verbo: IVerbo) =>
            verbo.verbo.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}