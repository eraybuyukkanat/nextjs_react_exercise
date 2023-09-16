import { Fragment } from "react";
import classes from './MeetupDetail.module.css'
function MeetupDetail(props){
    return <section className={classes.detail}>
    <img src={props.src} alt={props.title} />
    <h1>{props.title}</h1>
    <p>{props.description}</p>
</section>
}
export default MeetupDetail;