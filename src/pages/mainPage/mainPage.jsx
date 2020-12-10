import React from "react";
import "./styles.css";
import CustomButton from "../../components/customButton";
import { connect } from "react-redux";
import { saveCurrentSuccessAction } from "../../redux/actions";

export const mapStateToProps = (state) => {
  return { initialCounter: state.main.counter };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    changeCounter: (payload) => dispatch(saveCurrentSuccessAction(payload)),
  };
};

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.initialCounter, date: new Date() };
  }

  componentDidMount() {
    this.mainPageId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.mainPageId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  increaseValue() {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
    this.props.changeCounter({ counter: this.state.counter + 1 });
  }

  decreaseValue() {
    if (this.state.counter > 0) {
      this.setState((state) => {
        return { counter: state.counter - 1 };
      });

      this.props.changeCounter({ counter: this.state.counter - 1 });
    }
  }

  resetValue() {
    this.setState({ counter: 0 });
    this.props.changeCounter({ counter: 0 });
  }

  render() {
    const buttonValues = [
      {
        id: 0,
        buttonText: this.props.increaseButtonText,
        onClickButton: () => this.increaseValue(),
        buttonStyle: { backgroundColor: "#ff0000" },
      },
      {
        id: 1,
        buttonText: this.props.decreaseButtonText,
        onClickButton: () => this.decreaseValue(),
        buttonStyle: { backgroundColor: "#db7093" },
      },
      {
        id: 2,
        buttonText: this.props.resetButtonText,
        onClickButton: () => this.resetValue(),
      },
    ];

    const RenderButtons = () =>
      buttonValues.map((item) => {
        return (
          <CustomButton
            key={item.id}
            buttonText={item.buttonText}
            onClickButton={item.onClickButton}
            buttonStyle={item.buttonStyle}
          />
        );
      });

    return (
      <div className={"main-div"}>
        <p>{this.props.mainText}</p>
        <div className={"buttons"}>
          <RenderButtons />
        </div>
        <h1>Your changed value is {this.state.counter}</h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
