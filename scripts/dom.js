import { getBooks } from "./api.js";
import { card } from "./bookCard.js";

const form = document.getElementById("searchForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchString = document.getElementById("searchInput").value;
    const books = await getBooks(searchString);

    console.log(books);
    const noImage =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png";
    document.getElementById("display").innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        let imgSrc = "";
        if (books[i].volumeInfo.imageLinks !== undefined) {
            imgSrc = books[i].volumeInfo.imageLinks.thumbnail;
        } else imgSrc = noImage;
        const authors = books[i].volumeInfo.authors;
        const title = books[i].volumeInfo.title;
        const description =
            books[i].volumeInfo.description || "No description available";

        document.getElementById("display").innerHTML += card(
            imgSrc,
            title,
            authors,
            description
        );
    }
});
