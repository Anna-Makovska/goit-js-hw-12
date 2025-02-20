// import { getImages } from "./js/pixabay-api";
// import { templateImages } from "./js/render-functions";
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";


// const searchform = document.querySelector('.search-form');
// const gallery = document.querySelector('.gallery');
// const loader = document.querySelector('.loader');

// searchform.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const query = searchform.elements.searchQuery.value.trim();
//     if (query === "") {
//         iziToast.warning({
//             message: "Please, fill the form!",
//             position: "topRight"
//         })
//         return
//   }
//   loader.classList.add('visible');
//     getImages(query)
//         .then(
//             data =>
//         {
//         console.log(data);
//         const markup = templateImages(data);
//             gallery.innerHTML = markup;
//             lightbox.refresh();
            
//       })

//       .catch(error => {
//         iziToast.error({
//           title: 'Error',
//           message: 'Something went wrong, try again later!',
//         });
//         console.error(error);
//       })
//       .finally(() => {
//   loader.classList.remove('visible');
    
//   })
      
//     e.target.reset();
// })
// const lightbox = new SimpleLightbox('.gallery a', {
//   captions: true,
//   captionsData: 'alt',
//   captionDelay: 250,
// });
import { getImages } from './js/pixabay-api';
import { templateImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchform = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

searchform.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchform.elements.searchQuery.value.trim();
  if (query === '') {
    iziToast.warning({
      message: 'Please, fill the form!',
      position: 'topRight',
    });
    return;
  }
  loader.classList.add('visible');

  getImages(query)
    .then(data => {
      console.log(data);
      const markup = templateImages(data);
      gallery.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong, try again later!',
      });
      console.error(error);
    })
    .finally(() => {
      loader.classList.remove('visible');
    });

  e.target.reset();
});