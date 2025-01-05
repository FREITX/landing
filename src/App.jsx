import Circles from "./Circles.jsx";

function App() {
  return (
    <>
      <Circles />
      <main className="main">
        <div className="title">
          <h1 className="main-title">FREITX</h1>
          <h2>екосистема вантажних перевезень</h2>
        </div>
        <div className="images">
          <img
            className="image"
            src="/images/first_image.webp"
            alt="First image"
          />
          <img
            className="image"
            src="/images/second_image.webp"
            alt="Second image"
          />
        </div>
        <section className="features-section">
          <ul className="features-list">
            <li className="features-list-item">
              <h2 className="subtitle">Надійно</h2>
              <div className="description">
                Обирай верифікованого контрагента за рейтингом
              </div>
            </li>
            <li className="features-list-item">
              <h2 className="subtitle">Зручно</h2>
              <ul className="features-inner-list">
                <li className="dotted">Чати</li>
                <li className="dotted">Документообіг</li>
                <li className="dotted">Фінансовий кабінет</li>
                <li className="dotted">Мобільний і GPS-трекінг</li>
              </ul>
            </li>
            <li className="features-list-item">
              <h2 className="subtitle">Вигідно</h2>
              <ul className="features-inner-list">
                <li className="dotted">Інтеграції з великими компаніями</li>
                <li className="dotted">Бонуси</li>
                <li className="dotted">Партнерства</li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
