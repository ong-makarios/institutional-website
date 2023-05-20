import React from "react";
import "./SectionTitle.scss";
import { SectionTitleProps } from "../../types/props";

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h3 className="section-title">{title}</h3>;
};

export default SectionTitle;
