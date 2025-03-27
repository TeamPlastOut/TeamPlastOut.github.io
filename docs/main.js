window.addEventListener("load", () => {
    const imgs = document.getElementsByClassName("content-banner");

    function resize(e) {
        if(e.parentElement.offsetHeight / e.parentElement.offsetWidth < e.naturalHeight / e.naturalWidth) {
            e.width = e.parentElement.offsetWidth;
        } else {
            e.height = e.parentElement.offsetHeight;
        }
    }
    
    for(let x = 0; x < imgs.length; x++) {
        imgs[x].onload = resize(imgs[x]);
    }
})
