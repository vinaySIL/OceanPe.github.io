import { useNavigate } from "react-router"
import classes from "./Home.module.css"

const ServiceCard = ({ card }) => {
    const { image, title, link, desc } = card
    const navigate = useNavigate()
    const handleNavigate = (route) => {
        navigate(route)
    }

    return (
        <div className={classes.mainService} onClick={() => handleNavigate(link)}>
            <img src={image} />
            <h2 className={classes.title}>
                {title}
            </h2>
            <div className={classes.desc}>
                {desc}
            </div>
            <button>Know More</button>
        </div>
    )
}

export default ServiceCard