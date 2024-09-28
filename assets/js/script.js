'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Element toggle function
    const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

    // Sidebar variables
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    // Sidebar toggle functionality for mobile
    if (sidebarBtn) {
        sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
    }

    // Testimonials variables
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    // Modal toggle function
    const testimonialsModalFunc = function () {
        modalContainer.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    // Add click event to modal close button
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    }
    if (overlay) {
        overlay.addEventListener("click", testimonialsModalFunc);
    }

    // Custom select variables
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");

    if (select) {
        select.addEventListener("click", function () { elementToggleFunc(this); });
    }

    // Add event in all select items
    selectItems.forEach(item => {
        item.addEventListener("click", function () {
            let selectedValue = this.innerText.toLowerCase();
            selectValue.innerText = this.innerText;
            elementToggleFunc(select);
            filterFunc(selectedValue);
        });
    });




    // Contact form variables
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    // Add event to all form input fields
    formInputs.forEach(input => {
        input.addEventListener("input", function () {
            // Check form validation
            if (form.checkValidity()) {
                formBtn.removeAttribute("disabled");
            } else {
                formBtn.setAttribute("disabled", "");
            }
        });
    });

    // Page navigation variables
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    // Add event to all nav links
    navigationLinks.forEach((link, index) => {
        link.addEventListener("click", function () {
            pages.forEach((page, pageIndex) => {
                if (index === pageIndex) {
                    page.classList.add("active");
                    navigationLinks[pageIndex].classList.add("active");
                    window.scrollTo(0, 0);
                } else {
                    page.classList.remove("active");
                    navigationLinks[pageIndex].classList.remove("active");
                }
            });
        });
    });
});
