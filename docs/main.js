window.addEventListener("load", () => {
    const imgs = document.getElementsByClassName("content-banner");

    function resize(e) {
        if(e.parentElement.offsetHeight / e.parentElement.offsetWidth < e.naturalHeight / e.naturalWidth) {
            e.width = e.parentElement.offsetWidth;
        } else {
            e.height = e.parentElement.offsetHeight;
        }

        e.style.top = ((e.parentElement.offsetHeight - e.height) / 2) + "px";
        console.log(e.parentElement.offsetHeight + " - " + e.height);

        if(e.classList.contains("left-block")) { //image on the right
            e.style.right = ((e.parentElement.offsetWidth - e.width)  * 0.55) + "px";
            // console.log(e.style.right);
        } else {
            e.style.left = ((e.parentElement.offsetWidth - e.width) * 0.55) + "px";
            // console.log(e.style.left);
        }
    }
    
    for(let x = 0; x < imgs.length; x++) {
        imgs[x].onload = resize(imgs[x]);
    }
})
