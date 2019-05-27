/**
 * 
 * Container for home component  
 * @author Shashank Srivastava
 * 
 */


import { connect } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import {calculateFunction} from '../services/action';

const mapStateToProps = (state) => ({
result:state.home.check
});
//getting updated state value into result prop

const mapDispatchToProps = (dispatch) => ({
  // getFunction: (param) => dispatch(getFunction(param)),
  check:(paramOne,paramTwo) => dispatch(calculateFunction(paramOne,paramTwo))
});
//dispatching check function 

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default Home;