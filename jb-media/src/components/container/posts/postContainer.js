import { Component } from "react";
import React from 'react';
import { connect } from "react-redux";
import fetchPosts from "../../../actions/getPostActions";
import moment from "moment"
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

        let card = this.state.posts.map((post) =>(
            <div class="col-sm-4 py-3">
            <div className="card " key={post.slug}>
            <img  src={post.image_path} alt="post img" className="emage" />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.author.username}</p>
            <p><small class="text-muted">{moment(post.created_at).fromNow()}</small></p>
            </div>
            </div>
          </div>
                ))


        return (
            // <div className="container">
            <div class="#">
                {!this.state.posts?(
                    <p>No Posts found</p>
                ):(
                    <div class="row">
                    {card}
                  </div>
                )}
                </div>
            // </div>
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
