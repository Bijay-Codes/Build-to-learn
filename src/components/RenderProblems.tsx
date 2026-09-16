import { useNavigate } from "react-router";
import { pagePaths } from "../pages/Pages";
export function Problems() {
    const navigate = useNavigate();
    const problemStyles = 'bg-surface-bg text-surface-fg p-4 outline outline-accent-bg/20 max-w-100 flex flex-col gap-4 justify-center items-center rounded hover:bg-surface-muted-bg hover:text-surface-muted-fg'
    return (
        <section className="p-10">
            <main className="flex flex-wrap gap-6">
                <div onClick={() => navigate(pagePaths.morseCodeTranslator)} className={problemStyles}>
                    <h1 className="text-2xl">Text to morse code translator</h1>
                    <h2 className="text-lg">
                        A translator tool that converts text to morsecode with copy feature...
                    </h2>
                    <p className="max-w-120">
                        I have literally nothing to say on this excersise tbh i didnt learnt to do something while making this one.
                        idk why i'm even listing it here
                    </p>
                    <span className="text-center mt-auto text-accent-bg">Click to see it working</span>
                </div>
                <div onClick={() => navigate(pagePaths.svgpractice)} className={problemStyles}>
                    <h1 className="text-2xl">SVG practicing</h1>
                    <h2 className="text-lg">Practicing to animate SVGs, manupulate them with diffrent methods/approach that come with them to make the sites feel alive</h2>
                    <span className="text-center mt-auto text-accent-bg">Click to see it working</span>
                </div>
                <div className={problemStyles}
                    onClick={() => navigate(pagePaths.reactActionState)}>
                    <h1 className="text-2xl">React hooks</h1>
                    <p className="text-lg">Practicing react hooks like useActionState to elevate skills with,
                        Key observations: it is just doing extra work for us instead us tracking and calling the error we leave it to the state we just have to handle what happens when there is an error</p>
                    <span className="text-center mt-auto text-accent-bg">Click to see it working</span>
                </div>
                <div className={problemStyles} onClick={() => navigate(pagePaths.mouseTracker)}>
                    <h1 className="text-2xl">Cursor trail animation</h1>
                    <p className="text-lg">Practicing tracking mouse cordinates to style the page in a more pleasing way, Just a fun little excersise to learn the window syntax of how to track and animate the position of something that follows the cursor constantly</p>
                    <span className="text-center mt-auto text-accent-bg">Click to see it working</span>
                </div>
            </main>
        </section >
    )
}