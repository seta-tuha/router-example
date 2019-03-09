import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class PostDetails extends Component {
  state = {
    post: {},
    loading: false
  }

  getPost = (postId) => {
    this.setState({
      loading: true
    })
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          post: data,
          loading: false
        })
      })
  }

  componentDidMount() {
    const { postId } = this.props.match.params;
    this.getPost(postId);
  }

  componentDidUpdate(prevProps, prevState) {
    const { postId } = this.props.match.params;
    const oldPostId = prevProps.match.params.postId;

    if (postId !== oldPostId) {
      this.getPost(postId);
    }
  }
  

  render() {
    const { post, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>
    }
    const { postId } = this.props.match.params;
    const postIdNum = parseInt(postId, 10);
    const previousPostId = postIdNum > 0 ? postIdNum - 1 : 0;
    const nextPostId = postIdNum + 1;
    return (
      <Fragment>
        <div>
          <Link to={`/posts/${previousPostId}`}>{'< Back'}</Link>
          <Link to={`/posts/${nextPostId}`}>{'Next >'}</Link>
        </div>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
      </Fragment>
    )
  }
}