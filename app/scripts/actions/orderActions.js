import Reflux from 'reflux';
import Superagent from 'superagent'

const OrderActions = Reflux.createActions([
  {'loadOrder': {children: ['completed', 'failed']}}
]);

OrderActions.loadOrder.listen(function(orderId){
  Superagent
    .get(`/orders/${orderId}`)
    .end((error, response) => {
      this.completed(response);
    });
    // on error
    // this.failed('an error occured');
  });

export default OrderActions;
