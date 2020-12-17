import React, { Component } from "react";
import ProductRow from "./ProductRow";
import ProductForm from "./ProductForm";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";

class ProductTable extends Component {
  state = {
    products: [
      {
        id: "1",
        name: "Apple",
        category: "fruits",
        price: "2",
        remainder: "250",
      },
      {
        id: "2",
        name: "Kiww",
        category: "fruits",
        price: "1.5",
        remainder: "350",
      },
      {
        id: "3",
        name: "Carrots",
        category: "vegetables",
        price: "1.5",
        remainder: "444",
      },
      {
        id: "4",
        name: "Onion",
        category: "fruits",
        price: "2",
        remainder: "543",
      },
      {
        id: "5",
        name: "Bread",
        category: "bakery",
        price: "0.8",
        remainder: "190",
      },
      {
        id: "6",
        name: "Orange",
        category: "fruits",
        price: "2",
        remainder: "400",
      },
      {
        id: "7",
        name: "Quince",
        category: "fruits",
        price: "3",
        remainder: "50",
      },
      {
        id: "8",
        name: "Biscuits",
        category: "bakery",
        price: "4",
        remainder: "600",
      },
    ],
  };

  addProduct = (newProduct) => {
    this.setState({
      products: [...this.state.products, newProduct],
    });
  };

  removeProduct = (id) => {
    this.setState({
      products: this.state.products.filter((product) => product.id !== id),
    });
  };

  editProduct = (updateProduct) => {
    this.setState({
      products: this.state.products.map((product) =>
        product.id === updateProduct.id ? updateProduct : product
      ),
    });
  };

  render() {
    const { products } = this.state;
    return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Категория</TableCell>
              <TableCell>Цена($)</TableCell>
              <TableCell>Остаток на складе(g)</TableCell>
              <TableCell>Действие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <ProductRow
                product={product}
                key={product.id}
                onRemoveProduct={this.removeProduct}
                onEditProduct={this.editProduct}
              />
            ))}
          </TableBody>
        </Table>
        <ProductForm onSubmitProduct={this.addProduct} />
      </TableContainer>
    );
  }
}

export default withStyles({})(ProductTable);
