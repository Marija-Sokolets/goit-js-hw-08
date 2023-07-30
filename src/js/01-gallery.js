// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map((url) =>
    `<li class= "gallery_item">
        <a class="gallery_link" href="${url.original}">
            <img class="gallery_image"
            src="${url.preview}" 
            alt="${url.description}"
            />
        </a>
    </li>`
).join("");

gallery.insertAdjacentHTML("beforeend", markup);

    new SimpleLightbox (".gallery a", {
        captions: true,
        captionsData: "alt",
        captionPosition: "bottom", 
        captionDelay: 250,
    });