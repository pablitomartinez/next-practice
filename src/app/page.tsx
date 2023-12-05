import api from "@/api";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const restaurants = await api.list();
  
  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3" >
      {restaurants.map((restaurant)=>{
        return(
          <article key={restaurant.id} >
            <img
              alt={restaurant.name}
              className="mb-3 h-[300px] w-full object-cover"
              src={restaurant.image}
            />
            <h2 className="inline-flex gap-2 text-lg font-bold" >
              <Link href={restaurant.id}>
                <span>{restaurant.name}</span>
              </Link>
              <small>
                <span>⭐</span>
                <span>{restaurant.score}</span>
                <span className="opacity-90" >{restaurant.ratings}</span>
              </small>
            </h2>
            <p>{restaurant.description}</p>
          </article>
        )
      })}
    </section>
  );
}