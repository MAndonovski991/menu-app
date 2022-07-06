import "./DescriptionFullBox.css";

function DescriptionFullBox(props) {
    let box = props.item.description_box

    let title_style = {
        color: box.style.title.color, 
        display: box.style.title.display
    }

    return (
        <div className={box.position}>
            <div className="bottom-first">
        <h1 style={title_style}>{ box.value.title1 }</h1>
        <h1 style={title_style}>{ box.value.title2 }</h1>
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
        <h2>{ box.value.price }{ box.value.currency }</h2>
        <h6 className="alergy">{ box.value.alergies }</h6>
        <h2>{ box.value.price }{ box.value.currency }</h2>
        </div>
        </div>
    );
}

export default DescriptionFullBox;
