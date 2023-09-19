function myFunction() {
    const nav = document.getElementById('myTopnav');
    return nav.className === 'topnav' ? nav.className += 'responsive' : nav.className = 'topnav';
}