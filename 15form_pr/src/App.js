import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import FormPR from './FormPR';

// https://www.fnp.com/combos-n-gift-hampers-lp?promo=combos_tab_dt_hm

function App() {

  const products = [
    {
      id    : '1',
      image : "https://www.fnp.com/images/pr/l/v200/sweet-memories-pink-roses-bouquet-chocolate-cake_1.jpg",
      title : "Sweet Memories Pink Roses Bouquet & Chocolate",
      price : "₹ 1475",
      paragraph : "Earliest Delivery: Today"
    },
    {
      id : "3",
      image : "https://www.fnp.com/images/pr/l/v200/personalised-notebook-chocolate-combo_1.jpg",
      title : "Personalised Notebook & Chocolate Combo",
      price : "₹ 1399",
      paragraph : "Earliest Delivery: Today"
    },
    {
      id : "4",
      image : "https://www.fnp.com/images/pr/l/v200/eggless-truffle-cake-money-plant_1.jpg",
      title : "Eggless Truffle Cake & Money Plant",
      price : "₹  1725",
      paragraph : "Earliest Delivery: Today"
    },
    {
      id : "5",
      image : "https://www.fnp.com/images/pr/l/v200/all-things-chocolate-special-hamper_1.jpg",
      title : "All Things Chocolate Special Hamper",
      price : "₹ 2599",
      paragraph : "Earliest Delivery: Tomorrow"
    },
    {
      id : "6",
      image : "https://www.fnp.com/images/pr/l/v200/jade-plant-eggless-chocolate-cake_1.jpg",
      title : "Jade Plant & Eggless Chocolate Cake",
      price : "₹",
      paragraph : "Earliest Delivery: out of stock"
    },
    {
      id : "7",
      image : "https://www.fnp.com/images/pr/l/v200/good-vibes-plant-n-cake-combo_1.jpg",
      title : "Good Vibes Plant & Cake Combo",
      price : "₹ 1255",
      paragraph : "Earliest Delivery: Today"
    },
    {
      id : "2",
      image : "https://www.fnp.com/images/pr/l/v200/kimirica-love-story-experience-luxury-bath-n-body-care-gift-box_1.jpg",
      title : "Kimirica Love Story Experience Luxury Bath N Body Care Gift Box",
      price : "₹ 1,449",
      paragraph : "Earliest Delivery: Tomorrow"
    },
    {
      id : "8",
      image : "https://www.fnp.com/images/pr/l/v200/carnation-n-fruits-symphony_1.jpg",
      title : "Carnation & Fruits Symphony",
      price : "₹ 1475",
      paragraph : "Earliest Delivery: -"
    },
    {
      id : "9",
      image : "https://www.fnp.com/images/pr/l/v200/the-man-company-charcoal-express_1.jpg",
      title : "Thoughtfully Curated Gift Hamper For Men",
      price : "₹ 2949",
      paragraph : "Earliest Delivery: 29 Apr"
    },
    {
      id : "10",
      image : "https://www.fnp.com/images/pr/l/v200/workaholic-friend-gift-box_1.jpg",
      title : "Workaholic Friend Gift Box",
      price : "₹ 2199",
      paragraph : "Earliest Delivery: 29 Apr"
    },
    {
      id : "11",
      image : "https://www.fnp.com/images/pr/l/v200/sling-bag-with-yardley-london-grooming-kit_1.jpg",
      title : "Sling Bag With Yardley London Grooming Kit",
      price : "₹ 2799",
      paragraph : "Earliest Delivery: 28 Apr"
    },
    {
      id : "12",
      image : "https://www.fnp.com/images/pr/l/v200/welcome-kit_1.jpg",
      title : "Shakkar Welcome Kit",
      price : "₹ 1500",
      paragraph : "Earliest Delivery: 5 may"
    }
  ]

  return (
    <>
      <FormPR products = {products}/>
    </>
  );
}

export default App;