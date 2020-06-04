import Tweet from "../schemas/Tweet";

export async function save(tweet: { title: string; description?: string; }) {
  console.log(tweet);

  let tweetWillBeSaved = new Tweet(tweet);

  tweetWillBeSaved.save().then(saved => {
    return saved;
  });
}