import "./DescriptionBox.css";

function DescriptionBox(props) {
  let box = props.item.description_box;

  let title_style = {
    color: box.style.title.color,
    display: box.style.title.display,
  };

  return (
      <div className={box.position}>
        <h2 style={title_style}>{box.value.title}</h2>
        <p style={{ color: box.style.description_color }}>
          {box.value.ingridients}
        </p>
        <h6 style={{ color: box.style.alergy_color }}>{box.value.alergies}</h6>
        <h3 style={{ color: box.style.price_color }}>
          {box.value.price}
          {box.value.currency}
        </h3>
        <p className="breakfast-info" style={{ color: box.style.price_color }}>Доручек: За едно лице <span>{box.value.price_for_one}</span>ден. За две лица <span>{box.value.price_for_two}</span>ден.</p>
        <span className="order-time">{box.value.order}</span>
      </div>
  );
}

export default DescriptionBox;
