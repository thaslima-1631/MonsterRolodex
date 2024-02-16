import "./../../App.css";

const MonsterCard = (props) => (
  <div className="card-list">
    {props.details.map((monster) => {
      return (
        <div className="card-container" key={monster.id}>
          <img
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            alt={monster.name}
          />

          <h1 className="details">{monster.name}</h1>
          <p className="details">{monster.email}</p>
        </div>
      );
    })}
  </div>
);

export default MonsterCard;
