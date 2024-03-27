import { NavLink } from 'react-router-dom';
import logoData from '../assets/datos-generales.svg';
import logoPlan from '../assets/plandetrabajo.svg';
import { TabulatorElement } from '.';


export const Tabulator = () => {
    return (
        <div className="tabulator d-flex justify-content-start">
            <ul>
                <li>
                    <NavLink 
                        to="/datos" 
                        className={ ({ isActive }) => isActive ? 'element-active' : '' }
                    >
                        <TabulatorElement src={ logoData } text="DATOS" />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/plan" 
                        className={ ({ isActive }) => isActive ? 'element-active' : '' }
                    >
                        <TabulatorElement src={ logoPlan } text="PLAN" />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
