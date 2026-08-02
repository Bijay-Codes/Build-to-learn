import { useState } from "react"

const morseCodeMap: Record<string, string> = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    "'": '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    ':': '---...',
    '=': '-...-',
    '+': '.-.-.',
    '@': '.--.-.'
}
export function MorseCode() {
    const [text, setText] = useState<string>('');
    const [converted, setConverted] = useState<(string | number)[]>([]);
    const [copied, setCopied] = useState<true | false | 'fail'>(false);
    const convertToMorse = (text: string) => {
        const separatedText = text.toLowerCase().split('');
        const translated = separatedText.map(char => {
            const key = char.toLowerCase();
            if (!morseCodeMap[key]) {
                if (key === ' ') {
                    return '/';
                } else if (isFinite(Number(key))) {
                    return Number(key);
                } else {
                    return '-err-beep-'
                }
            } else {
                return morseCodeMap[key];
            }
        })
        setConverted(translated);
    }
    const copyMorseCode = () => {
        const textFormat = converted.reduce((text, letter) => {
            return text + String(letter);
        }, '');
        navigator.clipboard.writeText(String(textFormat)).
            then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            }).catch(() => {
                setCopied('fail');
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            });
    }
    return (
        <div className="flex flex-col gap-6 items-start">
            <h1 className="text-6xl font-extrabold pb-6">Text to Morse code!!</h1>
            <label htmlFor="text-input" className="text-2xl font-bold">Enter text</label>
            <input
                type="text"
                id="text-input"
                value={text}
                className="w-full max-w-1/2 p-3 outline outline-offset-4 rounded
                outline-accent-bg/70 bg-surface-bg text-surface-fg
                hover:text-surface-muted-fg hover:bg-surface-muted-bg
                active:bg-primary-bg active:text-primary-fg
                focus:bg-surface-muted-bg focus:text-surface-muted-fg"
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' ? convertToMorse(text) : ''}
            />
            <button className="px-6 py-2 rounded 
            hover:bg-accent-bg hover:text-accent-fg text-surface-fg bg-surface-muted-bg
            text-xl font-black"
                onClick={() => convertToMorse(text)}>Convert</button>
            {converted.length > 0 &&
                <div
                    className="p-6 text-sm relative min-w-40 max-w-200
                    rounded rounded-tl-sm rounded-bl-sm
                    outline outline-offset-1
                    border-l-4 border-accent-bg
                  bg-surface-bg text-surface-fg outline-accent-bg/20">
                    <span
                        onClick={copyMorseCode}
                        className="absolute top-2 right-2
                        active:text-accent-bg hover:text-primary-bg text-secondary-bg">
                        {!copied ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4">
                                <path fillRule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2" />
                            </svg>
                            : copied === true ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 text-accent-bg">
                                    <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-danger-color" viewBox="0 0 1024 1024">
                                    <path fill="currentColor" d="M557.2 608L693 472.3L647.7 427L512.1 562.8L376.3 427L331 472.3L466.8 608L331 743.7l45.2 45.3L512 653.2L647.7 789l45.3-45.3L557.3 608zM704 192h160v736H160V192h160v64h384zm-320 0V96h256v96z"></path>
                                </svg>
                        }
                    </span>
                    {converted?.map((char, i) => <span key={i}>{char + ' '}</span>)}
                </div>
            }
            {
                converted.includes('/') &&
                <span className="text-xs text-primary-bg">* the / represents the space between words</span>
            }
            {
                converted.includes('-err-beep-') &&
                <span className="text-xs text-primary-bg">* the -err-beep- represents some bad input was entered</span>
            }
            <BuildLogs />
        </div>
    )
}

const QA = [
    {
        question: 'What this is?',
        answer: 'Well... its just a practice project i built, but didnt learn much with it because it was simple as hell.'
    },
    {
        question: 'What i learnt by building it?',
        answer: `To make copy text to a clipboard function- turns out it was easy just i didnt know the syntax which was navigator.clipboard.writeText(string),
             I also know it can fail too so its important to handle this edgecase`,
    }
]

function BuildLogs() {
    return (
        <section className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-black">Build logs</h1>
            {QA.map(item => (
                <details key={item.question} className="bg-surface-bg p-4 w-1/2 text-surface-fg">
                    <summary className="cursor-pointer marker:text-primary-bg">
                        <span className="text-xl">{item.question}</span>
                    </summary>
                    <p className="text-base mt-2">
                        {Array.isArray(item.answer) ?
                            <ol className="list-decimal list-inside text-surface-fg/80">
                                {item.answer.map(point => (
                                    <li>{point}</li>
                                ))}
                            </ol>
                            :
                            <span className="text-surface-fg/80">{item.answer}</span>
                        }
                    </p>
                </details>
            ))}
        </section>
    )
}