import React, { Component } from 'react';
import './App.css';
// import Home from './components/Home';
import PropTypes from 'prop-types';
class AddFriend extends Component {
  constructor(props){
    super(props)
    this.state = {
      newFriend: ""
    }
    this.updateNewFriend = this.updateNewFriend.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
  }
  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    })
  }
  handleAddNew(){
    this.props.addNew(this.state.newFriend)
    this.setState({
      newFriend: ""
    })
  }
  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}>Add new friend</button>
      </div>
    )
  }
}
AddFriend.propTypes = {
  addNew: PropTypes.func.isRequired
}

class ShowList extends Component {
  render() {
    return (
      <ul>
        {this.props.names.map((friend) => <li>{friend}</li>)}
      </ul>
    );
  }

}
ShowList.defaultProps = {
  names: []
}
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Akylai",
      friends: ["Begi", "Atay", "Arlen", "Kilich"]
    }
    this.addFriend = this.addFriend.bind(this)
  }

  addFriend(friend) {
    this.setState((state) => ({
      friends: state.friends.concat([friend])
    }))
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>

    )
  }
}

export default App;
