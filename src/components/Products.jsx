import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import introImage from "../assets/introImage.png";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="intro">
          <div className="text">
            <h2>Надійна страховка - крок до безпеки: Приєднуйтесь до нас</h2>
            <p>
              Захистіть себе та своїх близьких разом із нами – надійною
              страховою компанією. Ми готові стати вашим надійним партнером,
              який забезпечить надійний захист та фінансову безпеку у разі
              непередбачуваних ситуацій.
            </p>
            <button>Придбати страховку</button>
          </div>
          <div className="image">
            <img src={introImage} alt="Intro" />
          </div>
        </div>
        <h2>Наші страхові продукти</h2>
        <div className="product-list">
          <div className="product-item">
            <img src={product1} alt="Автоцивілка" />
            <h3>Автоцивілка</h3>
          </div>
          <div className="product-item">
            <img src={product2} alt="КАСКО страхування" />
            <h3>КАСКО страхування</h3>
          </div>
          <div className="product-item">
            <img src={product3} alt="Медичне страхування" />
            <h3>Медичне страхування</h3>
          </div>
          <div className="product-item">
            <img src={product4} alt="Туристичне страхування" />
            <h3>Туристичне страхування</h3>
          </div>
          <div className="product-item">
            <img src={product5} alt="Страхування майна" />
            <h3>Страхування майна</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
