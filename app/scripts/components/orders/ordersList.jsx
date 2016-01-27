import React from 'react';
import { Link } from 'react-router';
import OrderActions from '../../actions/ordersListActions';

const LoadMoreButton = React.createClass({
  getInitialState() {
    return {page: 1}
  },

  propTypes: {
    loading : React.PropTypes.bool
  },

  loadMoreOrders() {
    ++this.state.page
    OrderActions.loadOrders({page: this.state.page});
  },

  render() {
    return (
      <a className="btn btn-default" disabled={this.props.loading}
      onClick={this.loadMoreOrders} role="button">Load More {this.state.page}</a>
    );
  }
});

class OrderItem extends React.Component {

  constructor(props) {
    super(props);
    this.files = this.props.files.map(file => <img key={file} className="img-thumbnail col-sm-1" src={file} />)
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">
          
          <p>{this.props.content}</p>

          <p><b>Attachments: {this.files.length} files</b></p>
          <p className="row">
            {this.files}
          </p>

          <Link to={"orders/" + this.props.id} className="btn btn-success">Show</Link>
        
        </div>
      </div>
    );
  }
};

OrderItem.propTypes = { title : React.PropTypes.string }
OrderItem.defaultProps = {title: "Order"}

const OrdersList = (props) => {
  let items = props.items.map(item => <OrderItem {...item} key={item.id} />),
      loading = props.loading ? <div className="loading-label">Loading...</div> : '';

  return (
    <div>
      <ul>
        {items}
      </ul>
      {loading}
      <LoadMoreButton loading={props.loading} />
    </div>
  );
};

OrdersList.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
}

export default OrdersList;
