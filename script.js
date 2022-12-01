const idadeuser = +(prompt("informe sua idade"));
//USABNDO O ANINHAMENO 
console.log("usando aninhamento:");
if(idadeuser >=13){
    if(idadeuser<=17){
        console.log("Seu dependente ja pode ter um catão de credito vinculado ao seu ");  
       
    }
    else{
        console.log("consulte outras possibilidades do Lubank");
    }

}else{console.log("consulte outras possibilidades do Lubank")};


//USANDO OS OPERADORES LOGICOS
console.log("usando operadores logicos:");
if(idadeuser >=13 && idadeuser <=17){
    console.log("Seu dependente ja pode ter um catão de credito vinculado ao seu ");
}else{
    console.log("consulte outras possibilidades do Lubank");
}

//USANDO O IF TERNARIO
console.log("usando o if ternario:");
console.log(idadeuser===13?"A idade do dependente é 13 e já pode ter um cartão":"Verifique as opções possiveis");


//USANDO O SWITCH-CASE

let escolhaUser = +(prompt(`Escolha um cartão
1 - Fácil
2 - Black
3 - Platinum
4 - Master Gold`))
let cartao
switch (escolhaUser) {
    case 1:
        cartao ="Facil"      
        break;
    case 2:
        cartao = "Black"
        break
    case 3:
        cartao = "Platimun"
        break
    case 4:
        cartao = "Master Gold"
        break
    default:
        cartao = "Escolha uma das quatro opções disponiveis"
        break;
}
console.log("Cartão", cartao)

let div = +(prompt("digite um numero"))

if (div %2 ===0){
    console.log("esse numero é divisivel por 2 e por 3")
    if(div %3 ===0){
        console.log("esse numero é divisivel por 2 e por 3")        
    }
        
}else{console.log("este numero não é divisivel por 2 e 3")}


if (div %2 ===0 && div %3 ===0 || div>0){
   console.log("esse numero é divisivel por 2 e por 3");
   div===30
   ?console.log("UFA acertei")
   :console.log("mas não foi dessa vez");
   switch (div) {
        case 6:

         console.log("tente um numero maior");
         break;
        case 12:
            
            console.log("tente um numero maior");
            break
        case 18:
            
            console.log("tente um numero maior");
            break
        case 24:
            
            console.log("tente um numero maior");
            break
        case 30:
            
            console.log("30 consegui!!!");
            break
    
        default:
            console.log("é um numero maior que 6 e menor que 30");
           
            break;
    }
}else{console.log("este numero não é divisivel por 2 e 3")};

