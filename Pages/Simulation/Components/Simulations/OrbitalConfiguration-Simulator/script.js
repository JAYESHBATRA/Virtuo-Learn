let slider = document.getElementById("slider");


function ImgUpdate(){
    var currentVal = slider.value;
    var img = document.getElementById("img");
    img.setAttribute("src",`img/${currentVal}.png`);
};

function ImgUpdateBtnPrev(){
    if(slider.value!=1){
        slider.value=slider.value-1;
        var currentVal = slider.value;
        var img = document.getElementById("img");
        img.setAttribute("src",`img/${currentVal}.png`);
    }
};

function ImgUpdateBtnNext(){
    if(slider.value!=108){
        slider.value=slider.value-2+3;
        //var currentVal = slider.value;
        var img = document.getElementById("img");
        img.setAttribute("src",`img/${slider.value}.png`);
    }
};

