/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll, .page-scroll a', function(event) {
        var $anchor = $(this);
        var target = $anchor.attr('href');

        if (!target || target.charAt(0) !== '#' || !$(target).length) {
            return;
        }

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Light/dark theme toggle.
$(function() {
    var $toggle = $('.theme-toggle');
    var $icon = $toggle.find('i');
    var $label = $toggle.find('.theme-toggle-text');

    function setTheme(theme) {
        var isDark = theme === 'dark';

        document.documentElement.classList.add('theme-changing');
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (error) {
            // Keep the toggle working even when storage is unavailable.
        }
        $toggle.attr('aria-pressed', isDark);
        $toggle.attr('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        $icon.toggleClass('fa-moon-o', !isDark);
        $icon.toggleClass('fa-sun-o', isDark);
        $label.text(isDark ? 'Light' : 'Dark');
        window.setTimeout(function() {
            document.documentElement.classList.remove('theme-changing');
        }, 0);
    }

    setTheme(document.documentElement.getAttribute('data-theme') || 'light');

    $toggle.on('click', function() {
        var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
});

// Open external resources and documents in a new tab.
$(function() {
    $('a[href]').each(function() {
        var href = $(this).attr('href');
        var opensDocument = /\.(pdf)$/i.test(href);
        var opensExternalSite = /^https?:\/\//i.test(href);

        if (opensDocument || opensExternalSite) {
            $(this).attr('target', '_blank');
            $(this).attr('rel', 'noopener noreferrer');
        }
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
