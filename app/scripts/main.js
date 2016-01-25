//TODO: where to move initializers?
//TODO: import or require?
import Shkura from './dev_utils/mock_request'
import 'bootstrap/dist/css/bootstrap.css';

import ReactDOM from 'react-dom';
import routes from './routes';

ReactDOM.render(routes, document.getElementById('app'));