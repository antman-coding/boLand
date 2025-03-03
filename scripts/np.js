// function updateNowPlaying() {
    
//     fetch('/app')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.text();
//       })
//       .then(data => {
//         // Decode URI encoded characters
//         const decodedData = decodeURIComponent(data);
//         document.getElementById('nowPlaying').textContent = "BoTheBanana is listening to " + decodeURIComponent(decodedData)+" | ";
//       })
//       .catch(error => {
//         console.error('Error fetching now playing data:', error);
//         document.getElementById('nowPlaying').textContent = 'Could not load now playing information ';
//       });
    
//   }
  
//   // Call the function to update immediately
//   updateNowPlaying();
  
//   // Optionally, set interval to update periodically (every how ever many the fuck i want seconds)
//   setInterval(updateNowPlaying, 5000);

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
setInterval(updateNowPlaying, 1000);
