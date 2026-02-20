import { Link } from '@tanstack/react-router';
import './dashboard.scss';

export function Dashboard() {
    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <ul className='list'>
                <Link className='list__card' to='/characters/'>
                    Characters
                </Link>
            </ul>
        </div>
    )
}