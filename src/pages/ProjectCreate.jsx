import React from "react";
import styled from "styled-components";
import Category from "../Components/Category";
import CreateInformation from "../Components/Creates/CreateInformation";
import CreatePersonnel from "../Components/Creates/CreatePersonnel";
import MetaPlace from "../Components/Creates/MetaPlace";
import ProjectTitle from "../Components/Creates/ProjectTitle";

const projectCreate = () => {
  return (
    <>
      <Category />
      <CreateWrapper>
        <CreateInformation />
        <ProjectTitle />
        <CreatePersonnel />
        <MetaPlace />
      </CreateWrapper>
    </>
  );
};

export default projectCreate;
const CreateWrapper = styled.div`

`;
