import React, { Component } from "react";
import PostList from "./components/PostList";
import AuthorInfo from "./components/AuthorInfo";
import { Grid } from "semantic-ui-react";

class Blog extends Component {
  state = {
    selectedAuthorId: null,
  };

  componentDidCatch(error) {
    console.log(error);
  }

  onSelectPost = (post) => {
    this.setState({ selectedAuthorId: post.userId });
  };

  render() {
    const { selectedAuthorId, hasError } = this.state;
    if (hasError) return <button>Update</button>;
    return (
      <Grid>
        <Grid.Column width={8}>
          <PostList onPostClick={this.onSelectPost} />
        </Grid.Column>
        <Grid.Column width={6}>
          <AuthorInfo authorId={selectedAuthorId} />
        </Grid.Column>
      </Grid>
    );
  }
}
export default Blog;
