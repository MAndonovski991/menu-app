import "./ImageMenuPage.css"
import DescriptionFullBox from "../Description Full Box/DescriptionFullBox";
import DescriptionBox from "../Description Box/DescriptionBox";
import HawaiArizona from "../Hawai Arizona/HawaiArizona";

function ImageMenuPage(props) {
    if(props.item.description_box.position === "bottom-full") {
        return(
            <>
            <img src={props.item.image.src} className={props.item.image.position} alt={props.item.image.src}/> 
            <DescriptionFullBox item={props.item}/>
            </>
        )
    } else if(props.item.description_box.position === "top-left-hawai-arizona") {
        return(
            <>
            <img src={props.item.image.src} className={props.item.image.position} alt={props.item.image.src}/> 
            <HawaiArizona item={props.item}/>
            </>
        )
    } else {
        return(
            <>
            <img src={props.item.image.src} className={props.item.image.position} alt={props.item.image.src}/> 
            <DescriptionBox item={props.item}/>
            </>
        )
    }

    
}

export default ImageMenuPage;