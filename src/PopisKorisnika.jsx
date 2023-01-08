import { Component } from "react";

export default class PopisKorisnika extends Component{
    render()
    {
        console.log(this.props);
        return (
            <h1> Ovo je popis korisnika:</h1>
        );
    }
}