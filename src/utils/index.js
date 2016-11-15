import React from 'react';
import Match from 'react-router/Match';
export const MatchWithSubRoutes = (route) => (
	<Match {...route} render={(props) => (<route.component {...props} subRoutes={route.subRoutes}/>)}/>
)
