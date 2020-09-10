import React, {Component, useState} from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import comment from '../components/img/comment.png';

class discussion extends Component {
  state = {
    bookTitle: '',
    headline: '',
    review: ''
  };

  render () {

    return (
      <div>
        <figure className="image">
          <img width={1680} height={300} src={comment} frameBorder={0} allowFullScreen />
        </figure>
        <br />

        <div className="container" style={{paddingLeft: '200px', paddingRight: '200px'}}>
          <div className="field">
            <label className="label">Book Title</label>
            <div className="control">
              <input className="input is-primary" type="text" placeholder="Book name" onChange={(e) => {
                this.setState({bookTile: e.currentTarget.value})
              }} />
            </div>
          </div>
          <div className="field">
            <label className="label">Headline</label>
            <div className="control">
              <input className="input is-primary" type="text" placeholder="Review Title" onChange={(e) => {
                this.setState({headline: e.currentTarget.value})
              }}  />
              <div className="field">
                <label className="label">Review</label>
                <div className="control">
                  <textarea className="textarea is-primary" style={{width: '60%'}} placeholder="What did you like or dislike?" defaultValue={""}  onChange={(e) => {
                    this.setState({review: e.currentTarget.value})
                  }}  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-warning" onClick={() => {
                    // axios.post
                    // here we do a POST to /api/reviews with the data of this.state
                    debugger
                  }}>Post</button>
                </div>
              </div>
              <br />

              <figure className="image">
                <img width={1680} height={50} src="assets/reviews.png" frameBorder={0} allowFullScreen />
              </figure>
              <br />
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Book Title</strong> <small>Headline</small>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                  </div>
                </div>
              </article>
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Book Title</strong> <small>Headline</small>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div></div></div>
    );
  }
}

export default discussion;
