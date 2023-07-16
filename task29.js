let even=(...arg)=>{

    for (let i = 0; i < arg.length; i++) {
                if (arg[i]%2==0) {
                    console.log(arg[i]);
                }
    }
}

even(2,5,4,8,9,23,89,56,43,21,22,35,90,77,58,1,35,27,66,20)