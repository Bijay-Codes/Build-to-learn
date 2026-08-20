import { useState } from "react"

export function SvgAnim() {
    return (
        <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            <Circle />
            <Rect />
        </section>
    )
}

function Circle() {
    const [radius, setRadius] = useState(20);
    return (
        <div className="w-full h-full max-w-50 min-h-40 flex flex-col gap-4">
            <input type="number"
                className="p-2 bg-surface-bg text-surface-fg outline outline-accent-bg/40 rounded"
                name="radius input"
                value={radius}
                defaultValue={20}
                onChange={(e) => setRadius(Number(e.target.value))}
            />
            <svg viewBox="0 0 100 100" className="bg-accent-bg/20 rounded-lg">
                <circle cx='50' cy='50'
                    r={radius} strokeDasharray={radius / 1}
                    className="fill-none animate-spin transition-transform ease-in-out duration-300
                stroke-4 stroke-accent-bg/90 origin-center transform-fill"></circle>
            </svg>
            <span>
                <h1 className="mb-2 text-2xl">Key observation</h1>
                <h2>when we dont give an specific transform origin and try to animate the circle it results in circle rotating on the viewbox postion given, but most of the time we want it to circle/rotate inside its own postion we fix this issue by defining which box the transform origin should be, the syntax was- transform-fill which in css is transform-box: fill-box; paired with origin-center / transform-origin: center;</h2>
            </span>
        </div>
    )
};


function Rect() {
    const [height, setHeight] = useState(20);
    const [width, setWidth] = useState(20);

    return (
        <div>
            <input type="number" name="height input" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
            <input type="number" name="width input" value={width} onChange={(e) => setWidth(Number(e.target.value))} />
            <svg viewBox="0 0 100 100" className="bg-surface-bg">
                <rect x={(100 - width) / 2} y={(100 - height) / 2} className="fill-accent-bg rotate-x-0 hover:rotate-z-10 perspective-near"
                    height={height} width={width} ></rect>
            </svg>
        </div>
    )
}