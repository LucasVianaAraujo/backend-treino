import AddUser from './controller/User/AddUser.js'
import States from './controller/Estados/Estados.js'

export default function AddRoutes(api) {
    api.use(AddUser)
    api.use(States)
}