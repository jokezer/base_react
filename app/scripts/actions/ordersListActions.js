import Reflux from 'reflux';
import Superagent from 'superagent'

const OrderActions = Reflux.createActions([
  {'loadOrders': {children: ['completed', 'failed']}},
  'clearOrders'
]);

OrderActions.loadOrders.listen(function(data){
  Superagent
    .get('/orders')
    .query(data)
    .end((error, response) => {
      this.completed(response);
    });
    // on error
    // this.failed('an error occured');
  });

export default OrderActions;
