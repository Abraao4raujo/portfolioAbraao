import './skills.css'

export const Skill = ({ name, progress }) => {
  return (
    <div className="parte-habilidades-linha js-scroll">
      <p>{name}</p>
      <div className="bar">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};