!function(){var e;window.onscroll=function(){return e=document.querySelector("[data-header]"),o=document.querySelector("[data-header-logo]"),t=e.offsetHeight,void(window.pageYOffset>t?(e.classList.add("header--no-transparency"),o.classList.add("logo--white")):(e.classList.remove("header--no-transparency"),o.classList.remove("logo--white")));var e,o,t},function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("[data-page]")};function o(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("[data-page]")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),(e={menuOpenModalBtn:document.querySelector("[data-menu-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),menu:document.querySelector("[data-menu]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("[data-page]")}).menuOpenModalBtn.addEventListener("click",(function(){e.menu.classList.toggle("is-hidden"),e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"),e.body.classList.toggle("no-scroll")}))}();
//# sourceMappingURL=index.1eb851a5.js.map