import { Link } from '@tanstack/react-router';
import './dashboard.scss';

export function Dashboard() {
    return (
        <div className='dashboard'>
            <h1>Dashboard Dragon Ball</h1>
            <ul className='dashboard__list'>
                <Link className='dashboard__list__card'
                    to='/characters'>
                    Personnages
                </Link>
            </ul>
        </div>
    )
}