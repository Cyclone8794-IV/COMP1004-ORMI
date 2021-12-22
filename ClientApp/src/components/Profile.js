import React, { Component } from 'react';

export class Profile extends Component {
    static displayName = Profile.name


    constructor(props) { // Constructor.
        super(props)
    }


    render() {
        return (
            <div>
                <table className='table table-striped' aria-labelledby='tableLabel'>
                    <tr>
                        <th>
                            <h1>Coming soon...</h1>
                        </th>
                    </tr>
                </table>
            </div>
        );
    }
}