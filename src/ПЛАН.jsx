import Circles from "./Circles.jsx";

function App() {
    return (
        <>
            <Circles/>
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
                            <h2 className="subtitle">Що зроблено</h2>
                            <ul className="features-inner-list">
                                <li className="dotted">Окремі спеціалісти здобули досвід у аналогічному британському проекті</li>
                                <li className="dotted">Отримано знання по керуванню дрібною транспортною компанією</li>
                                <li className="dotted">Проведено вивчення потреб компаній різного розміру</li>
                                <li className="dotted">Є невелике демо: API, Website, Mobile App</li>
                                <li className="dotted">Прораховано фінансовий план тощо</li>
                            </ul>
                        </li>
                        <li className="features-list-item">
                            <h2 className="subtitle">Найближче майбутнє</h2>
                            <ul className="features-inner-list">
                                <li className="dotted">Ітеративна розробка з постійним отримання відгуків від компаній різного розміру</li>
                                <li className="dotted">Швидкий вихід на ринок</li>
                                <li className="dotted">Активні маркетингові дії та особисті зустрічі з керівниками великих компаній</li>
                                <li className="dotted">Лідерство в Україні</li>
                            </ul>
                        </li>
                        <li className="features-list-item">
                            <h2 className="subtitle">Довгострокові плани</h2>
                            <ul className="features-inner-list">
                                <li className="dotted">Змагання за максимальну долю у Європі</li>
                                <li className="dotted">Вихід на ринок США тощо</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}

export default App;
