import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { objectSearch } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import { showLoading } from './js/render-functions';
import { hideLoading } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

hideLoading(loader);

form.addEventListener('submit', handelSubmit);

function handelSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';

  showLoading(loader);
  
  const dataSearch = event.currentTarget.elements.data.value.trim();
 
  if (dataSearch === '') {
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'bottomRight',
      messageColor: 'white',
      backgroundColor: 'red',
      progressBarColor: 'black',
    });
  }
 

  objectSearch(dataSearch)
    .then(data => {
      
      hideLoading(loader);
      
      if (data.hits.length === 0) {
        
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomRight',
          messageColor: 'white',
          backgroundColor: 'red',
          progressBarColor: 'black',
        });
      }
  
      gallery.innerHTML = createMarkup(data.hits);
      lightbox.refresh();
    })
    .catch(error => {
      hideLoading(loader);
      iziToast.error({
        message: `${error}`,
      });
    })
    .finally(() => {
      form.reset();
    });
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionsDelay: 250,
});