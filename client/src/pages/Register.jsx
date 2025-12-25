/**
 * @file Register.jsx
 * @module Register
 * @description
 *   This module exports the Register React component, which renders a registration form for new users.
 *   The form includes fields for user details (name, last name, location, email, password) and a submit button.
 *   It also provides a link for existing members to navigate to the login page.
 *   Styling is applied using the RegisterAndLoginPage wrapper and the shared Logo component.
 */

import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";
import { Logo, FormRow } from "../components";


/**
 * Register component renders a registration form for new users.
 *
 * The form includes fields for user name input and a submit button.
 * It also provides a link for existing members to navigate to the login page.
 *
 * @component
 * @returns {JSX.Element} The rendered registration form component.
 */
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>register</h4>

        <FormRow type="text" name="name" defaultValue="josh" />
        <FormRow type="text" name="lastName" labelText="last name" defaultValue="skim" />
        <FormRow type="text" name="location" defaultValue="cairns" />
        <FormRow type="email" name="email" defaultValue="josh@email.com" />

        <FormRow type="password" name="password" defaultValue="sec123"/>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
