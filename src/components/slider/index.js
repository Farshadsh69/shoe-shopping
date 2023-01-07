import React from "react";
import useStyles from "./indexStyles";
import Carousel from "react-material-ui-carousel";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import Item from "./item";

export default function Index() {
  const classes=useStyles()
  const data = [
    {
      id: 1,
      title: "کفش آدیداس",
      image: s1,
      price: "250,000",
      subtitle: "این زیر عنوان کفش است",
      discount: 15,
    },
    {
      id: 2,
      title: " کفش نایکی",
      image: s2,
      price: "300,000",
      subtitle: "این زیر عنوان کفش است",
      discount: 15,
    },
    {
      id: 3,
      title: " کفش پوما",
      image: s3,
      price: "200,000",
      subtitle: "این زیر عنوان کفش است",
      discount: 15,
    },
  ];

  return (
    <Carousel duration='440' className={classes.root} >
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
