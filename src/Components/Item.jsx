import React, { useEffect, useState } from "react";
import myImg from "../images/img.png";
import axios from "axios";
// import { build } from 'joi';

export default function Item(props) {
  const [forminput, setforminput] = useState(false);
  const [descInput, setdescInput] = useState(false);
  const [redcolor, setredcolor] = useState(false);
  const [isAdmin] = useState(props.isAdmin);
  const [itemObject, setitemObject] = useState({});
  const [inputValue, setinputValue] = useState("");
  const [myDataArray, setmyDataArray] = useState([]);
  const [likedItems, setlikedItems] = useState([]);

  const changeColor = async (id) => {
    try {
      if (redcolor == true) {
        let response = await axios.post(
          `https://metal-gases-api.herokuapp.com/unlike`,
          { id: id },
          { headers: { Authorization: `Bearer ${props.token}` } }
        );
        setredcolor(!redcolor);
      } else {
        let response = await axios.post(
          `https://metal-gases-api.herokuapp.com/like`,
          { id: id },
          { headers: { Authorization: `Bearer ${props.token}` } }
        );
        setredcolor(!redcolor);
      }
    } catch (error) {
      console.log("error");
    }
  };

  // useEffect(() => {
  //     Order();
  // }, [])

  const Order = () => {
    setitemObject(props.itemData);
    setmyDataArray(props.myData);
  };
  const iconeClass = () => {
    if (isAdmin) {
      return " ";
    } else {
      return "fas fa-heart fa-2x";
    }
  };

  const editName = () => {
    setforminput(!forminput);
  };
  const updateItem = (e) => {
    e.preventDefault();
    changeValue(inputValue);
  };

  const changeValue = (value) => {
    let newItemObject = { ...itemObject };
    newItemObject.name = value;
    setitemObject(newItemObject);
    setforminput(false);
  };

  const setValue = (e) => {
    setinputValue(e.target.value);
  };

  const updateItemdesc = (e) => {
    e.preventDefault();
    changeDesc(inputValue);
  };

  const changeDesc = (value) => {
    let newItemdesc = { ...itemObject };
    newItemdesc.description = value;
    setitemObject(newItemdesc);
    setdescInput(false);
  };

  const editDesc = () => {
    setdescInput(!descInput);
  };

  return (
    <div className="col-md-3 mb-4">
      <div
        style={{ border: "1px solid #444", borderRadius: "5px" }}
        className=" text-center shadow-lg"
      >
        <img
          src={myImg}
          className="w-100"
          style={{ height: "150px" }}
          alt="not found "
        />
        <div>
          {forminput ? (
            <form
              onSubmit={updateItem}
              className="d-flex justify-content-around mx-1 mt-1"
            >
              <input
                className=" form-control border-none "
                onChange={setValue}
                type="text"
                defaultValue={props.itemData.name}
              />
              <button className="rounded-1 p-1 fw-bold bg-danger text-light border-0">
                {" "}
                change{" "}
              </button>
            </form>
          ) : (
            ""
          )}
        </div>

        <div className="d-flex justify-content-between p-2">
          <h2>{itemObject.name}</h2>{" "}
          {isAdmin ? (
            <button
              onClick={editName}
              className="btn-secondary rounded-start rounded-end px-2"
            >
              Edit
            </button>
          ) : (
            ""
          )}
        </div>

        <div>
          {descInput ? (
            <form
              onSubmit={updateItemdesc}
              className="d-flex justify-content-around mx-1 mt-1"
            >
              <input
                className=" form-control border-none "
                onChange={setValue}
                type="text"
                defaultValue={props.itemData.description}
              />
              <button className="rounded-1 p-1 fw-bold bg-danger text-light border-0">
                {" "}
                change{" "}
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
        <div className="d-flex justify-content-between p-2">
          <p>{itemObject.description}</p>{" "}
          {isAdmin ? (
            <button
              onClick={editDesc}
              className="btn-secondary rounded-start rounded-end px-2"
            >
              Edit
            </button>
          ) : (
            ""
          )}
        </div>

        {redcolor ? (
          <i
            style={{ color: "red" }}
            className={iconeClass()}
            onClick={() => changeColor(props.itemData._id)}
          ></i>
        ) : (
          <i
            className={iconeClass()}
            onClick={() => changeColor(props.itemData._id)}
          ></i>
        )}
      </div>
    </div>
  );
}
