window.addEventListener('load', function() {
  baguetteBox.run('.searchPhoto');
});

const img = getElementsByTagName('a');
const input = getElementById('searchbar')

input.addEventListener('keyup', search => {
    const searchInput = search.target.value.toLowerCase();
    for( i = 0; i < img.length; i++) {
        const inputValue = img[i].getAttribute('p');
        if (inputValue.toLocaleLowerCase().indexOf(searchInput) > -1) {
            img[i].style.display = "";
        } else {
            img[i].style.display= "none";
        }
    }
});
