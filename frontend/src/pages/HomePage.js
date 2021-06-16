import {Link} from "react-router-dom";

export default function HomePage(){


    return(
        <div>
            <p>
                Wind und Wellen
            </p>
            <div>
                <Link to="/dashboard">
                    <button component={Link} to={"/search"}>Look for Spots</button>
                </Link>
            </div>

        </div>
    )
}