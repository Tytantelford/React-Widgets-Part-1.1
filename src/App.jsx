// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       colorChange: "dodgerblue",
//       count: 1,
//     };
//   }

//   increase = () => {
//     this.setState((previousState) => {
//       if (previousState.count + 1 === 0) {
//         return { count: previousState.count + 2 };
//       } else {
//         return { count: previousState.count + 1 };
//       }
//     });
//   };

//   decrease = () => {
//     this.setState((previousState) => {
//       if (previousState.count - 1 === 0) {
//         return { count: previousState.count - 2 };
//       } else {
//         return { count: previousState.count - 1 };
//       }
//     });
//   };

//   render() {
//     return (
//       <div className="App" style={{ backgroundColor: this.state.colorChange }}>
//         <h3>{this.state.count}</h3>
//         <button onClick={this.decrease}>Decrease</button>
//         <button onClick={this.increase}>Increase</button>
//       </div>
//     );
//   }
// }

// export default App;
///////////////////////////////////////////////////////////////////////////////////////////
// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       greeting: "hello",
//       toggleMe: "goodbye",
//     };
//   }

//   hello = () => {
//     this.setState({
//       greeting: "hello",
//     });
//   };

//   goodbye = () => {
//     this.setState({
//       toggleMe: "goodbye",
//     });
//   };

//   render() {
//     return (
//       <div style={{ backgroundColor: "red" }}>
//         <button onClick={this.hello}>greeting</button>
//         <h3>{this.state.greeting}</h3>
//         <button onClick={this.goodbye}>toggle me</button>
//         <h3>{this.state.toggleMe}</h3>
//       </div>
//     );
//   }
// }

// export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hidden: false,
    };
  }

  buttonMagic = () => {
    this.setState((prevState) => ({
      hidden: !prevState.hidden,
    }));
  };

  render() {
    return (
      <div>
        {!this.state.hidden && <h3>Hide Me</h3>}{" "}
        <button onClick={this.buttonMagic}>
          {this.state.hidden ? "Show" : "Hide"}
        </button>
      </div>
    );
  }
}

export default App;
