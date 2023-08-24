function x(){
    let a = 22;
    function y(){
        console.log(a);
    }
    return y; 
}

const z = x();
z();