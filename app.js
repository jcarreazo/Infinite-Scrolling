const loader = document.querySelector("#loader");
const imagesWrapper = document.querySelector(".scroll-wrapper")
loader.hidden = true;
let photosArray;
let newArray;
const count = 10;
const apiKey = "z3n8ftkJtMh2HPr0b3aRhNCIxsb0ugTaFVDKeLtpOFk";
const API = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
};

function showPhotos() {
    photosArray.forEach((pics) => {
        const item = document.createElement('a');
        setAttributes(item, {
            "href": pics.links.html,
            "target": "_blank"
        })

        const img = document.createElement('img');
        setAttributes(img, {
            "src":pics.urls.regular,
            "alt":pics.alt_description,
            "title":pics.alt_description
        })

        item.appendChild(img);
        imagesWrapper.appendChild(item);
    });
}

async function getPhotos() {
    try {
        const response = await fetch(API);
        photosArray = await response.json();
        showPhotos();
    } catch (error) {
        e = new Error(error);
        console.log(e);
    }
}
getPhotos();