let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  fetch(`${url}${input}`)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
			<div class="word">
				<h3>${input}</h3>
				<button onclick="playSound()">
					<i class="fa-solid fa-volume-high"></i>
				</button>
			</div>
			<div class="details">
				<p>${data[0].meanings[0].partOfSpeech}</p>
				<p>${data[0].phonetic}</p>
			</div>
			<p class="word-meaning">
				${data[0].meanings[0].definitions[0].definition}
			</p>
			<p class="word-example">
				${data[0].meanings[0].definitions[0].example || ""}
			</p>`;
			sound.setAttribute('src', `https:${data[0].phonetics[1].audio}`)
			console.log(sound);
    }).catch(() => {
			result.innerHTML = `<h3 class="error">Couldn't find the word</h3>`
		})
});

	function playSound() {
		sound.play()
	}