export const getBooks = async (searchString) => {
    if (!searchString) {
        alert("Please enter a search string");
    }
    const responsePromise = fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=39`
    );
    const response = await responsePromise;
    const jsonResponse = await response.json();
    return jsonResponse.items;
};
