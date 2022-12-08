const Card = (props) => {
  return (
    <div className="Card">
      <div className="card">
        <img src={props.url} alt="" />
        <div className="card-body">
          <h2>{props.nombre}</h2>
          <p class="card-text">{props.descripcion}</p>
          <a href={props.url} target="_blank" class="btn btn-primary">Descargar Imagen</a>

        </div>
      </div>
    </div>
  );
};

export default Card;
