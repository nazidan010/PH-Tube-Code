// Create categories
const loadCategories = () => {
    // Fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
};

//Videos Categories start>>>>>>
const loadVideos = () => {
    // Fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data =>displayVideos(data.videos))
    .catch(error => console.log(error));
};

// const cardDemo={
//     "category_id": "1003",
//     "video_id": "aaaf",
//     "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
//     "title": "Sticks & Stones",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
//             "profile_name": "Dave Chappelle",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "113K",
//         "posted_date": ""
//     },
//     "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
// }

const displayVideos=(videos)=>{
    const videosContainer=document.getElementById('videos');
    videos.forEach(video=>{
        console.log(video);

        //Video display Start
        const card=document.createElement('div');
        card.classList='card card-compact';
        card.innerHTML=`
        <figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-3">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt="">
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-red-500">${video.authors[0].profile_name}</p>
    <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" alt="">
    </div>
    <p></p>
    </div>
  </div>
        `
        videosContainer.appendChild(card);
        //Video display End
    })
}
//Videos Categories End>>>>>>


// Create display start>>>>>>>>
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    // Add data to HTML
    categories.forEach((item) => {
        console.log(item);

        // Create button
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = item.category;

        // Add button to category container
        categoryContainer.appendChild(button);
    });
};
// Create display End>>>>>>>>

loadCategories();
loadVideos();
