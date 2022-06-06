import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Header = styled.p`
  display: flex;
  font-weight: bold;
  font-size: 24px;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 95vh;
`;

const Form = styled.form`
  margin: 5rem;
  height: 20rem;
  width: 30rem;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
  align-items: center;
`;

const Title = styled.p`
  font-weight: bold;
`;

const Input = styled.input`
  width: 15rem;
  margin-left: 10px;
  height: 2rem;
`;

const TextArea = styled.textarea`
  margin-left: 10px;
  width: 15rem;
`;

const Submit = styled.button`
  width: 5rem;
  height: 2rem;
  place-self: center;
`;

const AddBlog = () => {
  const [name, setName] = useState("");

  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3002/add", {
      blogName: name,
      blogTitle: title,
      blogBody: body,
    });

    setName("");
    setTitle("");
    setBody("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>Add Blog</Header>
        <Row>
          <Title>Blog Name: </Title>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row>
          <Title>Blog Title: </Title>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Row>
        <Row>
          <Title>Blog Body: </Title>
          <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
        </Row>
        <Submit>Submit</Submit>
      </Form>
    </Container>
  );
};

export default AddBlog;
