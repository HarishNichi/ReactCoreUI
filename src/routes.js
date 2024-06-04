import { element } from 'prop-types'
import React from 'react'
const SiteReport = React.lazy(() => import('./views/main/SiteReport'))
const ToolSummary = React.lazy(() => import('./views/main/ToolSummary'))
const ToolsOverview = React.lazy(() => import('./views/main/ToolsOverview'))
const SuperBox = React.lazy(() => import('./views/tool/SuperBox'))
const Saver= React.lazy(() => import('./views/tool/Saver'))
const Impact= React.lazy(() => import('./views/tool/Impact'))
const Sander180= React.lazy(() => import('./views/tool/180Sander'))
const Blower= React.lazy(() => import('./views/tool/Blower'))
const BlowerBattery= React.lazy(() => import('./views/tool/BlowerBattery'))
const BoardCutter= React.lazy(() => import('./views/tool/BoardCutter'))
const Chainsaw= React.lazy(() => import('./views/tool/Chainsaw'))
const CircularSaw= React.lazy(() => import('./views/tool/CircularSaw'))
const CircularSawBattery= React.lazy(() => import('./views/tool/CircularSawBattery'))
const CupGrinder= React.lazy(() => import('./views/tool/CupGrinder'))
const ElectricDrill= React.lazy(() => import('./views/tool/ElectricDrill'))
const ElectricTracker= React.lazy(() => import('./views/tool/ElectricTacker'))
const EngineCutter= React.lazy(() => import('./views/tool/EngineCutter'))
const Generator= React.lazy(() => import('./views/tool/Generator'))
const ImpactWrench= React.lazy(() => import('./views/tool/ImpactWrench'))
const MultiCutter= React.lazy(() => import('./views/tool/MultiCutter'))
const Sander= React.lazy(() => import('./views/tool/Sander'))
const Stepladder= React.lazy(() => import('./views/tool/Stepladder'))
const VaccumCleaner= React.lazy(() => import('./views/tool/VacuumCleaner'))
const Demo= React.lazy(() => import('./views/pages/demo/Demo'))
const Demo1= React.lazy(() => import('./views/pages/demo/Demo2'))



//const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/demo',  name: 'Demo', element: Demo },
  { path: '/demo1',  name: 'Demo1', element: Demo1 },
  { path: '/tool-overview', name: 'ToolsOverview', element: ToolsOverview },
  { path: '/site-report', name: 'SiteReport', element: SiteReport },
  { path: '/tool-summary', name: 'ToolSummary', element: ToolSummary},
  { path: '/super-box', name: 'SuperBox', element: SuperBox},
  { path: '/saver', name: 'Saver', element: Saver},
  { path: '/impact', name: 'Impact', element: Impact},
  { path: '/sander', name: 'Sander', element: Sander},
  { path: '/electric-drill', name: 'ElectricDrill', element: ElectricDrill},
  { path: '/stepladder', name: 'StepLadder', element: Stepladder},
  { path: '/board-cutter', name: 'BoardCutter', element: BoardCutter},
  { path: '/multi-cutter', name: 'MultiCutter', element: MultiCutter},
  { path: '/circular-saw', name: 'CircularSaw', element: CircularSaw},
  { path: '/circular-saw-battery', name: 'CircularSawBattery', element: CircularSawBattery},
  { path: '/electric-tacker', name: 'ElectricTracker', element: ElectricTracker},
  { path: '/generator', name: 'Generator', element: Generator},
  { path: '/blower', name: 'Blower', element: Blower},
  { path: '/blower-battery', name: 'BlowerBattery', element: BlowerBattery},
  { path: '/chainsaw', name: 'ChainSaw', element: Chainsaw},
  { path: '/engine-cutter', name: 'EngineCutter', element: EngineCutter},
  { path: '/vacuum-cleaner', name: 'VaccumCleaner', element: VaccumCleaner},
  { path: '/180-sander', name: '180Sander', element: Sander180},
  { path: '/cup-grinder', name: 'CupGrinder', element: CupGrinder},
  { path: '/impact-wrench', name: 'ImpactWrench', element: ImpactWrench},

  // { path: '/dashboard', name: 'Dashboard', element: Dashboard }
]

export default routes
