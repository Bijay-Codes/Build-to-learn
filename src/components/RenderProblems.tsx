import { useNavigate } from "react-router";
import { pagePaths } from "../pages/Pages";

export function Problems() {
    const navigate = useNavigate();
    return (
        <section className="p-10">
            <main className="flex flex-wrap gap-6">
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
                <div onClick={() => navigate(pagePaths.terminalPets)}>
                    <h1 className="text-2xl">Terminal-pets</h1>
                    <h2 className="max-w-100">Can do CRUD using linux mint commands, add diffrent pets and interact with them using CLI or GUI</h2>
                    <p className="max-w-120">Built to learn OOP and classes concepts, while combining react and classes for the first time</p>
                </div>
            </main>
        </section>
    )
}