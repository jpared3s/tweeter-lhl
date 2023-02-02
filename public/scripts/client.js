/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() {
// const tweetData = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  console.log(div.innerHTML)
  return div.innerHTML;
};

const renderTweets = function(tweets) {
  for(tweetObj of tweets) {
    const $tweetElement = createTweetElement(tweetObj);
    $('#tweets-container').append($tweetElement)
  }
}

// took in article from index.html and using template literal inserted values
const createTweetElement = function(tweet) {
  $("time.timeago").timeago();
  let $tweet = `
  <article class="tweet-container">
  <header>
    <div>
      <i class="fa fa-user" aria-hidden="true"></i>
    <span>${tweet.user.name}</span>
    </div>
    <div>
      ${tweet.user.handle}
    </div>
  </header>
  <p class="user-post">${escape(tweet.content.text)}</p>
  <footer> 
    ${$.timeago(tweet.created_at)}
    <span>
      <i class="fa-sharp fa-solid fa-flag"></i>
      <i class="fa-sharp fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </span>
  </footer>
</article>`
  return $tweet;
}

$('.tweet-form').submit(function (evt) {
  evt.preventDefault();
  const tweetData = $('#tweet-text').val()
  if (!tweetData.length) {
    alert("No text detected.")
  } else if (tweetData.length > 140) {
    alert("Your post must be less then 140 characters")
  }
  const serializeTweet = $(this).serialize()
  $.post('http://localhost:8080/tweets', serializeTweet,(result) => {
    loadTweets()
  })
})

const loadTweets = () => {
  $.get('http://localhost:8080/tweets', (data) => { 
    console.log("Fetched succesfully: ", data)
    renderTweets(data);
  }) 
}

loadTweets();

// createTweetElement(tweetData[1]);
// renderTweets(tweetData);
// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})