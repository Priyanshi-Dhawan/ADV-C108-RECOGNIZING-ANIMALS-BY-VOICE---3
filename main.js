function gotResults(error, result) {
    if(error){
        console.error(error);
    }
    else{

        console.log(results)
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
    }
}  document.getElementById("result_label").innerHTMl='I can hear-'+results[0].label

document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


img=document.getElementById('mooing');
img1=document.getElementById(roaring');
img2=document.getElementById('barking');


{
    if (results[0].label == "moo") {
        img.src = 'cow.jpg';
    }
    {
        if (results[0].label == "roar") {
            img.src = 'lion.png';
            
    }
    {
        if (results[0].label == "meow") {
            img.src = 'download(9).png;
    }
   