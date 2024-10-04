//1. Fetch- Load Show Categories on html


//create categories
const loadCategories=()=>{
    //fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    .then((data)=>displayCategories(data.categories))
    .catch((error)=>console.log(error))
}

//create display

const displayCategories=(data)=>{
    //add data in html
    console.log(data);
};

loadCategories();