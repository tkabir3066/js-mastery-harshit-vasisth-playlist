// HTML Collection
/* let linkItems = document.getElementsByTagName("a"); // HTML Collection

  linkItems= Array.from(linkItems);

//   linkItems.forEach(link=>{
//     // console.log(link.textContent);
//     link.style.backgroundColor = "#fff";
//     link.style.color = "hotpink";
//     link.style.fontWeight = "bold";
//     link.style.padding = "5px";
//     link.style.marginTop = "5px";
// })


//simlpe for loop

// for(let i=0; i<linkItems.length; i++){
//     const linkItem = linkItems[i]
//     console.log(linkItem);

//     linkItem.style.backgroundColor = "#fff";
//     linkItem.style.color = "hotpink";
//     linkItem.style.fontWeight = "bold";
//     linkItem.style.padding = "5px"
//     linkItem.style.marginTop = "5px";
// }




// for of loop
 
for(let linkItem of linkItems){
        
    console.log(linkItem);

    linkItem.style.backgroundColor = "#fff";
    linkItem.style.color = "hotpink";
    linkItem.style.fontWeight = "bold";
    linkItem.style.padding = "5px"
    linkItem.style.marginTop = "5px";
}


 */ 



// Node List

let linkItems = document.querySelectorAll("a"); // NodeList

linkItems.forEach(linkItem=>{
    console.log(linkItem);
    linkItem.style.backgroundColor = "#fff";
    linkItem.style.color = "hotpink";
    linkItem.style.fontWeight = "bold";
    linkItem.style.padding = "5px"
    linkItem.style.marginTop = "5px";
})