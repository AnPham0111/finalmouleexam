let st1 = prompt('Nhập số thứ nhất')
let st2 = prompt('Nhập số thứ hai')
let a1 = parseInt(st1);
let a2 = parseInt(st2);
let b1 = 0;
let b2 = 0;
//let boolen;
function timuoc(st,sum){
    if(st>0){
        for (let i = 1; i < st; i++) {
            if (st%i==0){
                sum+=i;
            }
        }
    }
    console.log(sum)
    return sum;
}
timuoc(a1,b1);
timuoc(a2,b2);
function check(a,b){
    if (a==b){
        return true;
    }
    else {
        return false
    }
}
check(a1,b2)
check(a2,b1)


