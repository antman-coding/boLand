
function updateNowPlaying() {
  fetch('/app')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Expect JSON response
    })
    .then(data => {
      document.getElementById('nowPlaying').textContent = decodeURIComponent(decodeURIComponent(`BoTheBanana is listening to ${data.song} by ${data.artist} | `));
    })
    .catch(error => {
      console.error('Error fetching now playing data:', error);
      document.getElementById('nowPlaying').textContent = 'Could not load now playing information ';
    });
}

// Call the function to update immediately
updateNowPlaying();

// got a lot more ballsy about this. surely my server wont get ip banned by librefm Clueless
setInterval(updateNowPlaying, 2000);
