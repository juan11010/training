function deepEqual(a, b) {
    if(a === b) return true;

    if(a == null || typeof a !== "object" || b == null || typeof b !== "object") return false;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if(keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if(!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}


const object_a = {
		name: "Luis",
		age: 32,
		contacts: [
			{ name: "Enrique", age: "22", main_contact: {}  }
		]
};

const object_b = {
	name: "Luis",
	age: 32,
	contacts: [
			{ name: "Enrique", age: "22", main_contact: {}  }
	]
}

console.log(deepEqual(object_a, object_b));
