//create load videos start
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
}
// Time set start
function getTime(time){
    const hour=parseInt (time/3600);
    const remainingSecond= time%3600;
    const minute=parseInt(remainingSecond/60);
    Second=remainingSecond%60;
    return`${hour}hour ${minute}minute ${Second}second ago`
}
console.log(getTime(7865));
// Time set End

//create load videos end

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

//create displayVideos start
const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos');
    videos.forEach((item) => {
        console.log(item);
        const card = document.createElement("div");
        card.classList = 'card card-compact';
        card.innerHTML = `
        <figure class="h-[250px] relative">
            <img class="h-full w-full object-cover rounded-md" src=${item.thumbnail} alt="">
            ${
                item.others.posted_date?.length==0?"":`<p class="absolute bg-black rounded-sm text-white p-2 right-2 bottom-2">${getTime(item.others.posted_date)}</p>`
            }
        </figure>
        <div class="px-0 py-2 flex gap-3">
            <div>
            <img class="rounded-full w-[30px] object-cover h-[30px]" src=${item.authors[0].profile_picture} alt="">
            </div>
            <div>
            <div class="flex gap-2">
            <h2 class="font-bold text-red-400">${item.authors[0].profile_name}</h2> 
            ${item.authors[0].verified==true?'<img class="h-6 w-6" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">'
                :""}
            </div>
            
            <p>${item.title}</p>
            <p>${item.others.views} Views</p>
            </div>
        </div>
        `;
        videosContainer.appendChild(card);
    });
}
setTimeout(loadVideos,3000)
//create displayVideos end
// loadVideos(); 
