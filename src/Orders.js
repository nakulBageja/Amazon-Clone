import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order.js";
import { db } from "./firebase";
function Orders() {
  const [{ user }] = useStateValue();

  console.log("1", user);

  const [orders, setOrder] = useState([]);

  //fetch the data from firebase and store the data into order variable
  if (user) {
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot(snapshot =>
        setOrder(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      );
  } else {
    setOrder([]);
  }

  // useEffect(() => {

  // }, [user]);

  return (
    <div className="orders">
      <h3>YOUR ORDERS</h3>
      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
