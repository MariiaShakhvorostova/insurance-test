import ben1 from "../assets/ben1.png";
import ben2 from "../assets/ben2.png";
import ben3 from "../assets/ben3.png";
import ben4 from "../assets/ben4.png";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <h2>Переваги купувати онлайн</h2>
        <div className="benefit-list">
          <div className="benefit-item">
            <img src={ben1} alt="Автоцивілка" />
            <p>Безкоштовна доставка.</p>
          </div>
          <div className="benefit-item">
            <img src={ben2} alt="Автоцивілка" />
            <p>Миттєве отримання страхового покриття;</p>
          </div>
          <div className="benefit-item">
            <img src={ben3} alt="Автоцивілка" />
            <p>
              5% знижку на інший вид страхування при одночасному укладенні
              договорів;
            </p>
          </div>
          <div className="benefit-item">
            <img src={ben4} alt="Автоцивілка" />
            <p>7% знижку на всі види страхування</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
