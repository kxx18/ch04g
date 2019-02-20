var fortuneCookies = [
    "Conquer your or they will conquer you.",
    "River need springs",
    "Do not fear what you don't know",
    "Whenever possible, keep it simple",
];

//exports makes it visible outside but fortuneCookies will be completely hidden(encapsulation)
//encapsulation--> less-prone and fragile code
exports.getFortune = ()=>{
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};