import React, { useState } from "react";
import styled from "styled-components";
import EditCard from "./EditCard";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Card = styled.div`
  width: 30rem;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.p`
  margin: 10px;
`;

const Delete = styled.button`
  width: 4rem;
  height: 1.5rem;
  align-self: center;
  margin: 10px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;

const Update = styled.button`
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

const Span = styled.span`
  font-weight: bold;
`;

const BlogCard = ({ blog, handleDelete }) => {
  const [editBlog, setEditBlog] = useState(false);
  return (
    <CardContainer>
      <Card>
        <Content>
          <Span>Blog Name:</Span> {blog.blogName}
        </Content>
        <Content>
          <Span>Blog Title:</Span> {blog.blogTitle}
        </Content>
        <Content>
          <Span>Blog Body:</Span> {blog.blogBody}
        </Content>
        <Update onClick={() => setEditBlog(!editBlog)}>EDIT</Update>
        <Delete onClick={handleDelete}>DELETE</Delete>
      </Card>
      {editBlog === true ? <EditCard blog={blog} /> : ""}
    </CardContainer>
  );
};

export default BlogCard;
