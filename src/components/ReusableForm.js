import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Coffee Bean Name' />
        <input type='text' name='origin' placeholder='Coffee origin' />
        <input type='text' name='roast' placeholder='Coffee Roast' />
        <input type='number' name='price' placeholder='Coffee price' />
        <input type='text' name='description' placeholder='Coffee description'/>
        <input type='number' name='quantity' placeholder='Coffee quantity'/>
        <select name="productImage">
          <option value="image1.jpg">Image 1</option>
          <option value="image2.jpg">Image 2</option>
          <option value="image3.jpg">Image 3</option>
        </select>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;