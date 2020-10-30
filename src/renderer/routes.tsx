import { RouteProps } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PreparePage } from './pages/PreparePage'

export const routes: Array<RouteProps> = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/prepare',
    component: PreparePage,
    exact: true,
  },
  {
    path: '*',
    component: HomePage,
  },
]
