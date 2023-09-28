import "./experienceCards.css";

export const ExperienceCard = ({ title, currentStatus, description, year }) => {
  return (
    <div className="experience-card">
      <div className="experience">
        <div className="bullet"></div>
        <div className="experience-content">
          <h2 className="progress-step">{title}</h2>
          <div className="progress-details">
            <h3 className="progress-step">{currentStatus}</h3>
            {description && <p className="sub-info">{description}</p>}
            {year && <p className="sub-info">{year}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
