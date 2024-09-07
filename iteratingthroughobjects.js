var a = {
    l: 5,
    b: 77,
    h: 8,
};
var key;

for (key in a) {
    console.log(key, a[key]);
    if (key === "l") {
        console.log("present");
    } else {
        console.log("absent");
    }
}
