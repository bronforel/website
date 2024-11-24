const API_BASE_URL = "https://de1.api.radio-browser.info/json";
const searchInput = document.getElementById("searchInput");
const countrySelect = document.getElementById("countrySelect");
const searchButton = document.getElementById("searchButton");
const stationsList = document.getElementById("stations");
const currentStation = document.getElementById("currentStation");
const currentVotes = document.getElementById("currentVotes");
const metadata = document.getElementById("metadata");
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");

let metadataInterval;

// Haal de landenlijst op en vul de dropdown
async function fetchCountries() {
  try {
    const response = await fetch(`${API_BASE_URL}/countries`);
    const countries = await response.json();
    countries.forEach(country => {
      const option = document.createElement("option");
      option.value = country.iso_3166_1; // Gebruik de landcode
      option.textContent = `${country.name} (${country.stationcount} stations)`;
      countrySelect.appendChild(option);
    });
  } catch (error) {
    console.error("Fout bij het ophalen van landen:", error);
  }
}

// Stel standaardland in op basis van geolocatie
async function setDefaultCountry() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
        const locationData = await response.json();
        const countryCode = locationData.countryCode;

        // Stel landcode in de dropdown in
        const options = countrySelect.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].value.toLowerCase() === countryCode.toLowerCase()) {
            countrySelect.selectedIndex = i;
            break;
          }
        }
      } catch (error) {
        console.error("Fout bij het ophalen van landinformatie:", error);
      }
    });
  }
}

// Zoek en toon radiostations
async function fetchStations(query, country) {
  stationsList.innerHTML = "Laden...";
  try {
    const params = new URLSearchParams();
    if (query) params.append("name", query);
    if (country) params.append("countrycode", country);
    params.append("limit", "30");

    const response = await fetch(`${API_BASE_URL}/stations/search?${params.toString()}`);
    const stations = await response.json();

    // Filter stations die een niet-werkende stream kunnen hebben
    const filteredStations = stations.filter(station => station.url_resolved);

    // Toon resultaten
    stationsList.innerHTML = "";
    if (filteredStations.length === 0) {
      stationsList.innerHTML = "<p>Geen resultaten gevonden.</p>";
    } else {
      filteredStations.forEach(station => {
        const li = document.createElement("li");
        li.textContent = station.name;
        li.addEventListener("click", () => playStation(station));
        stationsList.appendChild(li);
      });
    }
  } catch (error) {
    console.error("Fout bij het ophalen van stations:", error);
    stationsList.innerHTML = "<p>Fout bij het ophalen van resultaten.</p>";
  }
}
// Speel station af
function playStation(station) {
  document.getElementById("player").style.display = "block";
  currentStation.textContent = station.name;

  audioSource.src = station.url_resolved;
  audioPlayer.load();
  audioPlayer.play();

  // Toon genre
  const genre = station.tags ? station.tags : "Genre niet beschikbaar";
  metadata.textContent = `Genre: ${genre}`;

  // Toon votes
  const votes = station.votes ? station.votes : "Niet beoordeeld";
  currentVotes.textContent = `Waardering: ${votes}`;

  // Update metadata periodiek
  if (metadataInterval) clearInterval(metadataInterval);
  metadataInterval = setInterval(() => fetchMetadata(station.url_resolved), 15000);
}

// Haal metadata van huidige stream op
async function fetchMetadata(streamUrl) {
  try {
    // Metadata ophalen of verwerken
    metadata.textContent += ""; // Placeholder
  } catch (error) {
    console.error("Fout bij ophalen van metadata:", error);
  }
}

// Zoekfunctie activeren met zoekknop of Enter-toets
function handleSearch() {
  const query = searchInput.value.trim();
  const country = countrySelect.value;
  fetchStations(query, country);
}

// Event: Zoekknop
searchButton.addEventListener("click", handleSearch);

// Event: Enter-toets in zoekveld
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

// Initialiseer app
(async function initialize() {
  await fetchCountries();
  await setDefaultCountry();
})();
