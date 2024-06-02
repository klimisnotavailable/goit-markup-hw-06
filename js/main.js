"use strict"

const orderButton = document.querySelector("button.button_order_service");
const backdrop = document.querySelector("div.backdrop");
const closeModalButton = document.querySelector("button.modal-close-button");
const openMobileMenuButton = document.querySelector("button.mobile-menu-button");
const closeMobileMenuButton = document.querySelector("button.mobile-menu-close-button")
const mobileMenu = document.querySelector("div.mobile-menu");
const body = document.querySelector("body");
const isOpen = "is-open";

body.addEventListener("click",(event)=>{
    if(event.target == orderButton){
        backdrop.classList.add(isOpen);
    }
    else if(event.target == closeModalButton){
        backdrop.classList.remove(isOpen);
    }
    else if(event.target == openMobileMenuButton){
        mobileMenu.classList.add(isOpen);
    }
    else if(event.target == closeMobileMenuButton){
        console.log(closeMobileMenuButton)
        mobileMenu.classList.remove(isOpen);
    }
})