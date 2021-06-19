export class Expenses {
    id: number;
    description: string = '';
    sum: number;
    date: number;
    type: Type;
    //comment: string = '';
  
  }

   export enum Type
    {
        food,
        utilities,
        transportation,
        outing,
        groceries,
        clothes,
        electronics,
        other
    }
    export const TYPE = ['food','utilities','transportation','outing','groceries','clothes','electronics','other'];