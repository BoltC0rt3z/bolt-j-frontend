import { Component } from "react";
import React from 'react';
import { connect } from "react-redux";
import fetchPosts from "../../../actions/getPostActions";

import PropTypes from 'prop-types';

class GetPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
       fetchPosts();
      }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
          this.setState({
            posts: nextProps.posts
          });
        }
      }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="col-md-12">
                {!this.state.posts?(
                    <p>No Posts found</p>
                ):(
                    <div className="col-sm-4">
                        {this.state.posts && this.state.posts.map((post, index) =>(
                            <div className="thumbnail" key={post.slug}>
                            <p>{index}</p>
                            <img  src={post.image_path} alt="post img" />
                                <div>
                                    {post.title}
                                    <hr/>
                                    {post.body}
                                    <hr/>
                                    <div>by {post.author.username}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                </div>
            </div>
        );
    }
}

GetPosts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array,
    errors: PropTypes.object
};

const mapStateToProps = state =>({

    posts: state.getPostsReducer.posts,
    errors: state.errors
}
)

export default connect(mapStateToProps, fetchPosts)(GetPosts);
