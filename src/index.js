import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/RootReducer'
import MOVIES_MOCK_DATA from './MOVIES_MOCK_DATA.json'

let store = createStore(rootReducer);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(results => {
        return results.json()
    })
    .then(data => {
        initiateUsers(data);
    })
    .catch((error) => {
        console.log('Fetch Error :-S', error);
    });

function initiateUsers(data){
    if(JSON.parse(localStorage.getItem('users')))
        return;
    let users = {};
    data.forEach(element => {
        let user = Object.assign(element, {checkedOut:[]});
        users[user.username] = user;
    });
    localStorage.setItem('users', JSON.stringify(users));
}

function initiateMovieList(){
    if(JSON.parse(localStorage.getItem('movieData')))
        return;
    let movieData = [];
    MOVIES_MOCK_DATA.forEach(element => {
        let movieObj = {id: element.id, movieTitle: element.movie_title,
            movieTag: element.movie_tags.split("|"), checkout: false, reviews: []
        };
        movieData.push(movieObj);
    });
    localStorage.setItem('movieData', JSON.stringify(movieData));
}

initiateMovieList();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

