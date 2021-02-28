import fetch from "node-fetch";
import React, { FC } from "react";

// const BuildMovieDetails = ({ title, overview, build_time }) => {
//   <div>
//     タイトル: {title}, あらすじ： {overview}, ビルド時間: {build_time}
//   </div>;
// };

function BuildMovieDetails({ title, overview, build_time }) {
  return (
    <div>
      {" "}
      タイトル: {title}, あらすじ: {overview}, ビルド時間: {build_time}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=30dd6dfe595c6a70ddad14ddc4b58ac5"
  );
  const json = await res.json();
  const title = json.title;
  const overview = json.overview;
  const build_time = new Date().toString();

  return {
    props: {
      title,
      overview,
      build_time,
    },
  };
}

export default BuildMovieDetails;
