const ThxPage = () => {
  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <div className="thx-page">
      <div className="modal">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <h2>Дякуємо!</h2>
        <p>
          Наша команда дуже вдячна вам за зворотній звʼязок та оцінку нашої
          роботи!
        </p>
        <button className="home-button" onClick={handleClose}>
          На головну
        </button>
      </div>
    </div>
  );
};

export default ThxPage;
