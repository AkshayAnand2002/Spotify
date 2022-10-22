console.log("WELCOME TO SPOTIFY.")
let songindex = 0;
let audioelement = new Audio('songs/1.mp3')
    //audioelement.play()
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar')
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let mastersongname = document.getElementById('mastersongname');
let songs = [{ songname: "Lorem, ipsum dolor1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songname: "Lorem, ipsum dolor2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songname: "Lorem, ipsum dolor3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songname: "Lorem, ipsum dolor4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songname: "Lorem, ipsum dolor5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songname: "Lorem, ipsum dolor6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songname: "Lorem, ipsum dolor7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songname: "Lorem, ipsum dolor8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songname: "Lorem, ipsum dolor9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songname: "Lorem, ipsum dolor10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]
songitem.forEach((element, i) => {
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioelement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})
audioelement.addEventListener('timeupdate', () => {
    //console.log('timeupdate');
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    //console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        //console.log(e.target);
        makeallplays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${index+1}.mp3`;
        mastersongname.innerText = songs[index].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (index >= 9) {
        index = 0;
    } else {
        index += 1;
    }
    audioelement.src = `songs/${index+1}.mp3`;
    mastersongname.innerText = songs[index].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (index <= 0) {
        index = 0;
    } else {
        index -= 1;
    }
    audioelement.src = `songs/${index+1}.mp3`;
    mastersongname.innerText = songs[index].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})