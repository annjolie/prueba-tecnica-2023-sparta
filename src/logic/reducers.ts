import { authReducer } from './auth';
import { tasksReducer } from './tasks';

// combina todos los reducers en uno solo para ser usado en el store de redux y poder acceder a todos
// los estados desde cualquier componente de la aplicacion sin necesidad de pasarlos por props

export default {
  authReducer,
  tasksReducer
};
