import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import RightNavButtons from './RightNavButtons'
import FlatButton from 'material-ui/FlatButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

class CC_AppBar extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <AppBar
        title={this.props.title}
        //iconClassNameRight="muidocs-icon-navigation-expand-more"
        showMenuIconButton={this.props.showMenuIconButton}
        iconElementRight={<RightNavButtons/>}
        //iconElementLeft=Logo
      />
    );
  }
}

export default CC_AppBar;
