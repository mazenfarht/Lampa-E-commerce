import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CartContext } from '../../App';

const PaymentPage = () => {
  const { totalQty, totalPrice } = useContext(CartContext); // Access the CartContext
  
  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'Card number must be 16 digits')
        .required('Card number is required'),
      cardHolder: Yup.string()
        .required('Cardholder name is required')
        .min(3, 'Name must be at least 3 characters long'),
      expiryDate: Yup.string()
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry date must be in MM/YY format')
        .required('Expiry date is required'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'CVV must be 3 digits')
        .required('CVV is required'),
    }),
    onSubmit: (values) => {
      alert(`Payment successful! Details: ${JSON.stringify(values, null, 2)}`);
    },
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Checkout Page</h2>
      
      {/* Total Price Section */}
      <div className="d-flex justify-content-center mb-4">
        <div className="border p-4 text-center" style={{ maxWidth: '350px', borderRadius: '10px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h4 className="mb-3">Order Summary</h4>
          {/* <h5>Total Products: {totalQty}</h5> */}
          <h5 className="text-success">Total Price: ${totalPrice.toFixed(2)}</h5>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="w-50 m-auto">
        {/* Card Number Field */}
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            className={`form-control ${formik.touched.cardNumber && formik.errors.cardNumber ? 'is-invalid' : ''}`}
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <div className="invalid-feedback">{formik.errors.cardNumber}</div>
          ) : null}
        </div>

        {/* Card Holder Field */}
        <div className="mb-3">
          <label htmlFor="cardHolder" className="form-label">Cardholder Name</label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            className={`form-control ${formik.touched.cardHolder && formik.errors.cardHolder ? 'is-invalid' : ''}`}
            value={formik.values.cardHolder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cardHolder && formik.errors.cardHolder ? (
            <div className="invalid-feedback">{formik.errors.cardHolder}</div>
          ) : null}
        </div>

        {/* Expiry Date Field */}
        <div className="mb-3">
          <label htmlFor="expiryDate" className="form-label">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            className={`form-control ${formik.touched.expiryDate && formik.errors.expiryDate ? 'is-invalid' : ''}`}
            value={formik.values.expiryDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.expiryDate && formik.errors.expiryDate ? (
            <div className="invalid-feedback">{formik.errors.expiryDate}</div>
          ) : null}
        </div>

        {/* CVV Field */}
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            className={`form-control ${formik.touched.cvv && formik.errors.cvv ? 'is-invalid' : ''}`}
            value={formik.values.cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cvv && formik.errors.cvv ? (
            <div className="invalid-feedback">{formik.errors.cvv}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
