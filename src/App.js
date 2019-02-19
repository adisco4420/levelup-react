import React, { Component } from 'react';
import './App.css';
import {store, DELETE_TWEET, LIKE_TWEET, RETWEET_TWEET } from './actions/index';

let id = 0;
class App extends Component {
  state = {
    tweets: []
  }
  componentDidMount(){
    store.subscribe(() => {
      this.setState({tweets: store.getState().tweets})
      // console.log(store.getState());
    })
  }
  render() {
    const  {tweets} = this.state;
    return (
      <div>
        { 
          tweets.map((tweet, index) => {
            return <div key={index}>
                <p>{tweet.tweetId}</p>
                <p>{tweet.userId}</p>
                <button 
                    onClick={() => store.dispatch({type: DELETE_TWEET, payload: tweet} )} >delete</button>
              </div>
          })
        }
        <button onClick={() => store.dispatch({
          type: LIKE_TWEET,
          payload: {
            id: id++,
            tweetId: 'The election is prostone',
            userId: 'Sodiq'
          }
        })}>Tweet</button>
        <button onClick={() => store.dispatch({
          type: RETWEET_TWEET,
          payload: {
            id: id++,
            tweetId: 'this is a update',
            userId: 'Anoumous'
          }
        })}>Retweet</button>
      </div>
    );
  }
}

export default App;
