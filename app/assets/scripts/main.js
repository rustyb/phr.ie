'use strict';

// Global menu toggle.
document.querySelector('[data-hook="global-menu:trigger"]').addEventListener('click', function (e) {
  e.preventDefault();
  e.target.classList.toggle('button--active');

  document.querySelector('[data-hook="global-menu:wrapper"]').classList.toggle('menu-wrapper--open');
}, false);