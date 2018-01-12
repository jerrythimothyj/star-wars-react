import React, { Component } from 'react';
import axios from 'axios';

class Planets extends Component {
    render() {
        console.log(111);
        axios.get('https://swapi.co/api/planets')
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });

        return (
            <div className="planets">
                planets111
            </div>
        )
    }
}

export default Planets;