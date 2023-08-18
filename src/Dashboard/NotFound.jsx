import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not_fount">
            <p>Sorry Page is Not Found</p>
            <Link to={"/"}>Redirect to Main</Link>
        </div>
    );
}
 
export default NotFound;