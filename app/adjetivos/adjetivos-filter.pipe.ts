import { Pipe, PipeTransform } from 'angular2/core';
import { IAdjetivo } from './adjetivo';

@Pipe ({
    name: 'adjetivoFilter'
})

export class AdjetivoFilterPipe implements PipeTransform {
        
    transform(value: IAdjetivo[], args: string[]): IAdjetivo[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((adjetivo: IAdjetivo) =>
            adjetivo.adjetivo.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}