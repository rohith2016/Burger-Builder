import React from 'react';

import Aux from '../../hoc/Aux';

import classes from './layout.css';

const layout = (props) => (

    <Aux>
        <div>toolbar, sidebar</div>
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);
export default layout;