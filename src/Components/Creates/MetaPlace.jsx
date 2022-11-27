import React from "react";
import "../../css/components/MetaPlace.css";

const MetaPlace = () => {
  return (
    <div className="container">
      <div className="metaPlace">
        <div className="meta-place__title">
          <span>가상공간</span>
        </div>
        <div className="meta-place__img">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>

      <div className="metaPlaceName">
        <div className="name">
          <span>가상공간 이름</span>
        </div>
        <div className="name-content">
          <input
            className="name-input"
            type={"text"}
            placeholder={
              "모바일에서 표시될 공간 이름을 입력해주세요.(50자 이내)"
            }
          />
          <span className="name-span">
            입력하지 않을 경우 가상공간 이름으로 표기됩니다.
          </span>
        </div>
      </div>

      <div className="musicSettings">
        <div className="music-setting">
          <span>배경음 설정</span>
        </div>
        <div className="music-content">
          <label>
            <input type="radio" id="사용 안함" value="사용 안함" />
            사용 안함
          </label>
          <label>
            <input type="radio" id="사용" value="사용" />
            사용
          </label>
        </div>
      </div>

      <div className="profile">
        <div className="profile-name">
          <span>썸네일</span>
        </div>
        <div className="profile-content">
          <label>
            <input type="radio" id="사용 안함" value="사용 안함" />
            사용 안함
          </label>
          <label>
            <input type="radio" id="사용" value="사용" />
            사용
          </label>
          <span>모바일 홈 화면에 보여질 썸네일을 등록할 수 있습니다.</span>
        </div>
      </div>

      <div className="projectExplanation">
        <div className="project-information">
          <span>프로젝트 설명</span>
          <span style={{ fontSize: "12px", color: "red" }}>* 필수</span>
        </div>
        <div className="project-information__input">
          <input
            type={"text"}
            placeholder={
              "모바일에서 표시될 프로젝트 설명을 입력해주세요. (50자 이내)"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MetaPlace;
