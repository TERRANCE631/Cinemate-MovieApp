import { Card } from "../components";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <div>
        <main>
          <section className="py-7">
            <p className="text-3xl text-gray-700 dark:text-white">{ movies.length ===0 ? `No result found for '${ queryTerm }'` : `Result for '${ queryTerm }'` }</p>
          </section>
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

