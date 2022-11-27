import React from "react";
import '../../css/components/CreatePersonnel.css'

const CreatePersonnel = () => {
  return (
    <div className="meta-place">
      <span className="meta-place__setting">⬛ 가상공간 설정</span>
      <span className="personnel">인원제한</span>
      <select className="person-option">
        <option>입력</option>
        <option>10명</option>
        <option>20명</option>
        <option>30명</option>
        <option>40명</option>
        <option>50명</option>
        <option>60명</option>
        <option>70명</option>
        <option>80명</option>
        <option>90명</option>
        <option>100명</option>
      </select>
      <span>명</span>
      <select className="person-option">
        <option>입력</option>
        <option>5명</option>
        <option>10명</option>
        <option>15명</option>
        <option>20명</option>
      </select>
      <span>명</span>
      <span>{`(총 인원 수 / 채널 인원 수)`} </span>
      <i class="far fa-question-circle"></i>
    </div>
  );
};

export default CreatePersonnel;
