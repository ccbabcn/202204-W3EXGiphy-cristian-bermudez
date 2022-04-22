const appKey = "40UFx6kaYbEb2PKwoZkQAGdekswbhukh";

const searchInput = document.querySelector(".search");
const formSearch = document.querySelector(".search-form");
const imageContainer = document.querySelector(".gif");

const randomGifByTag = async (searchValue) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${appKey}&tag=${searchValue}&rating=g`
  );
  const gifsData = await response.json();
  return gifsData;
};

formSearch.addEventListener("submit", async (event) => {
  event.preventDefault();
  const gifImage = await randomGifByTag(searchInput.value);
  const gifURL = gifImage.data.images.original.url;
  imageContainer.setAttribute("src", gifURL);
});
