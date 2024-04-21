const BASE_URL = 'https://pixabay.com/api/';
const KEY = '43441081-c9c9daac9af91d4227dda2db1';

export function objectSearch(searchImage) {
  const params = new URLSearchParams({
    key: KEY,
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    return response.json();
  });
}

let mask = document.querySelector(".css-loader");
window.addEventListener('load', () => {
  mask.classList('hide');
  setTimeout(() => {
    mask.remove()
  }, 600);

});