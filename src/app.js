import React from 'react';
import ReactDOM from 'react-dom';
import PeriodicTable from './components/PeriodicTable';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import axios from 'axios';

class App extends React.Component{
    
    state = {
        jobs: []
    }
    
    componentDidMount () {
      this.serverRequest = 
        axios.get(this.props.source)
          .then((result) => {    
            this.setState({
              jobs: result.data.jobs
            });
          })
    }
    
    componentWillUnmount() {
      this.serverRequest.abort();
    }
    
    render() {
      return (
        <div>
          <h1>Jobs!</h1>
          {/* Don't have an ID to use for the key, URL work ok? */}
          {this.state.jobs.map(function(job) {
            return (
              <div key={job.url} className="job">
                <a href={job.url}>
                  {job.company_name}
                  is looking for a 
                  {job.term}
                  {job.title}
                </a>
              </div>
            );
          })}
        </div>
      )
    }
};
  
 


const appRoot = document.getElementById('app');
// ReactDOM.render(<App source="https://codepen.io/jobs.json" />,appRoot);
ReactDOM.render( <PeriodicTable />, appRoot );

console.log("From App JS");