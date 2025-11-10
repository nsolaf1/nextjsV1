// import styles from ''; // Import the CSS module
import './globals.css'

export default function Home() {
  return (
    <div className="container">
    <div className="header">
      <h1>Header</h1>
    </div>

    <div className="body">
      <h1>Beautify</h1>
      <img
        src="https://www.w3schools.com/w3css/img_car.jpg"
        alt="Car"
        className="image"
      />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim culpa molestias totam officiis nihil velit architecto id iusto ipsa quasi aut iure vero minus, sed molestiae sint eum hic accusamus!</p>
    </div>

    <div className="footer">
      <h5>Footer</h5>
    </div>
  </div>
    );
}
