import React, { useState, useEffect } from "react";
import Items from "./Items";
import useStyles from "./PopularStyles";
import S6 from "../../assets/images/s6.png";
import SkeletonItem from "./SkeletonItem";

export default function Safety() {
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
        <div className={classes.rootSafety}>
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
        </div>
      ) : (
        <div className={classes.rootSafety}>
          <Items
            image={S6}
            price="70,000"
            title="کفش اول"
            subtitle="زیر عنوان کفش اول"
          />
          <Items
            image={S6}
            price="90,000"
            title="کفش دوم"
            subtitle="زیر عنوان کفش دوم"
          />
          <Items
            image={S6}
            price="110,000"
            title="کفش سوم"
            subtitle="زیر عنوان کفش سوم"
          />
          <Items
            image={S6}
            price="50,000"
            title="کفش چارم"
            subtitle="زیر عنوان کفش چهارم"
          />
          <Items
            image={S6}
            price="80,000"
            title="کفش پنجم"
            subtitle="زیر عنوان کفش پنجم"
          />
        </div>
      )}
    </>
  );
}
