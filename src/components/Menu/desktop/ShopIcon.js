import React, { useState,useRef} from "react";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import useStyles from "./shopIcon.style";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Fade from "@mui/material/Fade";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import kafsh1 from "../../../assets/images/image1.png";
import kafsh2 from "../../../assets/images/image2.jpg";
import kafsh3 from "../../../assets/images/image3.png";
import UseOnClickOutside from '../../Hook/UseOnClickOutside'

export default function ShopIcon() {
  const ref = useRef();
  UseOnClickOutside(ref, () => setOpen(false));

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.iconProfile}>
        <ShoppingCartTwoToneIcon
          className={classes.iconHeader}
          onClick={() => setOpen(!open)}
        />
        <div className={classes.badge}>
          <Typography variant="subtitle2">3</Typography>
        </div>
      </div>
      <Fade in={open}>
        <div className={classes.shoesContent}>
          <HighlightOffIcon
            fontSize="large"
            className={classes.close}
            onClick={() => setOpen(false)}
          />

          <div className={classes.border}>
            <div>
              <img src={kafsh1} alt="کفش" className={classes.shoesImage} />
              <Typography variant='h6' className={classes.text}>کفش نایک</Typography>
              <Typography variant='subtitle2' className={classes.text}>300 تومان</Typography>
            </div>

            <DeleteIcon className={classes.iconDel} />
          </div>
          <div className={classes.border}>
            <div>
              <img src={kafsh2} alt="کفش" className={classes.shoesImage} />
              <Typography variant='h6' className={classes.text}>کفش نایک</Typography>
              <Typography variant='subtitle2' className={classes.text}>350 تومان</Typography>
            </div>
            <DeleteIcon className={classes.iconDel} />
          </div>
          <div className={classes.border}>
            <div>
              <img src={kafsh3} alt="کفش" className={classes.shoesImage} />
              <Typography variant='h6' className={classes.text}>کفش نیم پوت</Typography>
              <Typography variant='subtitle2' className={classes.text}>480 تومان</Typography>
            </div>
            <DeleteIcon className={classes.iconDel} />
          </div>
        <div>
          <Typography variant='body2' color='black' className={classes.sum}>
            
             قیمت کل : 1,130,000 تومان</Typography>
        </div>
        <Button variant='contained'fullWidth size='small' className={classes.btn}>نمایش سبد خرید</Button>
        </div>
      </Fade>
    </div>
  );
}
