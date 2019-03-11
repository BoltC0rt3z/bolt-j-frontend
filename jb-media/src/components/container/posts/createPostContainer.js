/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as createPostActions from "../../../actions/createPost";
import CreateForm from "../../posts/createPostsComponent";
import imageUploader from "../../../actions/image";

export class createPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      image: "/"
    };
  }

  componentDidMount() {
    const { actions } = this.props;
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleBodyChange = (event) => {
    const content = event.editor.getData();
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
    this.props.actions.createPost(postData);
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
  actions: bindActionCreators(createPostActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createPost);
