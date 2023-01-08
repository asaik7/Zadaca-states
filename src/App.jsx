import { Component } from "react";
import Korisnici from "./Korisnici";
import PopisKorisnika from "./PopisKorisnika";

class App extends Component {
  state = {
    korisnici: [
      {
      ime: 'Branko',
      prezime: 'Branković',
      dob: 32,
      },
      {
      ime: 'Janko',
      prezime: 'Janković',
      dob: 42,
      },
      {
      ime: 'Stanko',
      prezime: 'Stanković',
      dob: 52,
      },
      ],
  };



  render() {
   
    const {korisnici} = this.state;

    return (
      <div>
            <PopisKorisnika />
            <Korisnici korisnici={korisnici} />
            
      </div>
    )

    
  }
  
}

export default App;
