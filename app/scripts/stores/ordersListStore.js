import Reflux from 'reflux';
import OrderActions from '../actions/ordersListActions';
import _ from 'lodash'

let OrderStore = Reflux.createStore({
  listenables: OrderActions,
  
  init() {
    this.items = [];
  },

  loadOrders() {
    this.trigger({ 
      loading: true
    });
  },

  loadOrdersCompleted(items) {
    this.items = _.concat(this.items, items)

    this.trigger({ 
      items : this.items,
      loading: false
    });
  },

  loadOrdersFailed(error) {
    this.trigger({ 
      error : error,
      loading: false
    });
  },

  clearOrders() {
    this.items = [];
  }
});

export default OrderStore;