import "./App.css";
import image from "./images/profile.jpg"; 

function App() {
  // Variables
  let personName = "Haleema";
  let description = "React learner and future full-stack developer ";

  // Internal CSS
  let cardStyle = {
    border: "2px solid #0d6efd",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
  };

  let nameStyle = {
    fontWeight: "bold",
    color: "#0d6efd",
    marginTop: "10px",
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      
      <div style={cardStyle}>
        
        <h3 style={nameStyle}>{personName}</h3>

       
        <p>{description}</p>

        
        <img
          src={image}
          alt="Internal Profile"
          className="img-fluid rounded mb-3"
          style={{ width: "150px" }}
        />

        
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLlz4kiZ23iny0wdtSPKQSpK-tpZfuM2QAQ&s"
          alt="External Profile"
          className="img-fluid rounded"
          style={{ width: "150px" }}
        />

      </div>

    </div>
  );
}

export default App;