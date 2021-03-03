import Main from '../components/Main';
import injectSheet from 'react-jss';
import {classes} from './Main-jss'

/*
const classes = { // si el atributo tiene un guion, se cambia por mayuscula la primera siguiente
    main: {
        backgroundColor: '#300',
    }
}
*/

export default injectSheet(classes)(Main); //envolver el componente main con las clases css que estan definidas en "classes"

// "React-JSS es una alternativa a sass: en cada proyecto elegir la que más (n)os convenga"