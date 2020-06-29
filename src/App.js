import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Publications from './components/Publications'
import './App.css';

import ApolloClient , { gql } from "apollo-boost";
import { ApolloProvider,  useQuery} from "@apollo/react-hooks";

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

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div  className="container">
          <NavbarBrand href="/">
            Périme
          </NavbarBrand>
        </div>
      </Navbar>
      <CharactersQuery />
      <Publications />
    </div>
  );
}

export default App;
