
export function templateImage(image) {
    const {
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
  } = image;
  
    const altText = image.tags.split(',')[0];
    return `
    <li class="gallery-item">
    <div class="wrapper"> 

     <a href="${largeImageURL}" class="gallery-link" >
    <img src="${webformatURL}"
      class="gallery-image"
      alt="${altText}"
    />
  </a>
  
    </div>
<div class="details">
  <p class="detail-info">Likes<br><span class="detail-value"> ${likes}</span></p>
  <p class="detail-info">Views<br><span class="detail-value"> ${views}</span> </p>
  <p class="detail-info">Comments<br><span class="detail-value"> ${comments}</span> </p>
  <p class="detail-info">Downloads<br><span class="detail-value"> ${downloads}</span> </p>

  </div>
    </li>
    `;
};
export function templateImages(images) {
    return images.map(templateImage).join("")
    }
