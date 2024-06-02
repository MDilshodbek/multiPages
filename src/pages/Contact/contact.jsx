import { Link, useOutlet, Outlet } from "react-router-dom";

const Contact = () => {
  const haschild = useOutlet();
  if (haschild) {
    return <Outlet />;
  }
  return (
    <div>
      Welcome to Contact page!
      <h3>
        Need our phone number: <Link to="/contact/phoneNumber">Click</Link>
      </h3>
    </div>
  );
};

export default Contact;
