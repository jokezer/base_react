import Reflux from 'reflux';
import OrderActions from '../actions/orderActions';
// import _ from 'lodash'

let OrderStore = Reflux.createStore({
  listenables: OrderActions,
  
  init() {
    this.order = {}
    // this.items = [];
  },

  loadOrder() {
    this.trigger({ 
      loading: true
    });
  },

  loadOrderCompleted(item) {
    // this.items = _.concat(this.items, items)
    this.order = item

    this.trigger({ 
      //TODO: does trigger function only signilize that state had changed or sends new state?
      order : this.order,
      loading: false
    });
  },

  loadOrdersFailed(error) {
    this.trigger({ 
      error : error,
      loading: false
    });
  }
});

export default OrderStore;