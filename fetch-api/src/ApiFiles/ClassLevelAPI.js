import React, { Component } from 'react';
import Axios from "axios"

export default class ClassLevelAPI extends Component {

    state = {
        user: null,
        loading: true,
        errorMessage: ''
    }
    componentDidMount() {

        Axios.get("https://api.randomuser.me/").then((response) => {
            this.setState({ user: response.data.results[0], loading: false, errorMessage: '' });
            console.log(this.state.user)
        }).catch((error) => {
            this.setState({ errorMessage: "Hey something went wrong !! Try again in sometime." })
        });
    }

    render() {
        let item;
        if (this.state.loading)
            item = <p>Loading....</p>
        else if (this.state.errorMessage)
            item = <p>{this.state.errorMessage}</p>
        else {
            return <div>
                <img className="img-thumbnail" src={this.state.user.picture.thumbnail} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Person Info</h5>
                    <p className="card-text">{this.state.user.email}</p>
                </div></div>
        }
        return <div className="card" style={{ width: '18rem' }}>
            {item}
        </div>
    }
}