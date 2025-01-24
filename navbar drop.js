document.addEventListener('DOMContentLoaded', () => {
    // Navigation elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const searchButton = document.querySelector('.search-button');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-input');
    const accountButton = document.querySelector('.account-button');
    const accountDropdown = document.querySelector('.account-dropdown');

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Search functionality
    searchButton.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });

    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    // Close search on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });

    // Account dropdown functionality
    accountButton.addEventListener('click', (e) => {
        e.stopPropagation();
        accountDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!accountButton.contains(e.target)) {
            accountDropdown.classList.remove('active');
        }
        
        // Close mobile menu when clicking outside
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    accountDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});