var React = require('react');
const ListItem  = require('./ListItem.jsx');

var ingredients = [{'id':1, 'text':'ham'}, {'id':2, 'text':'cheese '}, {'id':3, 'text':'potatoes'}];

var List = React.createClass({
   render: function () {
     var listIems = ingredients.map(function(item) {
       return <ListItem key={item.id} ingredient={item.text} />;
     });

     return (<ul>{listIems}</ul>)
   }
});

module.exports = List;
