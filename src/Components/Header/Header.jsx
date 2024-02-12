import React, { useContext } from "react";
import classes from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  const[{basket}, dispatch]=useContext(DataContext)
const totalItem=basket?.reduce((amount,item)=>{
  return item.amount + amount
},0)
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* logo  section*/}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=" amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>Delivery to</p>
                <span>Ethipia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search products" />
            <FaSearch size={26} />
          </div>
          {/*right side link  */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              {/* <div> */}
              {/* <div> */}
              {/* <img
              src="https://www.shutterstock.com/shutterstock/photos/157626554/display_1500/stock-vector-vector-image-of-american-flag-157626554.jpg"

              alt=""
              
            /> */}
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}

            <Link to="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>

            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <CiShoppingCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
