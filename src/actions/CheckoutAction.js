export const checkout = movie => {
    return {
        type: 'CHECKOUT',
        movie: movie
    }
};