import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
function MeetupDetails(props){
    return <MeetupDetail src={props.meetupData.image}  description={props.meetupData.description} title={props.meetupData.title} />
}

export async function getStaticPaths(){

    const client = await MongoClient.connect("mongodb+srv://eraybuyukkanat:test123@reactcourse.6qmzzlb.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({},{_id: 1}).toArray();

    client.close();
    return {
        fallback: "blocking",
        paths: meetups.map((meetup)=>({params: {meetupId: meetup._id.toString()}}))
    }
}

export async function getStaticProps(context){

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect("mongodb+srv://eraybuyukkanat:test123@reactcourse.6qmzzlb.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)})

    client.close();

    return {
        props: {
            meetupData:{
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails;