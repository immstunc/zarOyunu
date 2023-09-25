
var skor1 = 0
var skor2 = 0

function oyna() {
    
var resimler = [1,2,3,4,5,6]
var zarDeger1=document.getElementById("zarDeger1")
var zarDeger2=document.getElementById("zarDeger2")

var rastgele1 = Math.floor((Math.random())*6)
var rastgele2 = Math.floor((Math.random())*6)

zarDeger1.innerHTML=`<img src="assets/image/${resimler[rastgele1]}.jpg" alt="" style="width: 250px; height:250px;">`
zarDeger2.innerHTML=`<img src="assets/image/${resimler[rastgele2]}.jpg" alt="" style="width: 250px; height:250px;">`


    if (skor1!=10 || skor2!=10) {
        if(rastgele1>rastgele2) {
            skor1++
        }
        else if (rastgele2>rastgele1) {
            skor2++
        }
    }

    
    document.getElementById("skor1").innerText = skor1
    document.getElementById("skor2").innerText =skor2   

}