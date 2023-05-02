export default function Buyer(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>Price: {props.maxPrice}</p>
      <p>Zip Code: {props.zipCode}</p>
      <p>Estate Type: {props.estateType}</p>
      <p>Size: {props.minSize}</p>
    </div>
  );
}
