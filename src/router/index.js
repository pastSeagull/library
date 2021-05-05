import Seek from '../pages/search/seek'
import Personal from '../pages/personal'
import App from '../App'

const routes = [
  {
    path: '/search:id',
    component: Seek,
  },
  {
    path: '/personal',
    component: Personal,
  },
  {
    path: '/',
    component: App,
  },
]

export default routes
