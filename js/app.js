import { animateGsap } from './animateGsap.js';

window.addEventListener("load", function () {
  let header = document.querySelector("header");
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");

  if (menu) {
    link.addEventListener("click", function () {
      link.classList.toggle("active");
      menu.classList.toggle("open");
    });

    window.addEventListener("scroll", () => {
      if (menu.classList.contains("open")) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });

    document.addEventListener("click", (e) => {
      let target = e.target;
      if (
        !target.closest(".header__nav") &&
        !target.closest(".header__burger") &&
        !target.closest(".button-dropdown")
      ) {
        link.classList.remove("active");
        menu.classList.remove("open");
        closeAllDropdowns();
      }
    });

    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    // Десктоп: hover
    if (window.innerWidth > 1024) {
      dropdownToggles.forEach(toggle => {
        const parent = toggle.closest(".button-dropdown");

        parent.addEventListener("mouseenter", () => {
          closeAllDropdowns();
          parent.classList.add("open");
          const dropdown = parent.querySelector(".dropdown-menu");
          dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        });

        parent.addEventListener("mouseleave", () => {
          parent.classList.remove("open");
          const dropdown = parent.querySelector(".dropdown-menu");
          dropdown.style.maxHeight = null;
        });
      });
    }

    // Мобильный: click
    else {
      dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          const parent = toggle.closest(".button-dropdown");
          const dropdown = parent.querySelector(".dropdown-menu");
          const height = dropdown.scrollHeight;

          if (parent.classList.contains("open")) {
            parent.classList.remove("open");
            dropdown.style.maxHeight = null;
          } else {
            closeAllDropdowns();
            dropdown.style.maxHeight = height + "px";
            parent.classList.add("open");
          }
        });
      });
    }

    function closeAllDropdowns() {
      document.querySelectorAll(".button-dropdown").forEach(item => {
        item.classList.remove("open");
        const menu = item.querySelector(".dropdown-menu");
        if (menu) {
          menu.style.maxHeight = null;
        }
      });
    }
  }

  function checkScroll() {
    if (window.scrollY > 0) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }

  checkScroll();

  // Modals

  function hideModal(modal) {
    modal.addEventListener('click', function(e) {
      const target = e.target;
      if (
        target.classList.contains("modal__close") ||
        target.classList.contains("modals") ||
        target.classList.contains("close")
      ) {
        modal.style.transition = "opacity 0.4s";
        modal.style.opacity = "0";
        setTimeout(() => {
          modal.style.display = "none";
        }, 400);
      }
    });
  }
  function showModal(modal) {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.transition = "opacity 0.4s";
      modal.style.opacity = "1";
    }, 10);
  } 

  let modals = document.querySelector('.modals')
  let modalAll = document.querySelectorAll('.modal')
  let modalBtns = document.querySelectorAll(".modal-btn");

  if(modals && modalBtns){
    hideModal(modals);
    modalBtns.forEach( btn => {
      btn.addEventListener('click', () => {
        showModal(modals)
        let typeBtn = btn.dataset.type;
        modalAll.forEach( modal => {
          let typeModal = modal.dataset.type;
          modal.style.display = 'none'
          if(typeBtn == typeModal) {
            modal.style.display = 'block'
          }
        });
      })
    })
  }

  // Swipers

  var projectsSwiper = new Swiper(".projectsSwiper", {
    spaceBetween: 16,
    navigation: {
      nextEl: ".projects-next",
      prevEl: ".projects-prev",
    },
  });

  // Phone
  
  [].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substring(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });

  animateGsap();

  window.addEventListener("scroll", ()=> {
    checkScroll();
  });

  // Tabs

  var tabsEl = document.querySelector('.tabs');
  if (tabsEl) {
    var tabs = new Tabby('[data-tabs]');
  }
});


$(document).ready(function() {
  $('.filter').niceSelect();
});