import Card from "./Card";

export default function Section({ listCard, title, toPage }) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="font-bold text-4xl my-2">{title}</h2>
      </div>
      <div className="flex gap-2 flex-wrap">
        {listCard.map((card, index) => (
          <Card key={index} card={card} toPage={toPage} />
        ))}
      </div>
    </div>
  );
}
Section.defaultProps = {
  listCard: [],
  title: "",
  to: "/",
};
