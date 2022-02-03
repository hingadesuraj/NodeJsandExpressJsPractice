const add =(a,b)=>{
    return a+b ;
}

const sum =(a,b)=>{
    return a-b;
}

const multiplication =( a ,b )=>{
    return a*b;
}


//  Export these all above function and use it in import file
module.exports = {add,sum,multiplication} ;


// export function one by one like below
// module.exports.add = add
// module.exports.sum = sum
// module.exports.multiplication = multiplication