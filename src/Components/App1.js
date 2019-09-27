import React, { Component } from 'react';
import pet from "@frontendmasters/pet"
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading:true 
        };
    }

    componentDidMount(){
        pet.animal(this.props.id)
        .then(({ animal}) =>{
           this.setState({
               name: animal.name,
               animal:animal.type,
               location:`${animal.contact.address.city}, ${animal.contact.address.state}`,
               description:animal.description,
               media:animal.photos,
               breed:animal.breeds.primary, 
               loading:false
        }) 
        },console.error);
    }

    render() { 
        if(this.state.loading){
            return <h3>loading ...</h3>
        }
        const {name, description, location, media, breed, } = this.state
        return ( 
            <div className="details">
            <div>
                <h1>{name}</h1>
             <h2>{`${animal} - ${breed} - ${location}`}</h2>
             <button>Adopt { name }</button>
             <h2>hello adopt me now</h2>
             <p>{description}</p>
            </div>
            </div>
         );
    }
}
 
export default App1;