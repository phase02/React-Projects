import React, { useEffect, useState } from 'react';
import Axios from "axios"
const FunctionalAPI = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const getItem = () => {
        let item;
        if (loading)
            item = <p>Loading....</p>
        else if (errorMessage)
            item = <p>{errorMessage}</p>
        else {
            return <div>
                <img className="img-thumbnail" src={user.picture.thumbnail} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Person Info</h5>
                    <p className="card-text">{user.email}</p>
                </div></div>
        }
        return <div className="card" style={{ width: '18rem' }}>
            {item}
        </div>
    }

    useEffect(() => {
        Axios.get("https://api.randomuser.me/").then((response) => {
            setUser(response.data.results[0]);
            setLoading(false);
            setErrorMessage('')
        }).catch((error) => {
            setLoading(false);
            setErrorMessage({ errorMessage: "Hey something went wrong !! Try again in sometime." })
        });
    }, []);
    return <>{getItem()}</>;
}

export default FunctionalAPI;