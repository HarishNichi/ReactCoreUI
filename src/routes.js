import React from 'react'
const SiteReport = React.lazy(() => import('./views/main/SiteReport'))
const ToolSummary = React.lazy(() => import('./views/main/ToolSummary'))
const ToolsOverview = React.lazy(() => import('./views/main/ToolsOverview'))


//const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/dashboard', exact: true, name: 'Home' },
  { path: '/tool-overview', name: 'ToolsOverview', element: ToolsOverview },
  { path: '/site-report', name: 'SiteReport', element: SiteReport },
  { path: '/tool-summary', name: 'ToolSummary', element: ToolSummary}
  
  // { path: '/dashboard', name: 'Dashboard', element: Dashboard }
]

export default routes
