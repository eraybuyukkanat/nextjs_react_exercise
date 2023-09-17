import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",
    address: "some address 5",
    description: "description",
  },
  {
    id: "m2",
    title: "a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",
    address: "some address 5",
    description: "description",
  },
  {
    id: "m3",
    title: "a third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",
    address: "some address 5",
    description: "description",
  },
  {
    id: "m4",
    title: "a fourth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",
    address: "some address 5",
    description: "description",
  },
];

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
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}

export default HomePage;
