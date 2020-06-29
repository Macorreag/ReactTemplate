import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { PUBLICATIONSPUBLIC } from './../shared/publicationsPublic';

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

function CharactersQuery() {
  const { loading, error, data } = useQuery(gql`
    {
      characters {
        results {
          id
          name
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(({ id, name }) => (
    <div key={id}>
      <p>
        {id}: {name}
      </p>
    </div>
  ));
}


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
                <div key = {publication.id} className="col-12 col-md-12 mt-1">
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 col-md-4">
                        {publications}
                        <CharactersQuery />
                    </div>
                </div>
                <div className="row">
                    {this.renderPublication(this.state.selectedPublication)}
                </div>
            </div>
        );
    }

}

export default Publications;