import SpotList from "../component/SpotList";
import useFavourites from "../hooks/useFavourites";

export default function FavouritesPage(){

    const {favourites} = useFavourites();


    return(
        <div>
            <div>
               <p>Hallo, bin ich noch wach?</p>
            </div>
            <div>
               <p>Hallo, bin ich noch wach?</p>
            </div>
            <div>
               <SpotList surfSpots={favourites}
                         favouriteSpots={favourites}
                         filterCountry={{name: ''}}
                         filterContinent={{name: ''}}/>
            </div>
        </div>
    )

}