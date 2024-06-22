import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'searchPipe',
    pure: false,
})
export class SearchPipe implements PipeTransform {
    transform(value: any, args: any): any {
        if (!args) return value;

        return value.filter((val: any) => {
            return (
                val.name.toLowerCase().includes(args) ||
                val.email.toLowerCase().includes(args) ||
                val.phoneNo.toLowerCase().includes(args) ||
                val.role.toLowerCase().includes(args)
            );
        })
    }
}