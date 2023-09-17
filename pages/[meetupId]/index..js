import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props){
    return <MeetupDetail src={props.meetupData.image}  description={props.meetupData.description} title={props.meetupData.title} />
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            { params: {meetupId: 'm1'} },
            { params: {meetupId: 'm2'} },
            { params: {meetupId: 'm3'} }
        ]
    }
}

export async function getStaticProps(context){

    const meetupId = context.params.meetupId;

    console.log(meetupId)

    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",
                description: "ilk",
                title: "illlk",
                id: meetupId
            }
        }
    }
}

export default MeetupDetails;