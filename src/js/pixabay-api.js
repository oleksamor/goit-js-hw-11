const BASE_URL = 'https://pixabay.com/api/';
const KEY = '43233775-39d154ba994f40051e2e1ec64';

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

