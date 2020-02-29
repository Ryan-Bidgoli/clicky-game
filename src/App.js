//import all the components into app
import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    scores: 0,
    topScores: 0,
    originalFriends: friends
  };
//defining react component class
 componentDidMount(){
  let newfriends =  this.state.friends.map(friend=>{
       friend.clicked = false

       return friend
     })   
//updating the state setup
     this.setState({
       friends:newfriends,
         originalFriends: newfriends  
     })
 }
  //removing element by id
  removeFriend = id => {
    
   
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let newfriends = this.state.friends.map(friend => {
         
      //check if its the same friend
      if(id ===friend.id){
        //add to the score
        if(friend.clicked === false){
          //updates the value
          friend.clicked = true
          this.setState({
            scores: this.state.scores + 1
            
          })
          //checks to update highscore
          if(this.state.scores >= this.state.topScores){
            //creating new highscore
            this.setState({
              topScores:this.state.topScores + 1
            })
          }
        }
        //else score is restarted 
        else{
          this.setState({
            scores:0
          })
        }
       

      }

      return friend
    });
    //execute map function 
    if(this.state.scores === 0){
       newfriends = this.state.friends.map(friend=>
        {
          friend.clicked = false
           return friend
        })
    }      
     //adding random num generator
     newfriends.sort( () => Math.random() - 0.5) ;

     
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: newfriends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  //function to return react element
  render() {
    return (
      //defining wrapper element
      <Wrapper>
        <Title>Friends List  Scores{this.state.scores}   topScores{this.state.topScores}  </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}
//export a single class
export default App;

