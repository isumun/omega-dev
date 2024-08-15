import React, { useState } from "react";

import "./AddVacancies.css";
import Footer from "../../Companent/Footer/Footer";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import VacancyForm from "../VacancyForm/VacancyForm";

function AddVacancy() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="container">
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        {isSidebarVisible ? "X" : "☰"}
      </button>
      <div className={`AddVacancy_content ${isSidebarVisible ? "show-sidebar" : ""}`}>
        <LeftSidebar />
        <div className="right-add-vacancy_wrapper">
          <h1 className="head-title">Добавить новую вакансию</h1>
          <p className="title-description">
            Вакансия должна относится к сфере информационных технологий и будет
            опубликована после проверки модератором
          </p>
          <VacancyForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AddVacancy;