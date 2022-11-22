import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory ,Link} from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="border-radius-sm"
        placeholder="Search here"
      ></Form.Control>
      <br />

      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
    </Form>
  );
}

export default SearchBox;
