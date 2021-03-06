import React, { Component } from "react";
import GeneStorageContract from "./contracts/GeneStorage.json";
import getWeb3 from "./getWeb3";
import io from "socket.io-client";


import "./App.css";

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

//Pages
import UploadPage from "./pages/uploadPage";
import AuthorPage from "./pages/authorPage";
import MsgHomePage from "./pages/msgHome";
import MsgChatPage from "./pages/msgChat";
import SendKeysPage from "./pages/send_keys";

var socket = io.connect('/');
socket.on('connect', () => {
  console.log("i'm connected with back-end")
});

socket.on('message', (data) => {
  console.log("incoming message:" + data);
});

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GeneStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        GeneStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      // this.setState({ web3, accounts, contract: instance }, this.runExample);
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <Routes>
          <Route path="/" element={<UploadPage account={this.state.accounts} contract={this.state.contract}/>}></Route>
          <Route path="/author" element={<AuthorPage account={this.state.accounts} contract={this.state.contract}/>}></Route>
          <Route path="/msg_home" element={<MsgHomePage socket={socket}/>}></Route>
          <Route path="/msg_home/chat/:roomname/:username" element={<MsgChatPage socket={socket}/>}></Route>
          <Route path="/msg_home/keys/:roomname/:username" element={<SendKeysPage socket={socket}/>}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
