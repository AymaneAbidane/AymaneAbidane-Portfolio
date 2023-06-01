import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  demoUrl,
  codeUrl,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="links">
            <a href={demoUrl} target="_blank">
              Demo
            </a>
            <a href={codeUrl} target="_blank">
              Code
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
