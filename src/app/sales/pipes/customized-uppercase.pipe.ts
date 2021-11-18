import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customizedUppercase'
})
export class CustomizedUppercase implements PipeTransform {

    transform(value:string, uppercase:boolean = true):string {

        return (uppercase) ? value.toUpperCase() : value.toLowerCase();

    }

}