import { combineReducers, createStore} from 'redux';

export const LIKE_TWEET = '[Tweet] like user tweet';
export const RETWEET_TWEET = '[Tweet] retweet user tweet';
export const DELETE_TWEET = '[Tweet] delete tweet';

let id = Math.random() * 5;

export const LIKE_ACTION = {
    type: LIKE_TWEET,
    payload: {
        id: id++,
        tweetId : 'the land is green',
        userId: 'josp'
    }
}
export const RETWEET_ACTION = {
    type: RETWEET_TWEET,
    payload: {
        id: id++,
        tweetId : 'election is suspended',
        userId: 'adisco4420'
    }
}
const instialState = {
    tweets: []
}

function reducer(state = instialState, action) {
    switch (action.type) {
        case LIKE_TWEET:
            return Object.assign(
                state,
                {},
                {
                    tweets: state.tweets.concat(action.payload)
                }
            )
        case RETWEET_TWEET:
            return Object.assign(
                state,
                {},
                {
                    tweets: state.tweets.concat(action.payload)
                }
            )
        case DELETE_TWEET:
                return {
                    tweets: state.tweets.filter((tweet) => tweet.id !== 
                    action.payload.id)
                }
        default:
        return state;
            break;
          
    }
}
// function secondReducer(state = instialState, action) {
//     switch (action.type) {
//         case RETWEET_TWEET:
//             // console.log(action.payload);
//             return {
//                 tweet: action.payload
//             }         
//             break;
    
//         default:
//         return state;
//             break;
//     }
// }
// console.log(reducer(instialState, LIKE_ACTION));

const reducers = combineReducers({
    reducer,
   
})

export const store = createStore(reducer, instialState)

// store.dispatch(LIKE_ACTION)