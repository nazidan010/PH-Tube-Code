//create loadCategories start
const loadCategories = () => {
    
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories)) 
        .catch((error) => console.log(error));
};
// create button category videos start
const loadCategoriesVideos = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((error) => console.log(error));
};
// create button category videos end
const displayCategories = (categories) => {
    const categoryContainer=document.getElementById('categories');
    categories.forEach((item)=>{
        // console.log(item);
        //Create a button
        const buttonContainer=document.createElement('div');
        buttonContainer.innerHTML=`
        <button onclick="loadCategoriesVideos(${item.category_id})" class="btn bg-red-400">
        ${item.category}
        </button>
        `
        //add button to category
        categoryContainer.appendChild(buttonContainer);
    })
};
// DisplayCategories end

loadCategories(); 