let i = 'a';
const obj = {
    name: "Joonwoo",
    [i]: 21
}

while (i<'d'){
    console.log(obj.a);
    i = String.fromCharCode(i.charCodeAt(0) + 1);
}

// 21
// undefined
// 21
// undefined
// 21
// undefined