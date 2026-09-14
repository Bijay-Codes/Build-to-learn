import { useActionState } from "react";

interface ActionStateData {
    err: string | null;
    todo: string[];
}

async function formFunction(prev: ActionStateData, formData: FormData | 'clear') {
    if (formData === 'clear') return { err: '', todo: [] };
    const data = formData.get('text-inp');
    if (typeof data !== 'string' || !data) return { ...prev, err: 'Input an text' };
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('')
        }, 1000);
    });
    return { ...prev, todo: [...prev.todo, data] };
}
export default function ActionStateDemo() {
    const [form, modifyTodo, isPending] = useActionState(formFunction, { err: '', todo: [] });
    return (
        <main className="flex flex-col gap-6 transition-colors duration-300 ease-in-out">
            <form action={modifyTodo} className="flex gap-2">
                <input disabled={isPending}
                    type="text" name="text-inp"
                    placeholder="Todo"
                    className="
                    bg-surface-bg text-surface-fg border-accent-bg/40 
                    p-2 rounded border focus:outline-0 disabled:bg-accent-bg/20" />
                <button disabled={isPending}
                    className="
                    hover:bg-accent-bg/60 hover:text-accent-bg
                    disabled:bg-accent-bg/50
                    bg-accent-bg text-accent-fg
                    active:bg-accent-bg/60 active:text-accent-bg
                    py-3 px-6 rounded"
                    type="submit">
                    {isPending ? 'Adding...' : 'Add todo'}
                </button>
            </form>
            <div className="flex flex-col gap-4 max-w-200">
                <div className="flex gap-4 w-full">
                    <span className="text-xl">Tasks</span>
                    <button onClick={() => modifyTodo('clear')}
                        className="bg-primary-bg text-primary-fg
                        hover:bg-primary-bg/60 hover:text-primary-bg
                        py-2 px-6 rounded inline-flex justify-center items-center ml-auto">
                        Clear all
                    </button>
                </div>
                <div className="flex gap-4 flex-wrap max-w-200">
                    {form.todo.map((item: string) => <span className="bg-surface-bg text-surface-fg w-fit min-w-30 p-4">{item}</span>)}
                </div>
            </div>
        </main>
    );
}