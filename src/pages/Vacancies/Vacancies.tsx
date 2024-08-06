import React, { useEffect, useState } from 'react';
import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import "./Vacancies.css";
import useFetch from "../../hooks/useFetch";
import { Job } from "../../hooks/types";

function Vacancies() {
  const { data, isLoading } = useFetch({
    url: "http://3.38.98.134/organizations",
});
const [, setCompanyNames] = useState<string[]>([]);
console.log(data);

useEffect(() => {
    if (data.length > 0) {
        const names = data.map(
            (job: Job) => job.organization_name || "Не указано"
        );
        setCompanyNames(names);
    }
}, [data]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div id="vacancies">
        <div className="container">
          <div className="vacancies__content">
            {data.map((job: Job, index: number) => (
              <a key={index} href={`/ru/jobs/${job.slug}`} className="link">
                <div className="jobs-item content" data-v-6dc437e8>
                  <div className="information" data-v-6dc437e8>
                    <div className="jobs-item-field icon company" data-v-6dc437e8>
                      {job.organization_icon && (
                        <img src={job.organization_icon} alt={`${job.organization_name} logo`} className="image" />
                      )}
                    </div>
                    <div className="jobs-item-field company" data-v-6dc437e8>
                      <span className="label" data-v-6dc437e8>
                        Компания
                      </span>
                      {job.organization_name || 'Не указано'}
                    </div>
                    <div className="jobs-item-field position" data-v-6dc437e8>
                      <span className="label" data-v-6dc437e8>
                        Должность
                      </span>
                      {job.position}
                    </div>
                    <div className="jobs-item-field price" data-v-6dc437e8>
                      <span className="label" data-v-6dc437e8>
                        Оклад
                      </span>
                      {job.salary}
                    </div>
                    <div className="jobs-item-field type" data-v-6dc437e8>
                      <span className="label" data-v-6dc437e8>
                        Тип
                      </span>
                      {job.type}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
         
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vacancies;