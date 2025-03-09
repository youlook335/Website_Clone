var computer = document.getElementById("this-Pc");
var model = document.getElementById('model-view');
computer.addEventListener("click", function(){
    model.hidden = false;
});

var btnClose = document.getElementById("close-btn");
btnClose.addEventListener("click", function(){
    model.hidden = true;
});


var file = document.getElementById("desktop-file");
file.addEventListener("click", function(){
    model.hidden = false;
})

// window.addEventListener("click", function(event){
//     if (event.target == model) {
//         model.hidden = true;
//     }
// })

var windowbtn = document.getElementById("windowBtn");
var view = document.getElementById("window-view");

windowbtn.addEventListener("click", function(){
   if(view.style.bottom == "50px"){
        view.style.bottom ="-571px"
   }else{
        view.style.bottom = "50px"
   }
})