import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";

import { MongoClient } from "mongodb";



function HomePage(props) {

 
  return (
      <MeetupList meetups={props.meetups} />
  );
}


// export async function getServerSideProps(context){

//   const req = context.req;
//   const res = context.res;
//   return {
//     props: DUMMY_MEETUPS
//   },
//   revalidate
// }

export async function getStaticProps(){

  const client = await MongoClient.connect("mongodb+srv://eraybuyukkanat:test123@reactcourse.6qmzzlb.mongodb.net/?retryWrites=true&w=majority");
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup)=>({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  }
}

export default HomePage;
