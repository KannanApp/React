import { Link } from "react-router-dom";

export function TodoFooter({
    numberOfincompleteTasks
}){
    return(
        <div>
            <p>{numberOfincompleteTasks}{numberOfincompleteTasks === 1 ? "tasl" : "not task"}</p>
            <Link to={"/followers"}>Followers</Link>
        </div>
    );
}