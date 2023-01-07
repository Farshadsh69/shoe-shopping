import React, { useState, useEffect } from "react";

import Items from "./Items";
import useStyles from "./PopularStyles";
import S1 from "../../assets/images/s1.png";
import SkeletonItem from "./SkeletonItem";

export default function Mens() {
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
        
            <div className={classes.rootMens}>
              <SkeletonItem />
              <SkeletonItem />
              <SkeletonItem />
              <SkeletonItem />
              <SkeletonItem />
            </div>
      ) : (
        <div className={classes.rootMens}>
          <Items
            image={S1}
            price="70,000"
            title="کفش اول"
            subtitle="زیر عنوان کفش اول"
          />
          <Items
            image={S1}
            price="90,000"
            title="کفش دوم"
            subtitle="زیر عنوان کفش دوم"
          />
          <Items
            image={S1}
            price="110,000"
            title="کفش سوم"
            subtitle="زیر عنوان کفش سوم"
          />
          <Items
            image={S1}
            price="50,000"
            title="کفش چارم"
            subtitle="زیر عنوان کفش چهارم"
          />
          <Items
            image={S1}
            price="80,000"
            title="کفش پنجم"
            subtitle="زیر عنوان کفش پنجم"
          />
        </div>
      )}
      </>
  );
}
