import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import BlogCard from "./BlogCard";

const Title = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 36px;
  font-weight: bold;
`;

const Container = styled.div`
  height: 100vh auto;
`;

const Hero = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    const { data } = await axios
      .get("http://localhost:3001/home")
      .catch((err) => console.log(err));
    setBlogs(data);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Title>Blog List</Title>
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          blog={blog}
          handleDelete={() => handleDelete(blog._id)}
        />
      ))}
    </Container>
  );
};

export default Hero;
