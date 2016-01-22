import Reflux from 'reflux';
import Superagent from 'superagent'

const ItemActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']}
});

ItemActions.loadItems.listen(function(){
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

export default ItemActions;