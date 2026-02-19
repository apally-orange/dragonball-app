import { createFileRoute, Link } from '@tanstack/react-router';
import './index.scss';

export const Route = createFileRoute('/')({
  component: Dashboard,
})

function Dashboard() {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <ul className='list'>
        <Link className='list-card' to='/characters/'>
          Characters
        </Link>
      </ul>
    </div>
  )
}