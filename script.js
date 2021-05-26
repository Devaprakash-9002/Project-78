var image_array=["https://i.postimg.cc/MKdhy06Z/family.jpg","deva.png", "Prasanna Kumar.jpg", "Suriyakala.jpg", "Subramaniam.jpg"];
var ppl_name=["Family","Devaprakash", "Prasanna Kumar", "Suriyakala", "Subramaniam"];
var i = 0;
function update() {
    i++;
    var people_array=4;
    if (i>people_array )
    {
        i=0;
    }
    var updateImage = image_array[i];
    var updateName = ppl_name[i];
    document.getElementById("ppl_image").src=updateImage;
    document.getElementById("ppl_name").innerHTML=updateName;
}
