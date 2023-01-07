import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useStyles from "./indexStyles";
import Item from "./item";
import s1 from "../../../assets/images/s1.png";
import s2 from "../../../assets/images/s2.png";
import s3 from "../../../assets/images/s3.png";
import s4 from "../../../assets/images/s4.png";
import s5 from "../../../assets/images/s5.png";
import s6 from "../../../assets/images/s6.png";
export default function Index() {
  const classes = useStyles();
  const data = [
    { id: 1, image: s1, price: "70,000", title: "کفش اول", subtitle: "زیر عنوان کفش اول" },
    { id: 2, image: s2, price: "90,000", title: "کفش دوم", subtitle: "زیر عنوان کفش دوم" },
    { id: 3, image: s3, price: "120,000", title: "کفش سوم", subtitle: "زیر عنوان کفش سوم" },
    { id: 4, image: s4, price: "50,000", title: "کفش چهارم", subtitle: "زیر عنوان کفش چهارم" },
    { id: 5, image: s5, price: "70,000", title: "کفش پنجم", subtitle: "زیر عنوان کفش پنجم" },
    { id: 6, image: s6, price: "110,000", title: "کفش ششم", subtitle: "زیر عنوان کفش ششم" },
    { id: 7, image: s1, price: "70,000", title: "کفش اول", subtitle: "زیر عنوان کفش اول" },
    { id: 8, image: s2, price: "90,000", title: "کفش دوم", subtitle: "زیر عنوان کفش دوم" },
  
  ];
  return (
    <div className={classes.root}>
      {data.map((item) => (
        <Item
        key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          subtitle={item.subtitle}
        />

      ))}
              <div className={classes.pagination}>
                <Stack >
                  <Pagination count={10}  color='primary' size='large'/>
                </Stack>
              </div>

    </div>
  );
}
