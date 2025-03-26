const form = document.getElementById("form");

function submit_form() {
    const nodes = form.childNodes;
    const len = nodes.length;

    const div = document.createElement("div");
    const img = document.createElement("img");
    const txt = document.createElement("h3");

    const duration = document.getElementById("duration").value;
    
    div.setAttribute("style", "height: " + form.offsetHeight + "px");
    div.classList.add("submitted-box");

    img.src = "assets/check-mark.svg";
    img.height = form.offsetHeight * 0.5;
    img.classList.add("check-mark");

    txt.appendChild(document.createTextNode("Submitted. Thank you for commiting for " + duration + "."));
    
    for(let i = 0; i < len; i++) {
        form.removeChild(nodes[0]);
    }
    
    div.appendChild(img);
    div.appendChild(txt);
    form.appendChild(div);
    
    img.onload = () => { img.classList.add("submitted"); };
}
