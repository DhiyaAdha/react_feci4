import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const products = await axios.get("http://localhost:8080/products");
    setProducts(products.data);
  };

  const deleteProduct = async (id) => {
    // Tampilkan SweetAlert2 konfirmasi sebelum menghapus
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:8080/products/${id}`);
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
        getProducts();
      } catch (error) {
        Swal.fire(
          "Error!",
          "There was a problem deleting the product.",
          "error"
        );
      }
    }
  };

  return (
    <div>
      <Link to="/add" className="button is-success mt-5">
        Add New
      </Link>
      <hr />
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`/edit/${product.id}`}
                  className="button is-small is-info">
                  Edit
                </Link>
                &nbsp;
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="button is-small is-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
