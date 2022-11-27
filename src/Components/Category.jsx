import React from "react";
import styled from "styled-components";
import '../css/category.css'

const Category = () => {
  return (
    <>
      <CategoryBar>
        <h2>Meta Frame</h2>
        <button>HOME</button>
        <button>프로젝트 생성</button>
        <button>프로젝트 관리</button>
        <button>Asset</button>
        <button>나의 계정</button>
      </CategoryBar>
    </>
  );
};

export default Category;

const CategoryBar = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  float: left;
  width: 12%;
  height: 100vh;
  background-color: #2d2d2d;
`
