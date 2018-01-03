import React from "react";
import fetch from 'isomorphic-fetch';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

// Home page component
class Home extends React.Component {
  constructor(props){
    super(props);
    
  }
  // render
  render() {
    return (
      <div className="page-home">
        <h1>Home</h1>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    mystuff: state.mystuff,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    dispatch
  }
}

export default connect()(Home);
