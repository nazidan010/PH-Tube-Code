//create loadCategories start
const loadCategories = () => {
    
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories)) 
        .catch((error) => console.log(error));
};
// create button category videos start
const loadCategoriesVideos = (id) => {
    //active remove function with button
    const removeActiveClass=()=>{
        const buttons=document.getElementsByClassName("category-btn");
        console.log(buttons);
        for(let btn of buttons){
            btn.classList.remove("active");
        }
    }
    removeActiveClass();
    //active remove function with button
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
        const activeBtn=document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active");
        displayVideos(data.category);
    })
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
        <button id="btn-${item.category_id}" onclick="loadCategoriesVideos(${item.category_id})" class="btn category-btn">
        ${item.category}
        </button>
        `
        //add button to category
        categoryContainer.appendChild(buttonContainer);
    })
};
// DisplayCategories end

loadCategories(); 