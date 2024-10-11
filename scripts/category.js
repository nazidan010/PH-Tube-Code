// 1. fetch,load and show categories on html

//create loadCategories start
const loadCategories = () => {
    
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories)) 
        .catch((error) => console.log(error));
};
// loadCategories end

// {
//     "category_id": "1001",
//     "category": "Music"
// }

// DisplayCategories start
const displayCategories = (categories) => {
    const categoryContainer=document.getElementById('categories');
    categories.forEach((item)=>{
        // console.log(item);
        //Create a button
        const button=document.createElement('button');
        button.classList='btn bg-red-400';
        button.innerText=item.category;
        //add button to category
        categoryContainer.appendChild(button);
    })
};
// DisplayCategories end

loadCategories(); 