import { useCallback, useEffect, useState } from "react"
import './tracking.css'
type MouseCords = {
    x: number;
    y: number;
}


export function MouseTracker() {
    const [cords, setCords] = useState<MouseCords>({ x: 0, y: 0 });
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const [chasing, setChasing] = useState<boolean>(prefersReducedMotion ? false : true);

    const handleMouseTracking = useCallback((evnt: MouseEvent) => {
        requestAnimationFrame(() => {
            const x = evnt.clientX;
            const y = evnt.clientY;
            setCords({ x: x, y: y });
        });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseTracking);
        return () => window.removeEventListener('mousemove', handleMouseTracking);
    }, [handleMouseTracking]);
    return (
        <div className="w-full h-full box-border relative flex flex-col gap-12 playground">
            <h1 className="text-4xl font-extrabold">Escape the ball</h1>
            <div className="flex justify-center items-center absolute inset-0 pointer-events-none transition-all duration-1000 ease-in-out">
                {chasing ? (
                    <div
                        style={{
                            transform: `translate(${cords.x}px, ${cords.y}px) translate(-50%,-50%)`,
                            transition: 'transform 0.4s ease-out',
                        }}
                        className="w-6 h-6 rounded-full bg-accent-bg fixed top-0 left-0 pointer-events-none ball"
                    />
                ) :
                    (
                        <div
                            className="w-6 h-6 rounded-full bg-accent-bg pointer-events-none animate-bounce duration-700 ease-in-out ball"
                        />
                    )}
            </div>
            <div>
                <div>Cordinates</div>
                <div className="flex gap-4">
                    <span>X : {cords.x}</span>
                    <span>Y : {cords.y}</span>
                </div>
            </div>
            <button className="bg-accent-bg text-accent-fg w-fit self-center mt-auto rounded py-2 px-6 text-xl action-button"
                onClick={() => setChasing(!chasing)}>
                {chasing ? 'End the Chase' : 'Begin the Chase'}
            </button>
        </div>
    );
}


