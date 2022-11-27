import React from "react";
import "../../css/components/ProjectTitle.css";

const ProjectTitle = () => {
  return (
    <>
      <div className="wrap">
        <div className="project-title">
          <span>프로젝트 제목</span>
        </div>
        <label>
          <div>
            <input
              type={"text"}
              className="title-content"
              placeholder={
                "운영 페이지에서 확인할 프로젝트 제목을 입력해 주세요. (50자 이내)"
              }
            />
          </div>
        </label>
      </div>
    </>
  );
};

export default ProjectTitle;
