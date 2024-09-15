// create a container with the HTML UL : unorderd list 
// Type assertion to ensure that ulElement is treated as an HTMLUListElement
export class listTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        // create a html list element
        const li = document.createElement('li');
        // create a html geader element
        const h4 = document.createElement('h4');
        // Take the input of the input type : Invoice/ Payment as heading
        h4.innerText = heading;
        // append to the list
        li.append(h4);
        const p = document.createElement('p');
        // Take the input of the input type : string text from the invoice/payment CLASS
        p.innerText = item.format();
        // append to the list
        li.append(p);
        // based on the start | end input, append or prepend the list. Can be viewed on the web page
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
