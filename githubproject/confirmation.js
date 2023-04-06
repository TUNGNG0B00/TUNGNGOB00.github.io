let instaLink = document.querySelector('a[href="https://www.facebook.com/thealchemistsart"]');
    instaLink.addEventListener('click', function(event) {
    event.preventDefault();
    let confirmation = confirm('Are you sure you want to visit our Instagram page?');
    if (confirmation) {
    window.location.href = instaLink.href;
  }
});