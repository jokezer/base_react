import Reflux from 'reflux';
import Superagent from 'superagent'

const OrderActions = Reflux.createActions({
  'loadOrders': {children: ['completed', 'failed']}
});

OrderActions.loadOrders.listen(function(){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
    Superagent
      .get('/orders')
      .end((error, response) => {
        this.completed(response);
      });

    // on error
    // this.failed('an error occured');
    });

export default OrderActions;
