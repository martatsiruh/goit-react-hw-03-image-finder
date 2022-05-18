function fetchImages(searchImageName, page) {
    const API_KEY = '25615179-bc6a5ca344d9399e59b708cec';

    return fetch(
        `https://pixabay.com/api/?q=${searchImageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    ).then(response => {
        if (response.ok) {
            return response.json();
        }

    return response;
    });
}

export default fetchImages;