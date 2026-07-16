import { useContext } from 'react';
<<<<<<< HEAD
import './ui/Alert.css'
=======
import './ui/Alert.css';
>>>>>>> ce34a65b82723be3490004be8708127ff8553d5c
import AppContext from '../_context/AppContext';
import type IAlertData from './model/IAlertData';

export default function Alert({data}:{data:IAlertData}) {
    const {showAlert} = useContext(AppContext);
<<<<<<< HEAD
=======

>>>>>>> ce34a65b82723be3490004be8708127ff8553d5c
    return <div className='alert-bg'>
        <div className='alert-fg'>
            {data.message}
            <button onClick={() => showAlert(null)}>Close</button>
        </div>
<<<<<<< HEAD
    </div>
}
=======
    </div>;
}
/*
Д.З. Реалізувати відображення на модальному вікні Alert
заголовку повідомлення та його тексту
Впровадити стилізацію модального вікна
*/
>>>>>>> ce34a65b82723be3490004be8708127ff8553d5c
