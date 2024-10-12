function getTime(time){
    const hour=parseInt (time/3600);
    const remainingSecond= time%3600;
    const minute=parseInt(remainingSecond/60);
    Second=remainingSecond%60;
    return`${hour}hour ${minute}minute ${Second}second ago`
}
console.log(getTime(7865));