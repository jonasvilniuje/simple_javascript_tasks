class Story {
    constructor() {
        this.value = "";
    }
    name(str) {
        this.value = str;
        return this;
    }
    go(str) {
        var action;
        var adj = ["i", "you", "we", "they"];
        if (adj.includes(this.value.toLowerCase()))
            action = " go to";
        else action = " goes to";
        
        action += " " + str.toLowerCase();
        this.value += action;
        return this;
    }
    
    buy(str) {
        this.value += " to buy " + str.toLowerCase();
        return this;
    }
    
    get val() {
        return this.value;
    }
    
}

a = new Story()

a.name("I").go("shop").buy("coffee").val

console.log(a)