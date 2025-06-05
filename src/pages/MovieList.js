import { useEffect } from "react";
import { Card } from "../components";
import { useFetch } from "../Hooks/useFetch";

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    document.title = `${title}`
  })

  return (
    <div>
        <main>
          <section className="max-w-7xl mx-auto py-5">
            <div className="flex justify-start flex-wrap">
              { movies.map((movie) => (
                <Card key={movie.id} movie={movie}/>
              )) }
            </div>
          </section>
        </main>
    </div>
  )
}

