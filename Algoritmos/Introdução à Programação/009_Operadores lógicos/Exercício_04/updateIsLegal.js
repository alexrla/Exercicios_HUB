function isLegal(age, country, drink="") {
    if(age >= 18 && country === "brasil") 
        return true;
    else if(age >= 21 && country === "eua") 
        return true;
    else if(age >= 20 && country === "paraguai") 
        return true;
    else if(age >= 16 && country === "jamaica") 
        return true;
    else if(age >= 21 && country === "egito") 
        return true;
    else if(country === "armenia") 
        return true;
    else if(country === "ira") 
        return false;
    else if(
        age >= 16 && 
        country === "portugal" && 
        (drink === "cerveja" || drink === "vinho") 
    ) 
        return true; 
    else if(age >= 18 && country === "portugal") 
        return true;
    else if(
        age >= 18 && 
        country === "egito" && 
        drink === "cerveja"
    ) 
        return true; 
    else if(age >= 21 && country === "egito") 
        return true;
    else 
        return false;
}