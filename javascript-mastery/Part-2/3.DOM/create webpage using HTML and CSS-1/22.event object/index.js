
// event object

// const myButton1 = document.querySelector("#one");

// myButton1.addEventListener("click", function(e){
//     console.log(e);
//     console.log(e.currentTarget);
// })

// jokhon e kono element e event listener add hobe
// js engine----> line by line code execute kore
//browser er kache--> js engine + extra features
// browser ---> js engine + WebApi

// jab broser ko pata chala ki user ne event perform kia
// jo hum listen kar rahe hai
// browser prothom e 2 ta kaj korbe :-
//1). callback function hai browser js engine ko degi
//2). callback function ke sath browser jo event hua  hai uski information bhi dega
// ye info hame ek object ke form mai degi



const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click", function(e){

        // target vs currentTarget
        console.log(e.target);
        console.log(e.currentTarget);

    })
})

// target matlab kis element ne event ko trigger kia
// current target matlab ki element me ham eventListner attach kia tha 