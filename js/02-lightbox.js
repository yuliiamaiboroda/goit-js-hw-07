import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryListEl = document.querySelector('.gallery');
const createdImagesItemsMarkup = createGallareListMarks(galleryItems);

function createGallareListMarks (images){
   const items = images.map(({preview, original, description})=> {return `
   <a class="gallery__link" href="${original}">
   <img
     class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"
   />
 </a>`} ).join('');
    return items
}

gallaryListEl.insertAdjacentHTML('afterbegin', createdImagesItemsMarkup);

gallaryListEl.addEventListener('click', openLargeImageHandler);

function openLargeImageHandler(event){
    const hasClass = document.querySelector('.gallery__image');
   
    if (!hasClass){
        return
    }

    event.preventDefault();
}

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom' });
