import React, { useState, useEffect } from "react";
import Items from "./Items";
import Title from "./Title";
import useStyles from "./PopularStyles";
import S5 from "../../assets/images/s5.png";
import SkeletonItem from "./SkeletonItem";

export default function Childish() {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <div className={classes.rootMens}>
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
          </div>
        </>
      ) : (
        <div className={classes.rootChildish}>
          <Items
            image={S5}
            price="70,000"
            title="کفش اول"
            subtitle="زیر عنوان کفش اول"
          />
          <Items
            image={S5}
            price="90,000"
            title="کفش دوم"
            subtitle="زیر عنوان کفش دوم"
          />
          <Items
            image={S5}
            price="110,000"
            title="کفش سوم"
            subtitle="زیر عنوان کفش سوم"
          />
          <Items
            image={S5}
            price="50,000"
            title="کفش چارم"
            subtitle="زیر عنوان کفش چهارم"
          />
          <Items
            image={S5}
            price="80,000"
            title="کفش پنجم"
            subtitle="زیر عنوان کفش پنجم"
          />
        </div>
      )}
    </>
  );
}
