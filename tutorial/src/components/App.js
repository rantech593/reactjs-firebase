import React, { Component } from 'react';
import firebase from 'firebase';
import Header from './Header';
import MessageList from './MessageList';
import MessageBox from './MessageBox';


class App extends Component {
  constructor(props){
    super(props);
		var config = {
  		apiKey: 'AIzaSyC2QoHdMixz_VmNOPfQ3DPa2_aC4Jup3UM',
  		authDomain: 'tutorial-58d88.firebaseapp.com',
  		databaseURL: 'https://tutorial-58d88.firebaseio.com',
  		projectId: 'tutorial-58d88',
  		storageBucket: 'tutorial-58d88.appspot.com',
  		messagingSenderId: '239757081369'
		};
		firebase.initializeApp(config);
	}
      
  render() {
    return (
      <div className="container">
      	<Header title="Simple ReactJS & Firebase App" />
        <div className="columns">
        	<div className="column is-3"></div>
          <div className="column is-6">
          	<MessageList db={firebase} />
         	</div>
        </div>
				<div className="columns">
        	<div className="column is-3"></div>
          <div className="column is-6">
           	<MessageBox db={firebase} />
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
