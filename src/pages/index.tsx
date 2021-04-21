import Head from 'next/head'
import Header from '../components/header'
export default function Home(props) {
  console.log(props.episodes)
  return (
    <h1>{props.episodes}</h1>
  )
}



/*export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props : {
      episodes : data
    },
  revalidate : 60 * 60 * 8,
  }
}*/;