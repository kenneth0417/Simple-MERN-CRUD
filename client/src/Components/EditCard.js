import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  margin: 0 20px;
  width: 30rem;
  border: 1px solid black;
  border-radius: 10px;
`;

const Form = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  margin: 10px 10px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p``;

const Input = styled.input`
  width: 20rem;
`;

const TextArea = styled.textarea`
  width: 20rem;
`;

const Submit = styled.button`
  margin: 20px;
  width: 4rem;
  height: 1.5rem;
  align-self: center;
  margin: 10px;
  border: none;
  outline: none;
  background-color: gray;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
`;

const EditCard = ({ blog }) => {
  const [editName, setEditName] = useState(blog.blogName);

  const [editTitle, setEditTitle] = useState(blog.blogTitle);

  const [editBody, setEditBody] = useState(blog.blogBody);

  const handleEdit = (e) => {
    e.preventDefault();

    axios.put("http://localhost:3002/edit", {
      id: blog._id,
      editName: editName,
      editTitle: editTitle,
      editBody: editBody,
    });

    setEditName("");
    setEditTitle("");
    setEditBody("");
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleEdit}>
          <Row>
            <Title>Blog Name: </Title>
            <Input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </Row>
          <Row>
            <Title>Blog Title: </Title>
            <Input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </Row>
          <Row>
            <Title>Blog Body: </Title>
            <TextArea
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
          </Row>
          <Submit>SUBMIT</Submit>
        </Form>
      </Container>
    </>
  );
};

export default EditCard;
