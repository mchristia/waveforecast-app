import SpotList from "../component/SpotList";
import useFavourites from "../hooks/useFavourites";

export default function FavouritesPage(){

    const {favourites, setFavourites} = useFavourites();


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
                         setFavouriteSpots={setFavourites}
                         filterCountry={{name: ''}}
                         filterContinent={{name: ''}}/>
            </div>
        </div>
    )

}