import './App.css';
import ProductList from './components/ProductList';

function App() {

    const randomNum = Math.floor(Math.random() * 10 + 1);
    const hobbies = ["Swimming", "Tennis", "Watching Movies"];

    const products = [
        {
            id: 1,
            title: "Macbook Pro M1",
            price: 100,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis totam velit esse voluptas possimus, ipsum voluptates?",
            image: "https://images.unsplash.com/photo-1650820497643-84dfad23d039?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hY2Jvb2tzfGVufDB8fDB8fHww"
        },
        {
            id: 2,
            title: "Macbook Pro M2",
            price: 200,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis totam velit esse voluptas possimus, ipsum voluptates?",
            image: "https://images.unsplash.com/photo-1630453016469-b2abb1d758bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hY2Jvb2tzfGVufDB8fDB8fHww"
        },
        {
            id: 3,
            title: "Macbook Pro M3",
            price: 300,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis totam velit esse voluptas possimus, ipsum voluptates?",
            image: "https://images.unsplash.com/photo-1676567463919-ed785e45ed3d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2Jvb2tzfGVufDB8fDB8fHww"
        },
        {
            id: 4,
            title: "Macbook Pro M4",
            price: 500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis totam velit esse voluptas possimus, ipsum voluptates?",
            image: "https://images.unsplash.com/photo-1676567463926-b0378e36a209?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Jvb2tzfGVufDB8fDB8fHww"
        },
        {
            id: 5,
            title: "Macbook Pro M5",
            price: 600,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis totam velit esse voluptas possimus, ipsum voluptates?",
            image: "https://images.unsplash.com/photo-1650820497643-84dfad23d039?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hY2Jvb2tzfGVufDB8fDB8fHww"
        },
    ]

    return (
        <div>

            <h1>My First React App</h1>
            <h2>My random no is {randomNum}</h2>
            {randomNum === 7 ? <img src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUybHg5NzlnNG9ocXBvcGExcGFmeWpnY3UxbjE1Nm1wbWV1MWdrYXRwOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6brH8dM3zeMyA/200w.gif" /> : <h2>Oops! Its not 7 yet</h2>}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis quod quis accusamus, laudantium omnis vitae ex temporibus harum veritatis labore eos rem odio laboriosam ipsa necessitatibus. Ipsa, laudantium ratione?</p>
            <h2>My Hobbies</h2>
            <ul>
                {hobbies.map((hobby, idx) => {
                    return <li key={idx}>{hobby}</li>
                })}
            </ul>

            <ProductList products={ products } />
        </div>
    )
}

export default App
