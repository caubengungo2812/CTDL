let Queue = function() {
    this.store = [];
    this.push = function(value) {
        this.store.push(value);
    };
    this.deQueue = function() {
        return this.store.shift();
    };

    this.print = function() {
        return this.store;
    };

    this.isEmpty = function() {
        return this.store.length == 0;
    };
};