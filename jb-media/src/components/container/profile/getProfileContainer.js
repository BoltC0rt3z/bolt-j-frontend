import { Component } from "react";
import React from "react";
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import moment from "moment";

import getProfile from "../../../actions/getProfileActions";
const username = localStorage.getItem("username");
class GetProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile:[]
        };
    }
    componentDidMount(){
        this.props.getProfile(username)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({
                profile: nextProps.profile
                });
            }
        }

    render() {
        const { profile } = this.state.profile
        if (profile){
            let userProfile = profile[0]
            // toast profile[1]
            return (
                <div className="container">
                <div className="col-sm-5 text-center prof responsive">
                    <div>
                    <img src={userProfile.image} alt="prof" style={{ width: "130px", height: "130px" }}/>
                    </div>
                    <div className="col-sm-12 text-left">
                        <div>Personal info <hr/> </div>
                        <div>Username: {userProfile.username}</div>
                        <div>Member since: {moment(userProfile.created_at).fromNow()}</div>
                        <div>Fname: {userProfile.First_name}</div>
                        <div>Lname: {userProfile.Last_name}</div>
                        <div>Bio: {userProfile.bio}</div>
                        <div>Company: {userProfile.company}</div>
                        <div>Location: {userProfile.location}</div>
                        <div>Updated: {moment(userProfile.updated_at).fromNow()}</div>
                    </div>
                </div>
                </div>
                // <div className="container prof">
                // <div class="card" style={{width: 380}}>
                // <img class="card-img-top" src="..." alt="Card image cap"/>
                // <div class="card-body">
                // <h5 class="card-title">Card title</h5>
                // <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //  <a href="#" class="btn btn-primary">Go somewhere</a>
                // </div>
                // </div>
                // </div>
            );
        }
        console.log("tuonyeshe",profile)
        return (
            <div>
            profile does not exist
            </div>
        );
    }
}

GetProfile.propTypes = {
    getProfile:PropTypes.func.isRequired,
    profile:PropTypes.array,
    msg: PropTypes.object
};

const mapStateToProps = (state) =>({
    profile:state.getProfileReducer.profile,
    errors:state.getProfileReducer.errors
})

const mapDispatchToProps = dispatch =>({
    getProfile: username =>dispatch(
        getProfile(username)
    )
}); 


export default connect(mapStateToProps,mapDispatchToProps)(GetProfile);
