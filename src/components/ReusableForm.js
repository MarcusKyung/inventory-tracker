import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Coffee Bean Name' required/>
        <input type='text' name='origin' placeholder='Coffee origin' required/>
        <input type='text' name='roast' placeholder='Coffee Roast' required/>
        <input type='number' name='price' placeholder='Coffee price' required/>
        <input type='text' name='description' placeholder='Coffee description' required/>
        <input type='number' name='quantity' placeholder='Coffee quantity' required/>
        <select name="productImage" required>
          <option value="Coffee1.png">Image 1</option>
          <option value="Coffee2.png">Image 2</option>
          <option value="Coffee3.png">Image 3</option>
          <option value="Coffee4.png">Image 3</option>
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