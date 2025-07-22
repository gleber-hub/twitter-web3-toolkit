import { useState, useEffect } from "react";

export default function Home() {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  // Заглушка: сюда будет web3 взаимодействие и загрузка твитов из блокчейна
  const loadTweets = () => {
    // Пока пусто - имитируем список твитов
    setTweets([
      {id: 0, author: "0x123...abc", content: "Hello Web3 Twitter!", timestamp: 1690060000},
      {id: 1, author: "0x456...def", content: "My first decentralized tweet!", timestamp: 1690150000},
    ]);
  };

  useEffect(() => {
    loadTweets();
  }, []);

  const postTweet = () => {
    if (tweet.trim() === "") return;
    alert(`In real app, this will call smart contract to post: ${tweet}`);
    setTweet("");
  };

  function formatTimestamp(ts) {
    return new Date(ts * 1000).toLocaleString();
  }

  return (
    <div style={{ maxWidth: 600, margin: "30px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Web3 Twitter Clone</h1>

      <textarea
        rows={3}
        cols={50}
        placeholder="What's happening?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />
      <br />
      <button onClick={postTweet} disabled={tweet.trim() === ""}>Post Tweet</button>

      <h2>Tweets</h2>
      {tweets.length === 0 && <p>No tweets yet</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tweets.map(({ id, author, content, timestamp }) => (
          <li key={id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <p>{content}</p>
            <small>By {author}</small><br />
            <small>{formatTimestamp(timestamp)}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
