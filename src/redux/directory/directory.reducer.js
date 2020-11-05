const INITIAL_STATE = {
    sections: [
        {
            title: 'Supplements',
            imgUrl: '/img/directory/supplements.jpg',
            linkUrl: 'shop/supplements',
            id: 1
        },
        {
            title: 'Fitness clothing',
            imgUrl: '/img/directory/clothes.jpg',
            linkUrl: 'shop/clothing',
            id: 2
        },
        {
            title: 'Products',
            imgUrl: '/img/directory/products.jpg',
            linkUrl: 'shop/products',
            id: 3
        },
        {
            title: 'Home Gym',
            imgUrl: '/img/directory/homegym.jpg',
            linkUrl: 'shop/homegyme',
            id: 4
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;