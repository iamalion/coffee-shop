class CoffeeControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainCoffeeList: [],
            selectedCoffee: null,
            editing: false
        };
    }
}