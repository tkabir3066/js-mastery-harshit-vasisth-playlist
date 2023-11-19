// default parameter


// function add(a,b){
//     return a+b;
// }

// const sum = add(4,5);
// console.log(sum); // 9




// function add(a,b){
    //     if(typeof b==='undefined'){
        //         b=1;
        //     }
        //     return a+b;
        // }
        
        // const sum = add(4);
        // console.log(sum); // 5




        // function add(a,b=1){
        //     return a+b;
        // }
        
        // const sum = add(4);
        // console.log(sum); // 5


        function add(a,b=1){
            return a+b;
        }
        
        const sum = add(4,6);
        console.log(sum); // 4+6=10