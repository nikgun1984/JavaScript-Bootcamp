function addUpTo(n) {
    let total = 0;
    for (let i=0;i<=n;i++){
        total += i;
    }
    return total;
}

function addUpTo1(n) {
    return n*(n+1)/2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`);

let t3 = performance.now();
addUpTo1(1000000000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4-t3)/1000} seconds.`);