import Mock from 'superagent-mocker';
import Superagent from 'superagent';
// TODO: fixme to isDev. Load this file only if isDev == true
import ordersData from './fixtures/orders'
import _ from 'lodash'

let build_order = () => {
  return {id: _.random(1, 1000), title: ordersData.titles[Math.floor(Math.random()*ordersData.titles.length)], content: 'content'}
}

let mock_request = Mock(Superagent);
mock_request.timeout = _.random(100, 1000);

mock_request.get('/orders', (req) => {
  return [
    build_order(),
    build_order(),
    build_order()
  ];
});

mock_request.get('/orders/:id', function(req) {
  return {
    id: req.params.id,
    title: 'Title',
    content: 'Content of the order'
  };
});