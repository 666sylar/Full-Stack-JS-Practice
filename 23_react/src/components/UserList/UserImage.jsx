import { useState } from "react";
import styles from "./UserList.module.css";
import defaultPicture from "./default.svg";

const UserImage = ({ src, alt }) => {
  const [isError, setIsError] = useState(false);

  const handleImageError = () => {
    setIsError(true);
  };

  return (
    <>
      {isError ? (
        <div className={styles.imagePlaceholder}>No Image</div>
      ) : (
        <img src={src || defaultPicture} alt={alt} onError={handleImageError} />
      )}
    </>
  );
};

export default UserImage;
