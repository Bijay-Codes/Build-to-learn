import { useNavigate } from "react-router";
import { pagePaths } from "../pages/Pages";
export function Problems() {
    const navigate = useNavigate();
    return (
        <section className="p-10">
            <main className="flex flex-col flex-wrap gap-6">
                <div onClick={() => navigate(pagePaths.morseCodeTranslator)}>
                    <h1 className="text-2xl">Text to morse code translator</h1>
                    <h2>
                        A translator tool that converts text to morsecode with copy feature...
                    </h2>
                    <p className="max-w-120">
                        I have literally nothing to say on this excersise tbh i didnt learnt to do something while making this one.
                        idk why i'm even listing it here
                    </p>
                </div>
                <div onClick={() => navigate(pagePaths.svgpractice)}>
                    <h1>SVG practicing</h1>
                    <h2>Practicing to animate SVGs, manupulate them with diffrent methods/approach that come with them to make the sites feel alive</h2>
                </div>
                <div
                    onClick={() => navigate(pagePaths.reactActionState)}>
                    Practicing react hooks like useActionState to elevate skills
                </div>
                <div onClick={() => navigate(pagePaths.mouseTracker)}>
                    Practicing tracking mouse cordinates to style the page in a more pleasing way
                </div>
            </main>
        </section>
    )
}