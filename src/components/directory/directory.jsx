import React from 'react';
import { connect } from 'react-redux';
import { selectDirectory } from '../../redux/directory/directorySelector';
import "./directory.scss";
import{ createStructuredSelector } from "reselect"
import Menuitems from '../Menu-item/menu-item';

function Directory({sections}) {  
    return (
      <div className ="directory-menu">
      {sections.map(({id , ...otherprops}) =>
      <Menuitems key={id} {...otherprops}/> )}
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectory
})



export default connect(mapStateToProps)(Directory)

    
        

