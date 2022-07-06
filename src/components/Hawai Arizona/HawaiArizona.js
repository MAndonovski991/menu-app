import "./HawaiArizona.css";

function HawaiArizona(props) {
  let box = props.item.description_box;

  let title_style = {
    color: box.style.title.color,
    display: box.style.title.display,
  };

  return (
    <div className={box.position}>
      <div className="title-desert">
        <h1 style={title_style}>{box.value.title1}</h1>
        <h1 style={title_style}>{box.value.title2}</h1>
        <h1 style={title_style}>{box.value.title3}</h1>
      </div>
      <div className="price-desert">
        <h2 style={{ color: box.style.price_color }}>
          {box.value.price1}
          {box.value.currency}
        </h2>
        <h2 style={{ color: box.style.price_color }}>
          {box.value.price2}
          {box.value.currency}
        </h2>
        <h2 style={{ color: box.style.price_color }}>
          {box.value.price3}
          {box.value.currency}
        </h2>
      </div>
      <p style={{ color: box.style.description_color }}>
        {box.value.ingridients}
      </p>
      <h6 style={{ color: box.style.alergy_color }}>{box.value.alergies}</h6>
    </div>
  );
}

export default HawaiArizona;
