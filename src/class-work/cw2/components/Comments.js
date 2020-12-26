import React from "react";
import { Comment, Icon } from "semantic-ui-react";
import LoadingOverlay from "./LoadingOverlay";

function Comments(props) {
  const { comments, loading } = props;
  console.log(comments);
  return (
    <div className="comment-fixed">
      <LoadingOverlay active={loading} />
      {comments.map((comment) => {
        return (
          <Comment.Group key={comment.id}>
            <Comment>
              <Comment.Avatar
                as="a"
                src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
              />
              <Comment.Content>
                <Comment.Author>{comment.name}</Comment.Author>
                <Comment.Text>{comment.body}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                  <Comment.Action>Save</Comment.Action>
                  <Comment.Action>Hide</Comment.Action>
                  <Comment.Action>
                    <Icon name="expand" />
                    Full-screen
                  </Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        );
      })}
    </div>
  );
}

export default Comments;
