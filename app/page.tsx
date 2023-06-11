import Head from "next/head";
import MovieSearch from "./components/MovieSearch";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Movie Database</title>
        <meta name="Movie Database" content="A simple database for users" />
      </Head>

      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl mb-8 font-bold">Movie Database</h1>
        <MovieSearch />
      </main>
    </div>
  );
}
