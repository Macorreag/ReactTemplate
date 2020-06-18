import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { PUBLICATIONSPUBLIC } from './../shared/publicationsPublic';

class Publications extends Component {

    constructor(props) {
        super(props);

        this.state = {
            publications: PUBLICATIONSPUBLIC,
            selectedPublication: null
        };
        console.log('Publication component constructor is invoked');
        
    }
    componentDidMount(){
        console.log('Menu ComponentDidMount is invoked');
        
    }

    onSelectPublication( publication ){
        this.setState({selectedPublication: publication });
    }

    renderPublication(publication){
        if(publication != null){
            return(
                <Card>
                    <CardImg width="100%" src = {publication.image} alt={publication.name}/>
                    <CardBody>
                        <CardTitle>{publication.name}</CardTitle>
                        <CardText>{publication.description}</CardText>
                    </CardBody>
                </Card>
            )
        }else{
            return(
                <div></div>
            );
        }
    }
    render(){
        const publications = this.state.publications.map( (publication) => {
            return(
                <div key = {publication.id} className="col-12 col-md-5 mt-1">
                    <Card onClick = {() => this.onSelectPublication(publication)}>
                        <CardImg width="100%" src = {publication.image} alt={publication.name}/>
                        <CardImgOverlay>
                            <CardTitle >{publication.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }) ;

        return(
            <div className="container">
                <div className="row">
                        {publications}
                </div>
                <div className="row">
                    {this.renderPublication(this.state.selectedPublication)}
                </div>
            </div>
        );
    }

}

export default Publications;