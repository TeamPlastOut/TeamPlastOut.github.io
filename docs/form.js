const form = document.getElementById("form");
const goto = document.getElementById("goto-signup");

function valid_email(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     return false;
// })

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    if(!(valid_email(form.children[0].value) && form.children[1].value != "" && Array.from(checkboxes).some(x => x.checked))) {
        return false;
    }

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdfIWtmXku_Fr8KBjvFm9jQzssT7wsOR5wI11bHqlKcW2l4Vw/formResponse",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        data: $("form").serialize(),
    });

    const nodes = form.children;
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
        nodes[i].style.display = "none";
    }
    
    div.appendChild(img);
    div.appendChild(txt);
    form.appendChild(div);

    img.onload = () => { img.classList.add("submitted"); };
});

document.addEventListener("scroll", () => {
    let form_pos = form.getBoundingClientRect();
    let goto_pos = goto.getBoundingClientRect();

    console.log(form_pos.y + ' ' + goto_pos.y);
    if((form_pos.y - (goto_pos.y + goto_pos.height)) <= 0) {
        goto.style.visibility = "hidden"
    } else {
        goto.style.visibility = "visible";
    }
})
