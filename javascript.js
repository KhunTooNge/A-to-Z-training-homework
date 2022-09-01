let imageContain = document.getElementsByClassName('img-container')[0]

let image = [
   {img:'./image/m1.jpeg',name:'Avenger'} ,
   {img:'./image/m2.jpeg',name:'Spider Man'} ,
   {img:'./image/m3.jpg',name:'Super Gril'} ,
   {img:'./image/m4.jpeg',name:'Avenger'} ,
   {img:'./image/m5.jpeg',name:'Avenger'} ,
   {img:'./image/m6.jpeg',name:'Super Gril'} ,
   {img:'./image/m7.jpg',name:'DeadPool'} ,
   {img:'./image/m8.jpeg',name:'Ghost House'} ,
   {img:'./image/m9.jpeg',name:'Ghosts Of War'} ,
   {img:'./image/m10.jpeg',name:'NightBook'} ,
   {img:'./image/m11.jpeg',name:'JALSA'} ,
]

for (let i = 0; i < image.length; i++) {
imageContain.innerHTML +=
    ` 
   <div class="card">
        <div class="card-img">
            <img src="${image[i].img}" alt="">
        </div>
        <div class="card-content">
            <h3>${image[i].name}</h3>
            <span>120 min | action</span>
        </div>
    </div>
`
console.log(image[i].img)
}