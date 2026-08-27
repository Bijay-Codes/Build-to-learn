import { useState } from "react"
import './svg.css'
export function SvgAnim() {
    return (
        <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
            <Circle />
            <Rect />
            <Line />
        </section>
    )
}

function Circle() {
    const [radius, setRadius] = useState(20);
    return (
        <div className="w-full h-full max-w-50 min-h-40 flex flex-col gap-4">
            <svg viewBox="0 0 100 100" className="bg-accent-bg/20 rounded-lg">
                <circle cx='50' cy='50'
                    r={radius} strokeDasharray={radius / 1}
                    className="fill-none animate-spin transition-transform ease-in-out duration-300
                stroke-4 stroke-accent-bg/90 origin-center transform-fill"></circle>
            </svg>
            <input type="number"
                className="p-2 bg-surface-bg text-surface-fg outline outline-accent-bg/40 rounded"
                name="radius input"
                value={radius}
                defaultValue={20}
                onChange={(e) => setRadius(Number(e.target.value))} />
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
            <svg viewBox="0 0 100 100" className="bg-surface-bg ">
                <rect x={(100 - width) / 2} y={(100 - height) / 2} className="svg-rect"
                    height={height} width={width} ></rect>
            </svg>
            <div className="flex flex-col gap-4">
                <input type="number" name="height input"
                    className="p-2 bg-surface-bg text-surface-fg outline outline-accent-bg/40 rounded"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))} />
                <input type="number" name="width input"
                    className="p-2 bg-surface-bg text-surface-fg outline outline-accent-bg/40 rounded"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))} />
            </div>
        </div>
    )
}


function Line() {
    const [open, setOpen] = useState(false);
    const opened = { line1y2: 70, line2y2: 30 }
    const close = { line1y2: 30, line2y2: 70 };
    return (
        <div onClick={() => setOpen(!open)}>
            <svg viewBox="0 0 100 100" className="bg-surface-bg">
                <line
                    x1={20} y1={30}
                    x2={80} y2={open ? opened.line1y2 : close.line1y2}
                    stroke="white" strokeLinejoin="round">
                </line>
                {!open && <line
                    x1={20} y1={50}
                    x2={80} y2={50}
                    stroke="white">
                </line>}
                {/* {open && <line x1={80} y1={20} x2={80} y2={50}
                    className="stroke-accent-bg stroke-3"></line>}
                {open && <line x1={20} y1={50} x2={20} y2={80}
                    className="stroke-primary-bg stroke-3"></line>} */}
                <line x1={20} y1={70} x2={80} y2={open ? opened.line2y2 : close.line2y2} stroke="white"></line>
            </svg>
        </div>
    )
}