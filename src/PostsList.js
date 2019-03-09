import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostsList extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.setState({
          posts
        })
      });
  }

  render() {
    const { posts } = this.state;
    return [
        posts.map(post => (
          <div key={post.id} >
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </div>
        ))
    ]
  }
}