/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prop-types */
import React from "react";
// import {
//   Container,
//   Grid, Form, Input
// } from "semantic-ui-react";
import CKEditor from "react-ckeditor-component";


const CreateForm = ({ ...props }) => {
  const {
    title,
    body,
    handleSubmit,
    onChange,
    handleBodyChange,
    fileHandler
  } = props;

  return (
    // <Container className="articleEditor">
    //   <Grid divided="vertically">
    //     <Grid.Row>
    //       <Grid.Column>
    //         <Form onSubmit={handleSubmit}>
    //           <Form.Field>
    //             <Input
    //               focus
    //               name="title"
    //               value={title}
    //               onChange={onChange}
    //               type="text"
    //               placeholder=" Enter title"
    //             />
    //           </Form.Field>
    //           <br />
    //           <div>
    //             <label>Image</label>
    //             <br />
    //             <Input
    //               focus
    //               type="file"
    //               placeholder="Enter Image"
    //               onChange={fileHandler}
    //             />
    //           </div>
    //           <br />
    //           <br />
    //           <Form.Field>
    //             <CKEditor
    //               content={body}
    //               events={{
    //                 change: handleBodyChange
    //               }}
    //             />
    //           </Form.Field>
    //           <Form.Field>
    //           </Form.Field>
    //           <button className="ui medium basic black button" id="hover" type="submit">
    //             <i className="sign in icon" />
    //             Publish
    //           </button>
    //         </Form>
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Container>


    // <div className="row">
    //     <div className="col-sm-7 center">
    //         <form className="form-group" onSubmit={handleSubmit}>
    //             <input
    //                 focus
    //                 name="title"
    //                 value={title}
    //                 onChange={onChange}
    //                 type="text"
    //                 placeholder=" Enter title"
    //             />
    //             <br/>
    //             <input
    //               focus
    //               type="file"
    //               placeholder="Enter Image"
    //               onChange={fileHandler}
    //             />
    //             <br/>
    //             <textarea>
    //             <CKEditor
    //                 content={body}
    //                 events={{
    //                 change: handleBodyChange
    //                     }}
    //                 />
    //             </textarea>
    //             <button className="ui medium basic black button" id="hover" type="submit">
    //             Publish
    //             </button>
    //         </form>
    //     </div>
    // </div>
        <form className="col-sm-7 fomu">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Title"/>
          <label class="control-label ">Image:</label>
          <input type="file" name="image" />
          <label for="body">Post body</label>
          <textarea class="form-control" id="body" rows="3" placeholder="post content"></textarea>
          <button type="submit" class="btn btn-success mb-2 postbtn">Post</button>
        </div>
      </form>
  );
};

export default CreateForm;
