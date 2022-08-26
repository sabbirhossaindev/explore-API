const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
/* 
{ id: 1, name: 'Gorib Aamir', job: 'actor' } // js
{"id":1,"name":"Gorib Aamir","job":"actor"} // JSON
*/
const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop); //JSON string a convert hove 
console.log(shopJSON); 
const shopObj = JSON.parse(shopJSON); // normal js object a convert hove 
console.log(shopObj)