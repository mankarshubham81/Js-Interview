function mytimeout1(){
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("myTimeout1 : " + i)
        }, i * 1000);
        
    }
}

mytimeout1();
// OUTPUT:
// 3
// 3
// 3

function mytimeout2(){
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("myTimeout2 : " + i)
        }, i * 1000);
        
    }
}

mytimeout2();
// OUTPUT:
// 0
// 1
// 2

function mytimeout3() {
    for (var i = 0; i < 3; i++) {
        (function(i) {
            setTimeout(() => {
                console.log("myTimeout3 : " + i);
            }, i * 1000);
        })(i);
    }
}

mytimeout3();
// OUTPUT:
// 0
// 1
// 2