import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }] = useStateValue();
  console.log(user);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ4NCA0NDQ0ODQ8PDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODUtNygtMCsBCgoKDg0NGg8QGi0dHR0uKzctLSstLS0vLSsuKystNS0rKy0vKy0tKystLS0rLS0rKysrNystLS0tLS0tKzcrK//AABEIAJcBTgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMRABAAIBAgIJAgQHAAAAAAAAAAECEQMEEiETMTJBUWFxkaFSgQUiQtEUQ2JyseHx/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQG/8QAHhEBAQADAAIDAQAAAAAAAAAAAAECERIDQSExURP/2gAMAwEAAhEDEQA/APqQHwD64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAFAAAAAAAAAVyZFTkyrlGUNL5MqZOI2ul8pypEpEWEECJAUAAAAAAAAAAAAARKAZRMs76uE3pZNtomF50pxnu8nnX1Z8W+23fdnE/EtyyxMsbPptNUN41a27UYnxjqLaPfHOEuF9M9frDKcptRSYY3Y38LZMq5Mp0aXMqcRxL1DS2TKuUZOjS2UTKOJWbLtdL5RllbUiHNq72I6iXda5dlrYNP83U8Pcbq1uufs4NbXv9Vsf3S9GHinsxxuXxH10xWOv5nBFqz1cPw+L0Nvqa04pS1/Gcco9ZnkvuNvqbe0VvHDMxmMTExMesN3xT9dP4z638vsson9nH+FXtbRrNpzOZ5z14y65nnPs82Xw461dLJhWEoiwAgAoAAAAAAAAAAKzKysorO8sLOi0MrQxW457MrQ6bVZ2qS6aNHdzXlbnHj3w79LViedbe0vMtRSM1nNZmJ8m5klxle5GtPfET8E8M+Xq83S3sxyvH3j9nXp61bdm0T5d/s3uX7crhppOn4c/RSarJzPixfFPRussDZHDHh8sXw1emEyrN3ROnHn7qzoVnx9yeKtTKOW2thz6u6w9Cdpp98TP3kjZ6Ufy6z6xn/Lrj4v0/pPTw9TcTbkU2utfs6dvWY4Y+X0NaVr2YiPSIgy6SSM92vFp+D6k9u1a+UZtLq0fwnQrzmvST/XOY9upvrb3Tr38U+Febz9xvtS/Kv5I8u17lyrUuTr3e+09CMcptEcqV5Y9fB81u9e+41YtfujFYjqrHhDqvozPVH+2v4XsrdLXjrMYninMY6mscpjNu2GsZv29za6fR6dK/TSM+v/AFeE25kQ81u64phJCYVmpAVAAAAAAAAAAAABEpAUmFJhrhEwzpqVhNVJo6JqrNWbGpXNNFJo6Zqiao1tyzRSdN1zRE0XYxpraleq2fXm2rvZ/VX2lWdNE6bUyqWRvXe074tH2aRutP6viXH0aOiXtOY7v4jT+uvuTudP64cHRJ6I7OI653mnH6pn0iWdt/XurafXEMOiI0j+hxE33t56oivzLC83v2rTPlnl7Omug1roQnVq6kcFdCZ7m+ns/F2104hbB8pcmWnoVr1R92mFsBpnaMJiAUEwhIiQFQAAAAAAAAAAAAAAABGETCwis5hHC0wYTS7Z8KOFpgwaNs+FHA1wYTS9MuA4GuE4NHTHgOBtgwcnTHgWijTCV5TpSKrYSLpEYMJBBGEgIwYSAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z"
          alt="amazon"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello,{!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className=" header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
