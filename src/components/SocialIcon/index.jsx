import React from "react";
import styles from "./style.module.css";
import Image from "../Image";

const SocialIcon = ({ icon }) => {
  return (
    <div className={styles.icon}>
      <Image ImageSrc={icon} />
    </div>
  );
};
export default SocialIcon;
