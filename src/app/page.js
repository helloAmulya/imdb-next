
import React from 'react'
import { resolve } from 'styled-jsx/css';
import Results from '@/components/Results';
import Card from '@/components/Card';
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `http://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const results = data.results;
  console.log(results);

  return (
    <div >
      {results.map((result) => (
        <Results results={results} />
      ))}
    </div>
  );
  

  // return (
  //   <div >
  //     {results.length === 0 ? (
  //       <p>No results found</p>  
  //     ) : (
  //       results.map((result) => (
  //         <Card key={result.id} result={result} />
  //       ))
  //     )}
  //   </div>
  // );


}
