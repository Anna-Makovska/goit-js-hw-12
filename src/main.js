import { getImages } from './js/pixabay-api';
import { templateImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchform = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadButton = document.querySelector('.load-button-style');
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const params = {
  query: '',
  page: null,
  perPage: 40,
  total: '',

}

  hideLoadMoreBtn();

searchform.addEventListener('submit', async e => {
  e.preventDefault();
  params.page = 1;

  params.query = searchform.elements.searchQuery.value.trim();
  if (params.query === '') {
    iziToast.warning({
      message: 'Please, fill the form!',
      position: 'topRight',
    });
    return;
  }
  loader.classList.add('visible');
  hideLoadMoreBtn();


 
  try {
    const data = await getImages(params.query, params.page, params.perPage);
    params.total = data.totalHits; 
    

    console.log(data);
    const markup = templateImages(data);

    gallery.insertAdjacentHTML('beforeend', templateImages(data));
    lightbox.refresh();
    checkButtonStatus();
  } catch (error) {
    gallery.innerHTML = '';
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong, try again later!',
    });
    console.error(error);
  } finally {
    loader.classList.remove('visible');

  }
  checkButtonStatus();

  e.target.reset();
});

loadButton.addEventListener('click', async (e) => {
  e.preventDefault();

  params.page += 1;
  checkButtonStatus();

  try {
    const data = await getImages(params.query, params.page, params.perPage);
    console.log(data);
    const markup = templateImages(data);
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    checkButtonStatus();
  } catch (error) {
    gallery.innerHTML = '';
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong, try again later!',
    });
    console.error(error);
  } finally {
    loader.classList.remove('visible');

  }
})

function showLoadMoreBtn () {
   loadButton.style.display = 'block';
  

}
function hideLoadMoreBtn () {
    loadButton.style.display = 'none';

}
function checkButtonStatus () {
  const perPage = 40;
  const maxPage = Math.ceil(params.total / perPage);
  if (params.page < maxPage) {
    showLoadMoreBtn();
  } else {
    hideLoadMoreBtn();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topLeft',

    })
  }
}