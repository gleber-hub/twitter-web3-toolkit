// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Twitter {
    struct Tweet {
        uint256 id;
        address author;
        string content;
        uint256 timestamp;
    }

    Tweet[] public tweets;

    event NewTweet(uint256 id, address author, string content, uint256 timestamp);

    function postTweet(string calldata _content) external {
        require(bytes(_content).length > 0, "Tweet cannot be empty");
        tweets.push(Tweet(tweets.length, msg.sender, _content, block.timestamp));
        emit NewTweet(tweets.length - 1, msg.sender, _content, block.timestamp);
    }

    function getTweetsCount() external view returns (uint256) {
        return tweets.length;
    }

    function getTweet(uint256 _id) external view returns (Tweet memory) {
        require(_id < tweets.length, "Invalid tweet id");
        return tweets[_id];
    }
}
