import React from 'react'
import Header from './../Header/Header'
import ContentBody from '../Errors/PageNotFound'
import Bottom from '../Bottom/Bottom'
import InvoiceFilter from '../Invoice/filter/InvoiceFilter';
import { Switch, Route, useRouteMatch, Link, withRouter, Redirect } from 'react-router-dom';
import InvoiceAdd from '../Invoice/InvoiceAdd/InvoiceAdd';
import PageNotFound from '../Errors/PageNotFound';
function Dashboard({ match }) {
    let { path, url } = useRouteMatch();
    console.log(path);
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path={`${path}/add`} component={InvoiceAdd}></Route>
                <Route path={`${path}/`} component={InvoiceFilter}></Route>
                <Route path={`${path}/not-found`} component={PageNotFound} />
                <Redirect from={`${path}/*`} to={`${path}/not-found`} />
            </Switch>

            <Bottom />
        </React.Fragment >
    )
}

export default withRouter(Dashboard)
