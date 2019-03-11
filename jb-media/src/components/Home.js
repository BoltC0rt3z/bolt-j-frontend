import React from "react";

import GetPosts from "./container/posts/postContainer";

const Home = () => (
  <div className="container">
    <div className="row">
        <div className="col-sm-12">
          <GetPosts />
        </div>
    </div>
  </div>
);

export default Home;
