import { createBrowserRouter } from 'react-router-dom'
import { MindovgPage } from './pages/InfoPage/Mindovg/MindovgPage'
import { PrincePage } from './pages/PrincePage'
import { InfoPage } from './pages/InfoPage/InfoPage/InfoPage'
import { QrCodes } from './pages/QrCodes/QrCodes'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrincePage/>,
    },
    {
      path:'/info/mindovg',
      element: <MindovgPage/>
    },
    {
      path:'/info/troynat',
      element: <InfoPage/>
    },
    {
      path:'/info/voyshelk',
      element: <InfoPage/>
    },
    {
      path:'/info/shvarn',
      element: <InfoPage/>
    },
    {
      path:'/info/troyden',
      element: <InfoPage/>
    },
    {
      path:'/info/dovomont',
      element: <InfoPage/>
    },
    {
      path:'/info/budikid',
      element: <InfoPage/>
    },
    {
      path:'/info/budivid',
      element: <InfoPage/>
    },
    {
      path:'/info/viten',
      element: <InfoPage/>
    },
    {
      path:'/info/gedimin',
      element: <InfoPage/>
    },
    {
      path:'/info/evnut',
      element: <InfoPage/>
    },
    {
      path:'/info/olgerd',
      element: <InfoPage/>
    },
    {
      path:'/info/yagaylo',
      element: <InfoPage/>
    },
    {
      path:'/info/keystut',
      element: <InfoPage/>
    },
    {
      path:'/info/vitovt',
      element: <InfoPage/>
    },
    {
      path:'/info/keystut',
      element: <InfoPage/>
    },
    {
      path:'/info/svidrigaylo',
      element: <InfoPage/>
    },
    {
      path:'/info/sizigmund',
      element: <InfoPage/>
    },
    {
      path:'/info/kazimir',
      element: <InfoPage/>
    },
    {
      path:'/info/alexander',
      element: <InfoPage/>
    },
    {
      path:'/info/sizigmund1',
      element: <InfoPage/>
    },
    {
      path:'/info/sizigmund2',
      element: <InfoPage/>
    },
    {
      path:'/codes',
      element:<QrCodes></QrCodes>
    }


])

