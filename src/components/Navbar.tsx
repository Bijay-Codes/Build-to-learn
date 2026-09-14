import { NavLink } from 'react-router';
import { pagePaths } from '../pages/Pages';

export function Navbar() {
    return (
        <nav className='bg-surface-bg text-surface-fg w-full p-4 min-h-15 sticky top-0 z-50 border-b border-b-accent-bg'>
            <ol className='flex gap-4 text-xl'>
                <li>
                    <NavLink
                        to={pagePaths.home}
                        className={(selected) => selected ? 'selected' : 'normal'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={pagePaths.intro}
                        className={(selected) => selected ? 'selected' : 'normal'}>
                        Introduction
                    </NavLink>
                </li>
            </ol>

        </nav>
    )
}