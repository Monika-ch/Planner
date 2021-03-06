import React from "react";
import { Card, CardImg, CardFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='container-fluid home-container'>
      <div className='row'>
        <div className='col mt-5 mb-4'>
          <h3 className='what mt-xl-4 mt-1'>
            What’s In Your <span className='wallet'>Wallet</span>{" "}
          </h3>
          <h5 className='mt-4 mb-5'>
            <span className='all-in-one ml-5'>PLANNER : All-In-One . . .</span>{" "}
            let's plan budget | future | tasks
          </h5>

          <span className='opacity'>
            <span className='opacity-2'>
              <img
                src='https://cdn4.iconfinder.com/data/icons/accounting-13/64/tax-interest-money-cash-investment-512.png'
                width='230'
                alt='cash-icon'
                className='cash-icon mr-3'
              />
            </span>
          </span>
        </div>
      </div>
      <div
        className='row'
        style={{
          marginTop: 70,
          alignItems: "center",
          marginLeft: 100,
          marginRight: 100,
        }}
      >
        <div className='col-12 col-lg-4 mb-2 box'>
          <Card className='card' style={{ backgroundColor: "#29aab6" }}>
            <CardImg
              src='https://cdn.mydollarplan.com/wp-content/uploads/2011/02/Pie-Chart.jpg'
              alt='Expenses'
              className='align-self-center homeImg'
            />
            <Link to='/budget' className='nav-link card-footer mt-1 mb-1'>
              <i className='fa fa-money fa-lg' /> {"  "} Budget
            </Link>
          </Card>
        </div>
        <div className='col-12 col-lg-4 mb-2 box'>
          <Card className='card' style={{ backgroundColor: "#107983" }}>
            <CardImg
              src='https://media.ycharts.com/charts/d10a7141799f6642aaca8dbde7faa5c3.png'
              alt='Portfolio'
              className='align-self-center homeImg'
            />
            <Link to='/portfolio' className='nav-link card-footer mt-1 mb-1'>
              <i className='fa fa-eye fa-lg' /> {"  "}
              WatchList
            </Link>
          </Card>
        </div>
        <div className='col-12 col-lg-4 mb-lg-2 mb-5 box box3'>
          <Card className='card' style={{ backgroundColor: "#004d79" }}>
            <CardImg
              src='https://d12y7sg0iam4lc.cloudfront.net/s/img/marketing/top-todo-app/to-do-list.png'
              alt='To-do'
              className='align-self-center homeImg'
            />
            <Link to='/todo' className='nav-link card-footer mt-1 mb-1'>
              <i className='fa fa-list fa-lg' /> {"  "}
              My Tasks
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
