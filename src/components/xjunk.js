// Unused code:
//   handleClick = () => {
//     if (this.state.selectedCoffee != null) {
//       this.setState({
//         formVisibleOnPage: false,
//         selectedCoffee: null,
//         editing: false
//       });
//     } else {
//       this.setState(prevState => ({
//         formVisibleOnPage: !prevState.formVisibleOnPage,
//       }));
//     }
//   }
// Button was not working with this code:
// handleAddButtonClick = () => {
//     this.setState((prevState) => ({
//       formVisibleOnPage: !prevState.formVisibleOnPage,
//     }));
//   }