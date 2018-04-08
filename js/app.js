function slideImage(){
    
    var img1 = new Image();
    img1.src = "img/alice-in-wonderland.jpg";

    var img2 = new Image();
    img2.src = "img/boromir.jpg";

    var img3 = new Image();
    img3.src = "img/book-fair.jpg";

    var counter = 1;
    
    document.images.slide.src = eval("img"+counter+".src");
    
    if(counter<3){
        counter = counter + 1;
    }
    else{
        counter = 1;
        
    }
    setTimeout("slideImage()", 2500);
}

slideImage();

