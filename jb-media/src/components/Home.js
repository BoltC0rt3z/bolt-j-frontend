import React from "react";

import GetPosts from "./container/posts/postContainer";

const Home = () => (
  <div>
  <div className="row">
  <img class="img-responsive container-fluid" src="https://images.unsplash.com/photo-1519531600234-f878794d387b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
  </div>
  <div className="container">
    <div className="kudevide">
    <p>All posts</p>
    <hr/>
    </div>
  </div>
  <div className="container">
          <GetPosts />
  </div>
  </div>
);

export default Home;
