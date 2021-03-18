import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "./UserContext";

export function AuthorizedRoute(props) {
    const { isAuth } = useContext(UserContext);

    if (!isAuth()) {
        return <Redirect to={{ pathname: '/login' }} />
    }

    return (
        <Route {...props}>
            {props.children}
        </Route>
    );
}