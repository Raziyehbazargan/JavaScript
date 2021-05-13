class HashEntry {
    constructor(key, value) {
        this.key = key;
        this.value =value;
        this.next = null;
    }
}

class HashTable {
    constructor() {
        this.slots = 10;
        this.size = 0;
        this.bucket = [];
        for(let i = 0; i < this.slots; i++) {
            this.bucket[i] = null;
        }
        this.threshold = 0.6
    }

    get_size() {
        return this.size;
    }
    //Hash Function
    getIndex(key) {
        let index = key % this.slots;
        return index;
    }

    isEmpty() {
        return this.get_size() == 0;
    }

    insert(key, value) {
        
    }


}