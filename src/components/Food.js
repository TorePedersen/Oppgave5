export default function Food({ food }) {
  return (
    <div>
      <ul>
        {food.map((foodList) => (
          <li key={foodList}>{foodList}</li>
        ))}
      </ul>
    </div>
  );
}
