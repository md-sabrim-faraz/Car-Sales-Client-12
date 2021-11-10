import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";

const DashboardHome = () => {
  const { user, logOut } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <>
      <Navbar
        className="p-0"
        style={{ backgroundColor: "#334960" }}
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <>
          <Navbar.Brand as={Link} to="/home">
            <h1 className="text-white ms-5">Dashboard</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end me-5">
            <Nav.Link className="link" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="link" as={Link} to={`${url}`}>
              My Orders
            </Nav.Link>
            <Nav.Link className="link" as={Link} to={`${url}/review`}>
              Review
            </Nav.Link>
            <Nav.Link className="link" as={Link} to={`${url}/pay`}>
              Pay
            </Nav.Link>

            {user.email ? (
              <>
                <p className="text-white mt-3 me-3 fw-bolder link">
                  {user?.displayName}
                </p>
                <Button className="ms-4" onClick={logOut}>
                  LogOut
                </Button>
              </>
            ) : (
              <>
                <Nav.Link className="link" as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </>
      </Navbar>
      <Switch>
        <Route exact path={path}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
      </Switch>
    </>
  );
};

export default DashboardHome;