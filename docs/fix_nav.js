const fill = document.getElementById("fill");
const menu = document.getElementById("menu-button");

const fix_nav = () => {
    const bbox = menu.getBoundingClientRect();

    let offset = (fill.parentElement.parentElement.offsetHeight - bbox.width) / 2;

    fill.style.left = 0;
    fill.style.width = (bbox.width + (offset * 2)) + "px";

    menu.parentElement.style.paddingLeft = offset + "px";

}

if(menu.complete) {
    fix_nav();
} else {
    menu.onload = fix_nav;
}