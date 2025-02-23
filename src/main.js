
import { getImages } from './js/pixabay-api';
import { templateImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchform = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loaderMore = document.querySelector('.loader-more');
const loadButton = document.querySelector('.load-button-style');
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const params = {
  query: '',
  page: 1,
  perPage: 40,
  total: 0,
};

hideLoadMoreBtn();
hideLoaderMore();

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

  gallery.innerHTML = '';
  hideLoadMoreBtn();
  hideLoaderMore();
  loader.classList.add('visible');

  try {
    const data = await getImages(params.query, params.page, params.perPage);
    params.total = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        message: 'No images found. Try another query.',
        position: 'topRight',
      });
      return;
    }

    gallery.insertAdjacentHTML('beforeend', templateImages(data.hits));
    lightbox.refresh();
    checkButtonStatus();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong, try again later!',
    });
    console.error(error);
  } finally {
    loader.classList.remove('visible');
  }

  e.target.reset();
});

loadButton.addEventListener('click', async e => {
  e.preventDefault();
  params.page += 1;

  hideLoadMoreBtn();
  showLoaderMore();
  

  try {
    const data = await getImages(params.query, params.page, params.perPage);

    gallery.insertAdjacentHTML('beforeend', templateImages(data.hits));
    lightbox.refresh();
    smoothScroll(); 
    checkButtonStatus();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong, try again later!',
    });
    console.error(error);
  } finally {
    hideLoaderMore(); 
  }
});

function showLoadMoreBtn() {
  loadButton.style.display = 'block';
}

function hideLoadMoreBtn() {
  loadButton.style.display = 'none';
}

function showLoaderMore() {
  loaderMore.classList.add('visible');
}

function hideLoaderMore() {
  loaderMore.classList.remove('visible');
}

function checkButtonStatus() {
  const maxPage = Math.ceil(params.total / params.perPage);

  if (params.page < maxPage) {
    showLoadMoreBtn(); 
  } else {
    hideLoadMoreBtn();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topLeft',
    });
  }
}

function smoothScroll() {
  console.log("Прокручування виконується...")
  const galleryItem = document.querySelector('.gallery a'); 
  const cardHeight = galleryItem.getBoundingClientRect().height; 

  window.scrollBy({
    top: cardHeight * 2,
    left: 0,
    behavior: "smooth", 
  });
}
