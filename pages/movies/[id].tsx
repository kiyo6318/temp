import { getMovieData, getAllMovieIds } from "../../lib/movies";
import { useRouter } from "next/router";

interface Movie {
  id: bigint;
  title: string;
  overview: string;
}

export default function Movie({ movie }: { movie: Movie }) {
  const router = useRouter();

  if (router.isFallback || !movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{movie.id}</p>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getAllMovieIds();
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const { movie: movie } = await getMovieData(params.id);

  return {
    props: {
      movie,
    },
    revalidate: 3,
  };
}
