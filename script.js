var image_array=["deva.png", "Prasanna Kumar.jpg", "Suriyakala.jpg", "Subramaniam.jpg"];
var ppl_name=["Devaprakash", "Prasanna Kumar", "Suriyakala", "Subramaniam"];
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