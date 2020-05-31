import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from './App'
import Side from './components/Side'

export default (
    <Switch>
        <Route exact path = '/' component={App} />
        <Route path = '/side' component={Side} />
    </Switch>
)