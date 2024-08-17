import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Helmet>
                <title>Abstract</title>
            </Helmet>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;