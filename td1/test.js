const double=(a)=>a*2;
console.log(double(2));

const calculer=(prix,taux)=>prix*taux;
const calcule2=(prix)=>{
    if(prix>1000){
        return prix*0.1;
    }else{
        return prix*0.05;
    }
}
//autre facon d'écrire la fonction calcule2
const calcule3=(prix)=>prix>1000?prix*0.1:prix*0.05;
console.log(calcule3(150));
console.log(calcule3(50));