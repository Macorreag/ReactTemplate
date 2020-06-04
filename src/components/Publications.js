import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { PUBLICATIONSPUBLIC } from './../shared/publicationsPublic';

class Publications extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: PUBLICATIONSPUBLIC
        };
    }

    render(){
        const publications = this.state.dishes.map( (dish) => {
            return(
                <div key = {dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src = {dish.image}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading >{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        }) ;

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {publications}
                    </Media>
                </div>
            </div>
        );
    }

}

export default Publications;