import {Route, Routes, Navigate, Switch, useRoutes} from 'react-router-dom'
import Layout from '../components/layout'
import Delivery from '../pages/delivery'
import Payment from '../pages/payment'
import Finish from '../pages/finish'

const Router = () => {

  const router = useRoutes(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {path: "/", element: <Navigate to="/delivery" />},
          {path: "delivery", element: <Delivery />},
          { path: "payment", element: <Payment /> },
          { path: "finish", element: <Finish /> }
        ]
      }
    ]
  )
  return router
}

export default Router