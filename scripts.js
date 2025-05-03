const product = [
    {
        id: 1,
        image: 'assets/gg-1.jpeg', 
        title: 'Z Flip Foldable',
        price: 120,
        category: 'mobile'
    },

    {
        id: 1,
        image: 'assets/hh-2.jpeg',
        title: 'Air Pods Pro',
        price: 60,
        category: 'airpods'

    },

    {
        id: 1,
        image: 'assets/ee-3.jpg', 
        title: '250D DSLR Camera',
        price: 230,
        category: 'cameras'
    },

    {
        id: 2,
        image: 'assets/gg-2.jpeg',
        title: 'Foldable Mobile',
        price: 300,

    },

    {
        id: 2,
        image: 'assets/hh-3.jpeg',
        title: 'Estojo Air Pods',
        price: 65,
        category: 'airpods'
    },

    {
        id: 2,
        image: 'assets/ee-2.jpg', 
        title: 'DSLR Camera',
        price: 200,
        category: 'cameras'
    },

    {
        id: 3,
        image: 'assets/dd-2.jpeg',
        title: 'Macbook',
        price: 1000,
        category: 'Laptop'
    },

    {
        id: 3,
        image: 'assets/gg-3.jpg',
        title: 'Celular',
        price: 350,
    },

    {
        id: 3,
        image: 'assets/ee-1.jpeg',
        title: 'DSLR Camera',
        price: 130,
        category: 'cameras'
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
{
    let { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>
            <button>Adicionar ao Carrinho</button>
            </div>
            </div>`)
    }).join('');
}; 

const filterFirstCategories = categories.filter(item);

function item(value){
    if(value.id==1){
        return(
            value.id
        )
    }
}

displayItem(filterFirstCategories)

const btns = [
    {
        id: 1,
        name: '<<'
    },

    {
        id: 1,
        name: '1'
    },

    {
        id: 2,
        name: '2'
    },
    {
        id: 3,
        name: '3'
    },
    {
        id: 3,
        name: '>>',
    },
]

const filters = [...new Set(btns.map((btn)=>
    {return btn}))]

document.getElementById('btns').innerHTML = filters.map((btn)=> {
    let {name, id} = btn;
    return(
        "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
    )
}). join('');  

const filterItems = (a)=>{
    const filterCategories = categories.filter(item);
    function item(value){
        if(value.id==a){
            return(
                value.id
            )
        }
    }
    displayItem(filterCategories)
}