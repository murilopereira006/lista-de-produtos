import ProductList from "../../components/productList";
import { produtos } from '../../utils/data'

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <ProductList products={produtos} />
        </div>
    );
};

export default Home;
