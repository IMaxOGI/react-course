import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: props.product?.name,
      productCategory: props.product?.category,
      productPrice: props.product?.price,
      productRemainder: props.product?.remainder,
    };
  }

  onChangeName = (e) => {
    this.setState({
      productName: e.target.value,
    });
  };

  onChangeCategory = (e) => {
    this.setState({
      productCategory: e.target.value,
    });
  };

  onChangePrice = (e) => {
    this.setState({
      productPrice: e.target.value,
    });
  };

  onChangeRemainder = (e) => {
    this.setState({
      productRemainder: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({
      productName: "",
      productCategory: "",
      productPrice: "",
      productRemainder: "",
    });
  };

  useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  submitProduct = () => {
    const { product } = this.props;
    const {
      productName: name,
      productCategory: category,
      productPrice: price,
      productRemainder: remainder,
    } = this.state;
    const newProduct = {
      name,
      category,
      price,
      remainder,
      id: product ? product.id : Date.now(),
    };
    if (
      !newProduct.name ||
      !newProduct.category ||
      !newProduct.price ||
      !newProduct.remainder
    ) {
      return alert("Поля не должны быть пустими");
    }

    this.props.onSubmitProduct(newProduct);
    this.resetForm();
  };

  render() {
    const {
      productName,
      productCategory,
      productPrice,
      productRemainder,
    } = this.state;
    const { classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className="input-line"
          id="outlined-basic"
          value={productName}
          onChange={this.onChangeName}
          name="name"
          label="Название"
          variant="outlined"
          type="text"
        />
        <TextField
          className="input-line"
          id="outlined-basic"
          value={productCategory}
          onChange={this.onChangeCategory}
          name="category"
          label="Категория"
          variant="outlined"
          type="text"
        />
        <TextField
          className="input-line"
          id="outlined-basic"
          value={productPrice}
          onChange={this.onChangePrice}
          name="price"
          label="Цена"
          variant="outlined"
          type="number"
        />
        <TextField
          className="input-line"
          id="outlined-basic"
          value={productRemainder}
          onChange={this.onChangeRemainder}
          name="remainder"
          label="Остаток на складе"
          variant="outlined"
          type="number"
        />
        <Button
          className="button-edit"
          variant="contained"
          color="primary"
          onClick={this.submitProduct}
        >
          Добавить
        </Button>
      </form>
    );
  }
}

export default withStyles({})(ProductForm);
