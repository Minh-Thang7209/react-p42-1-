import { useContext } from 'react';
import './ui/Alert.css'
import AppContext from '../_context/AppContext';
import type IAlertData from './model/IAlertData';

export default function Alert({ data }: { data: IAlertData }) {
    const { showAlert } = useContext(AppContext);
    return (
        <div className="alert-bg">
            <div className="alert-fg">
                <h3 className="alert-title">{data.title}</h3>

                <p className="alert-message">
                    {data.message}
                </p>

                <button
                    className="btn btn-primary"
                    onClick={() => showAlert(null)}
                >
                    Закрити
                </button>
            </div>
        </div>
    );
}
