const obj = {
    name: 'Alice',
    cat: {
        name: 'Diah',
        cat2: {
            name: "cat2"
        }
    },

    getname(value) {
        console.log(value);
    }
}

// if (obj.cat && obj.cat.cat2)
// {
//     console.log(obj.cat.name);
// }
// => to complicate

if (obj?.cat?.cat2.name) // => option_chainning
{
    console.log(obj.cat.cat2.name);
}

if (obj?.['cat']) {
    console.log(obj);
}

// using with function
obj.getname?.(123);