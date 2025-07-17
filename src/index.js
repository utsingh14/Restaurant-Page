import "./style.css";
import { renderHome } from "./home";
import { renderMenu } from "./menu";

console.log("HELLO! World");

const home=document.querySelector("#home");
const logo=document.querySelector("#logo");
const menu=document.querySelector("#menu");


home.addEventListener('click',()=>{
    home.style.textDecoration = 'none';
    menu.style.textDecoration = 'none';
    home.style.textDecoration = 'underline';
    renderHome();
});
logo.addEventListener('click',()=>{
    menu.style.textDecoration = 'none';
    home.style.textDecoration = 'none';
    home.style.textDecoration = 'underline';
    renderHome();
});
menu.addEventListener('click',()=>{
    home.style.textDecoration = 'none';
    menu.style.textDecoration = 'underline';
    renderMenu();
});
renderHome();