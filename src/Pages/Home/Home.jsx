import Banner from "../../Components/Banner/Banner";
import CategoryCard from "../../Components/Category_card/CategoryCard";
import NewsLetter from "../../Components/News Letter/NewsLetter";
import Subscrition from "../../Components/Subscription/Subscrition";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCard></CategoryCard>
            <Subscrition></Subscrition>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;