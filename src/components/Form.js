import React from 'react';
import {Component} from 'react';

export default class Form extends Component {
    render() {
        return (
            <form>
                <label>
                    Title:
                    <input type="text"/>
                </label>
                <label>
                    Description:
                    <input type="text"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

}

