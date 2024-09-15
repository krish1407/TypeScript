import { Invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplate.js";
import { payment } from "./classes/payments.js"
import { HasFormatter } from "./interfaces/HasFormatter.js";


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul= document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener('submit',(event:Event) => {
    event.preventDefault();

    let values : [string,string,number];
    values = [toFrom.value,details.value,amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value==='invoice'){
        doc = new Invoice(...values);
    }
    else{
        doc = new payment(...values);
    }

    list.render(doc,type.value,'end');
});

