import fetch from "node-fetch";

export async function getAllMovieIds() {
  const res = await fetch(
    new URL(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ja-JP&page=1`
    )
  );
  const movies = await res.json();
  return { movies };
}

export async function getMovieData(id: bigint) {
  const res = await fetch(
    new URL(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
    )
  );

  const movie = await res.json();
  return { movie };
}
