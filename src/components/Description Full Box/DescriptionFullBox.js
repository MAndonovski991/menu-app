import "./DescriptionFullBox.css";

function DescriptionFullBox(props) {
    let box = props.item.description_box

    let title_style_oreo = {
        color: box.style.titleOreo.color, 
    }

    let title_style_magnolia = {
        color: box.style.titleMagnolia.color, 
    }

    return (
        <div className={box.position}>
            <div className="bottom-first">
        <h1 style={title_style_oreo}>{ box.value.title1 }</h1>
        <h1 style={title_style_magnolia}>{ box.value.title2 }</h1>
        </div>
        <div className="bottom-second">
        <p style={{color: box.style.description_color}}>
            { box.value.ingridients1 }
        </p>
        <p style={{color: box.style.description_color}}>
            { box.value.ingridients2 }
        </p>
        </div>
        
        <div className="bottom-third">
        <h2 className="oreo-price" style={{color:box.style.price_color_oreo}}>{ box.value.price1 }{ box.value.currency }</h2>
        <h6 className="alergy">{ box.value.alergies }</h6>
        <h2 className="magnolia-price" style={{color:box.style.price_color_magnolia}}>{ box.value.price2 }{ box.value.currency }</h2>
        </div>
        </div>
    );
}

export default DescriptionFullBox;
