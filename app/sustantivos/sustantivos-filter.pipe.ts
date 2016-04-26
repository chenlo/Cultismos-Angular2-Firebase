import { Pipe, PipeTransform } from 'angular2/core';
import { ISustantivo } from './sustantivo';

@Pipe ({
    name: 'sustantivoFilter'
})

export class SustantivoFilterPipe implements PipeTransform {
        
    transform(value: ISustantivo[], args: string[]): ISustantivo[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((sustantivo: ISustantivo) =>
            sustantivo.sustantivo.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}