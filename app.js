const form = document.querySelector('form');
const gifArea = document.querySelector('#gif-area');
const searchInput = document.querySelector('#search');
const removeButton = document.querySelector('#remove');

/* use ajax result to add a gif */

// ES2015 USING AJAX TO ADD A GIF

const addGif = res => {
  let numResults = res.data.length;
  if (numResults) {
    let randomIndex = Math.floor(Math.random() * numResults);
    let newCol = document.createElement('div');
    newCol.setAttribute('class', 'col-md-4 col-lg-3 col-12 mb-4');
    let newGif = document.createElement('img');
    newGif.setAttribute('class', 'w-100');
    newGif.setAttribute('src', res.data[randomIndex].images.original.url);
    newCol.append(newGif);
    gifArea.append(newCol);
  }
};

/* handle form submission: clear search box & make ajax call */

// ES2015 HANDLE SUBMISSION: CLEAR SEARCH AND MAKE AJAX CALL
form.addEventListener('submit', async function(e) {
  e.preventDefault();

  let searchTerm = searchInput.value;
  searchInput.value = '';

  const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchTerm,
      api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
    }
  });
  addGif(response.data);
});

//ES2015 REMOVE gifs
removeButton.addEventListener('click', function() {
  while (gifArea.firstChild) {
    gifArea.removeChild(gifArea.firstChild);
  }
});
