import React from 'react';
import logo from './logo.svg';
import './App.css';
import Events from './components/events'
import Bestseller from './components/bestseller'
import Books from './components/books'
import Discussion from './components/discussionboard'
import Home from './components/home'
import MyShelf from './components/myshelf'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html">MyBookShelf</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="myShelf.html">MyShelf <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="bookClub.html">Book Club</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Explore
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Best Sellers</a>
                <a class="dropdown-item" href="events.html">Book Events</a>
                <a class="dropdown-item" href="discussion.html">Discussion Board</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Switch>
                <Route path="/home" component={Home} />
                <Route path="/bestseller" component={Bestseller} />
                <Route path="/books" component={Books} />
                <Route path="/discussionboard" component={Discussion} />
                <Route path="/events" component={Events} />
                <Route path="/myshelf" component={MyShelf} />
                <Route path="/navbar" component={Navbar} />
      </Switch>
    </div>
  );
}

export default App;
