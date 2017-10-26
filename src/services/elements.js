// Make a request for a user with a given ID
import Axios from 'axios';

const url = "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json";

const getData = () => {
    const request = Axios.get(url);
    return request
      .then(result => { return result; })
      .catch(error => { throw error; });
}

export default getData;