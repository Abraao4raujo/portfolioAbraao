import React from "react";
const ContainerLanguage = ({ languages }) => {
  return (
    <div className="container">
      <div className="grid">
        <ul className="listLanguage">
          {languages.map(({ nome, img }) => (
            <>
              <li key={nome}>
                {img}
                <span>{nome}</span>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContainerLanguage;
