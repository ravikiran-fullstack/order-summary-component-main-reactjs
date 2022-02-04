function App() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='cardImage'></div>
        <div className='cardBody'>
          <div className='cardTitle'>
            <h2>Order Summary</h2>
          </div>
          <div className='cardInfo'>
            You can now listen to millions of songs, audiobooks and podcasts on
            any device anywhere you like!
          </div>
          <div className='plan'>
            <div className='planDetails'>
              <div className='music-icon'></div>
              <div>
                <div>Annual Plan</div>
                <p>$59.99/year</p>
              </div>
            </div>
            <div className='planDetailsChange'>
              <a href='#'>Change</a>
            </div>
          </div>
          <button className='paymentBtn'>Proceed to Payment</button>
          <button className='cancelBtn'>Cancel Order</button>
        </div>
      </div>
    </div>
  );
}

export default App;
