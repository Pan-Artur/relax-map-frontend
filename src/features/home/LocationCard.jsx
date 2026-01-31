// const Stars = ({ value }) => (
//   <div>
//     {"★".repeat(value)}
//   </div>
// );

export default function LocationCard({ item }) {
  return (
    <div style={{ border: "1px solid black", padding: 16 }}>
      <img src={item.image} alt="" width="200" />
      <h3>{item.title}</h3>
    </div>
  );
}