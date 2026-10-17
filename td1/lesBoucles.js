const fruitRouge = ['fraise', 'cerise', 'framboise', 'groseille'];
//for of
for (let fruit of fruitRouge) {
    console.log(`la ${fruit} c'est bon`);
}
//for each
fruitRouge.forEach(fruit => console.log(`la ${fruit} c'est bon`));
//mapping : retour un tb
const nombers=[12,3,4,10];
let double=nombers.map(n=>n*2);
console.log(double);
//retour un simple affichage
let d2=nombers.forEach(n=>console.log(n*2));
//les filters
let paires=nombers.filter(n=>n%2===0);
console.log(paires);
//destruburing
const [f1,f2,f3,f4]=fruitRouge;
console.log(f1);