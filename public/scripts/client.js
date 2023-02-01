/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() {
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const renderTweets = function(tweets) {
  for(tweetObj of tweets) {
    // console.log("===================", tweetObj)
    const $tweetElement = createTweetElement(tweetObj);
    $('#tweets-container').append($tweetElement)
  }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}

// took in article from index.html and using template literal inserted values
const createTweetElement = function(tweet) {
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
  <p class="user-post">${tweet.content.text}</p>
  <footer> 
    ${tweet.created_at}
    <span>
      <i class="fa-sharp fa-solid fa-flag"></i>
      <i class="fa-sharp fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </span>
  </footer>
</article>`
// console.log('++++++++++++++', $tweet)
  return $tweet;
}

$('.tweet-form').submit(function (evt) {
  evt.preventDefault();
  const tweetData = $('#tweet-text').val()
  //validate data here
  const serializeTweet = $(this).serialize()
  console.log("#1 ", tweetData)
  console.log("#2 ", serializeTweet)
  console.log("#0 ", this)
})


// createTweetElement(tweetData[1]);
renderTweets(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})