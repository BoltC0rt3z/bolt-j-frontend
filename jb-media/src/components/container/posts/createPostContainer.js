/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import createPost from "../../../actions/createPost";
import CreateForm from "../../posts/createPostsComponent";
import imageUploader from "../../../actions/image";

export class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      image: "/"
    };
  }

//   componentDidMount() {
//     const { actions } = this.props;
//   }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleBodyChange = (e) => {
    const content = e.editor.getData();
    this.setState({
      body: content
    });
  };

  fileHandler = (e) => {
    const selectFile = e.target.files[0];
    imageUploader({
      image: selectFile
    }).then(response => this.setState({
    // eslint-disable-next-line indent
    image: response.data.secure_url
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      title, body, image
    } = this.state;
    const postData = {
      title: title,
      body: body,
      image_path: image
    };
    this.props.createPost(postData);
  };

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <CreateForm
          title={title}
          body={body}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
          handleBodyChange={this.handleBodyChange}
          fileHandler={this.fileHandler}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  post: state.createPost,
  errors: state.errors
});

export const mapDispatchToProps = dispatch => ({
    createPost: postData =>dispatch(createPost(postData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
