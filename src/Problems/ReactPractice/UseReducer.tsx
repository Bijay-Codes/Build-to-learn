import { useReducer } from "react"

function dispatchHandler(prev: CartState, dispatchAction: DispatchAction) {
    switch (dispatchAction.type) {
        case ('INC'):
            return {
                ...prev,
                cart: prev.cart.map(
                    prod =>
                        prod.id === dispatchAction.id
                            ? { ...prod, quantity: prod.quantity + dispatchAction.changes } : prod
                )
            };
        case ('DEC'):
            return {
                ...prev,
                cart: prev.cart.map(
                    prod =>
                        prod.id === dispatchAction.id && (prod.quantity > 1)
                            ? { ...prod, quantity: prod.quantity - dispatchAction.changes } : prod
                )
            };
        case ('ADD'):
            if (!dispatchAction.name || !dispatchAction.id || !dispatchAction.price) throw new Error('No id or name provided');
            return {
                ...prev, cart: [...prev.cart, { id: dispatchAction.id, name: dispatchAction.name, quantity: 1 }],
                prices: {
                    ...prev.prices,
                    [dispatchAction.id]: { id: dispatchAction.id, price: dispatchAction.price }
                }
            };
        case ('REM'):
            return { ...prev, cart: prev.cart.filter(prod => prod.id !== dispatchAction.id) };

        default: return prev
    }
}

const initialCartState = {
    cart: [],
    prices: {},
    discounts: {},
}


type Discounts = {
    id: string,
    percent: number;
}

type Cart = {
    id: string,
    name: string,
    quantity: number;
}

type Prices = {
    id: string,
    price: number
}

interface CartState {
    cart: Cart[],
    prices: Record<string, Prices>,
    discounts: Record<string, Discounts>
}

function addProductDispatchHandler(prev: InitialProdInputState, dispatchAction: ProdDispatchHandler) {
    switch (dispatchAction.type) {
        case ('UPD'):

            return {
                ...prev, [dispatchAction.feild]: { ...prev[dispatchAction.feild], val: dispatchAction.val }
            }
    }
}
type InitialProdInputState = {
    prodName: { val: string, err: string },
    prodPrice: { val: number, err: string }
}

type ProdDispatchHandler = {
    type: 'UPD',
    feild: keyof InitialProdInputState,
    val: string | number,
}
type DispatchAction = {
    type: 'INC' | 'DEC' | 'REM' | 'ADD'
    name?: string,
    price?: number;
    id: string,
    changes: number;
}


export default function ShoppingCart() {
    const [cartObj, dispatch] = useReducer(dispatchHandler, initialCartState);
    const [prodDetails, dispatchProd] = useReducer(addProductDispatchHandler, { prodName: { val: '', err: '' }, prodPrice: { val: 0, err: '' } });
    return (
        <section>
            <section>
                <div className="bg-surface-muted-bg p-6 flex flex-col gap-4 rounded max-w-100">
                    <input type="text" name="prod-name"
                        className="bg-surface-bg text-surface-fg p-2 focus:outline-accent-bg/50 focus:outline"
                        value={prodDetails.prodName.val}
                        placeholder="Product name"
                        onChange={(e) => dispatchProd({ type: 'UPD', feild: 'prodName', val: e.target.value })} />
                    <input type="number" name="price"
                        placeholder="price"
                        className="bg-surface-bg text-surface-fg p-2 focus:outline-accent-bg/50 focus:outline"
                        value={prodDetails.prodPrice.val}
                        onChange={(e) => dispatchProd({ type: 'UPD', feild: 'prodPrice', val: e.target.value })} />
                    <button
                        className="bg-accent-bg text-accent-fg rounded py-2 px-4"
                        onClick={() => {
                            if (!prodDetails.prodName || prodDetails.prodPrice.val <= 0) return
                            dispatch({ type: 'ADD', name: prodDetails.prodName.val, price: prodDetails.prodPrice.val, id: crypto.randomUUID(), changes: 0 }
                            )
                        }}>
                        Add product
                    </button>
                </div>
            </section>
            <main className="flex flex-wrap gap-6 mt-4">
                {cartObj.cart.map((prod, i) => (
                    <article
                        className="bg-surface-bg text-surface-fg min-w-40 h-40 outline outline-accent-bg/20 flex flex-col gap-2 items-center justify-center"
                        key={i}>

                        <h1>Name : <span className="text-xl">{prod.name}</span></h1>
                        <span>qty : {prod.quantity}</span>

                        <span>price : {(cartObj.prices[prod.id].price) * prod.quantity}</span>
                        <div className="flex gap-4">
                            <button className="bg-warning-color text-warning-fg rounded h-6 w-6 inline-flex justify-center items-center"
                                onClick={() => dispatch({ type: 'DEC', id: prod.id, changes: 1 })}>
                                -
                            </button>
                            <button className="bg-success-color text-success-fg rounded h-6 w-6 inline-flex justify-center items-center" onClick={() => dispatch({ type: 'INC', id: prod.id, changes: 1 })}>
                                +
                            </button>
                        </div>
                    </article>
                )
                )}
            </main>
        </section>
    )
}