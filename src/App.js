import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css'
import {Cards,Chart,CountryPicker} from './component'
import { FetchData } from './api' 
class App extends React.Component {
    
constructor(props) {
  super(props)

  this.state = {
     data:{},
     country:""
  }
}


  
async componentDidMount() {
  const FetchedData= await FetchData();
  this.setState({
    data:FetchedData
  })
}

CountryHandler=async(country)=>{
    const data=await FetchData(country)
    this.setState({data:data,country:country})

}
  render(){
    const {data,country}=this.state
    return (
        <div className={styles.container}>
          <Cards data={data}/>
          <CountryPicker CountryHandler={this.CountryHandler}/>
          <Chart data={data} country={country} />
        </div>
      );
  }
}

export default App;

