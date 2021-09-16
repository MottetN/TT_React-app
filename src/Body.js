import { plantList } from "./data/ShoppingList";

export default function Body() {
  return (
    <div className="Body">
      <h1>Ici c'est le body</h1>
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>
            {plant.name} {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
