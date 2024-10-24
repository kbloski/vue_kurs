export default {
    namespaced: true,
    state(){
        return {
            items: [],
            total: 0,
            qty: 0
        }
    },
    mutations: {
        addItem( state, payload){
            const itemExist = state.items.filter( i => i.id === payload.id);
            if (!itemExist.length) return state.items.push( payload )

            state.items.map( i => {
                if (i.id === payload.id) i.qty += 1
                return i
            })
        },
        removeItem( state, payload){
            state.items = state.items.filter( item => {
                item.id !== payload.id
            })
        },
        refreshQty( state ){
            let qty = 0
            state.items.forEach( i => {
                qty += i.qty
            });
            state.qty = qty
        },
        refreshTotal( state ){
            let total = 0
            state.items.forEach( i => {
                total += i.qty * i.price;
            });
            state.total = total
        }
    },
    actions: {
        addToCart( context, payload){
            context.commit('addItem', { ...payload, qty: 1});
            context.commit('refreshQty');
            context.commit('refreshTotal');
        },
        removeFromCart( context, payload ){
            context.commit( 'removeItem' , payload);
            context.commit('refreshQty');
            context.commit('refreshTotal');
        }
    },

    getters: {
        total(state){
            return state.total
        },
        qty( state ){
            return state.qty
        },
        items( state ){
            return state.items
        }
    }
}