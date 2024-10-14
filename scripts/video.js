//create load videos start
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
}
//create load videos end
// Time set start
function getTime(time){
    const hour=parseInt (time/3600);
    const remainingSecond= time%3600;
    const minute=parseInt(remainingSecond/60);
    Second=remainingSecond%60;
    return`${hour}h ${minute}min ${Second}second ago`
}
// console.log(getTime(7865));
// Time set End

//details button with modal start
const loadDetails=async (videoId)=>{
    // console.log(videoId);
    const uri=`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res=await fetch(uri);
    const data=await res.json();
    console.log(data);
}
const displayDetails=(video)=>{
    console.log(video);
    const detailContainer=document.getElementById("modal-content");
    //way-1
    // document.getElementById("showModalData").click();
    //way-2
    document.getElementById("customModal").showModal();
};


//details button with modal end

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
    videosContainer.innerHTML="";
    if(videos.length==0){
        videosContainer.classList.remove("grid");
        videosContainer.innerHTML=`
        <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
                      <img
                        src="./assets/Icon.png"
                        alt="" />

                        <h2 class="font-extrabold text-3xl p-8">Oops!! Sorry, There is no content here</h2>
        </div>
        `
    }
    else{
        videosContainer.classList.add("grid");
    }
    videos.forEach((item) => {
        // console.log(item);
        const card = document.createElement("div");
        card.classList = 'card card-compact';
        card.innerHTML = `
        <figure class="h-[250px] relative">
            <img class="h-full w-full object-cover rounded-md" src=${item.thumbnail} alt="">
            ${
                item.others.posted_date?.length==0?"":`<p class="absolute bg-black rounded-lg text-white p-2 right-2 bottom-2 text-xs">${getTime(item.others.posted_date)}</p>`
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
            <button onclick="loadDetails('${item.video_id}')" class="btn btn-sm mt-2 btn-error">details</button>
            </div>
        </div>
        `;
        videosContainer.appendChild(card);
    });
}
// setTimeout(loadVideos,2000)

//create displayVideos end

loadVideos(); 
