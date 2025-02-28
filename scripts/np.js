function updateNowPlaying() {
    fetch('/app')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('nowPlaying').textContent = data;
      })
      .catch(error => {
        console.error('Error fetching now playing data:', error);
        document.getElementById('nowPlaying').textContent = 'Could not load now playing information';
      });
  }
  
  // Call the function to update immediately
  updateNowPlaying();
  
  // Optionally, set interval to update periodically (every 30 seconds)
  setInterval(updateNowPlaying, 30000);