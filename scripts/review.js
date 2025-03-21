function getReviewsString(file, callback) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        callback(data); // This provides just the string value to your callback
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
        callback(null); // Return null if there's an error
      });
}
function updateList(by, way){
getReviewsString('./reviews.json', (reviewsString) => {
    if (reviewsString) {
        const review = JSON.parse(reviewsString);


        const sortedReviews = sortReviews(review.reviews, by, way);

        content = ""; 
        for (let i = 0; i < sortedReviews.length; i++) {
            const rev = sortedReviews[i];
            if (i === 0) {
                content += "<div class=\"center-cont firstElem\"><div class=\"nav review\"><div class=\"cont\"><h1 class=\"rewiewTitle\">" + rev.album + " - " + rev.artist +"</h1><div class=\"nonTitle\"><div class=\"imagePlusRating\"><img class=\"reviewImage\" src=\"" + rev.albumArt + "\"><div class=\"rating\">" + rev.rating + "/6</div></div><span class=\"reviewContent\">" + rev.content + "</span></div></div></div></div>";
            } else {
                content += "<div class=\"center-cont\"><div class=\"nav review\"><div class=\"cont\"><h1 class=\"rewiewTitle\">" + rev.album + " - " + rev.artist +"</h1><div class=\"nonTitle\"><div class=\"imagePlusRating\"><img class=\"reviewImage\" src=\"" + rev.albumArt + "\"><div class=\"rating\">" + rev.rating + "/6</div></div><span class=\"reviewContent\">" + rev.content + "</span></div></div></div></div>";
            }
        }

        document.getElementById("content").innerHTML = content;
    }
});
}
function sortReviews(reviews, sortBy = 'time', order = 'desc') {
    return reviews.sort((a, b) => {
        if (order === 'asc') {
            return a[sortBy] - b[sortBy];
        } else {
            return b[sortBy] - a[sortBy];
        }
    });
}
updateList('time', 'desc')