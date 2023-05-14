export const totalPrice = (price) => {
    // if(!price.priceDropshipping) {
    //     price.priceDropshipping = 0
    // }
    let total = 0;
    for (let values of Object.values(price)) {
        total += values 
    }

    return total
}