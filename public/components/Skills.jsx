import "./skills.css";

export const Skill = ({ name, image }) => {
  return (
    <div className="parte-habilidades-linha">
      <div className="habilidade">
        {image && <img src={image} alt="imageIcon"></img>}
        <p>{name}</p>
      </div>
    </div>
  );
};
