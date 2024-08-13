import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; // Impor SweetAlert2

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // Update product
  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:8080/products/${id}`,
        { title, price },
        { headers: { "Content-Type": "application/json" } }
      );
      // Tampilkan notifikasi sukses menggunakan SweetAlert2
      await Swal.fire({
        title: "Success!",
        text: "Product has been updated.",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/");
    } catch (error) {
      // Tampilkan notifikasi error menggunakan SweetAlert2
      await Swal.fire({
        title: "Error!",
        text: "Failed to update product.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error updating product:", error);
      // Optionally handle additional error logic here
    }
  };

  useEffect(() => {
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch product data by id
  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/products/${id}`);
      setTitle(response.data.title);
      setPrice(response.data.price);
    } catch (error) {
      console.error("Error fetching product data:", error);
      // Optionally handle error, like showing a message to the user
    }
  };

  return (
    <div>
      <form onSubmit={updateProduct}>
        <div className="field">
          <label className="label">Title</label>
          <input
            type="text"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className="field">
          <label className="label">Price</label>
          <input
            type="text"
            className="input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
        </div>
        <div className="field">
          <button className="button is-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
