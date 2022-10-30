function isLegal(age, country) {
    if(age >= 18 && country === "brasil") return true;
    else if(age >= 21 && country === "eua") return true;
    else if(age >= 20 && country === "paraguai") return true;
    else if(age >= 16 && country === "jamaica") return true;
    else if(country === "armenia") return true;
    else if(country === "ira") return false;
    else return false;
}