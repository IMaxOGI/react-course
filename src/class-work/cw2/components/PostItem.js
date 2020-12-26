import React, { Component } from "react";
import { Feed, Header } from "semantic-ui-react";
import Comments from "./Comments";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      loading: false,
    };
  }

  fetchComments = () => {
    const { post } = this.props;
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then((data) => this.setState({ comments: data, loading: false }))
      .catch((e) =>
        this.setState({ error: e.message, loading: false, comments: [] })
      );
  };

  render() {
    const { post, onClick } = this.props;
    const { comments, loading } = this.state;
    return (
      <div>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <img src="https://react.semantic-ui.com/images/avatar/small/justen.jpg" />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary onClick={onClick}>
                <Feed.User>{post.title}</Feed.User>
              </Feed.Summary>
              <Feed.Extra text>{post.body}</Feed.Extra>
            </Feed.Content>
          </Feed.Event>
        </Feed>
        <Header className="comments-block" onClick={this.fetchComments}>
          Comments
          {comments.length > 0 && (
            <Comments comments={comments} loading={loading} />
          )}
        </Header>
      </div>
    );
  }
}

export default PostItem;
