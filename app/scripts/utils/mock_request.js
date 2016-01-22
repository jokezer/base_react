import Mock from 'superagent-mocker';
import Superagent from 'superagent';
// TODO: fixme to isDev
// Load this file only if isDev == true
let mock_request = Mock(Superagent);

//TODO: put it to fixtures
let ordersData = [
  {id: 1, content: 'Order 1'},
  {id: 2, content: 'Order 2'},
  {id: 3, content: 'Order 3'}
]

mock_request.get('/orders', function(req) {
  return ordersData
});

mock_request.get('/orders/:id', function(req) {
  return {
    id: req.params.id,
    content: 'Content of the order'
  };
});