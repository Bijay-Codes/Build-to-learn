import { NavLink } from 'react-router';
import { pagePaths } from '../pages/Pages';

export function Navbar() {
    const selectedLink = 'border-b-4 border-primary-bg font-extrabold';

    return (
        <nav className='bg-surface-bg text-surface-fg w-full p-4 min-h-15 sticky top-0 z-50 border-b border-b-accent-bg/50'>
            <ol className='flex gap-4 text-xl'>
                <li>
                    <NavLink
                        to={pagePaths.home}
                        className={({ isActive }) => isActive ? selectedLink : ''}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={pagePaths.intro}
                        className={({ isActive }) => isActive ? selectedLink : ''}>
                        Introduction
                    </NavLink>
                </li>
            </ol>

        </nav>
    )
}