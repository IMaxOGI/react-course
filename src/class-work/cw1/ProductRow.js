import React from "react";
import ProductForm from "./ProductForm";
import { Button, TableCell, TableRow } from "@material-ui/core";

class ProductRow extends React.Component {
  state = {
    isEdit: false,
  };

  onEditProduct = (updateProduct) => {
    this.setState({ isEdit: false });
    this.props.onEditProduct(updateProduct);
  };
  render() {
    const { product, onRemoveProduct } = this.props;
    const { isEdit } = this.state;

    if (isEdit) {
      return (
        <div>
          <ProductForm onSubmitProduct={this.onEditProduct} product={product} />
          <Button
            className="btn-cancel"
            variant="contained"
            color="primary"
            onClick={() => this.setState({ isEdit: false })}
          >
            Отмена
          </Button>
        </div>
      );
    }
    return (
      <TableRow>
        <TableCell>{product.name}</TableCell>
        <TableCell>{product.category}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>{product.remainder}</TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={() => onRemoveProduct(product.id)}
          >
            Удалить
          </Button>
          <Button
            className="change-button"
            variant="contained"
            color="primary"
            onClick={() => this.setState({ isEdit: true })}
          >
            Изменить
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default ProductRow;
