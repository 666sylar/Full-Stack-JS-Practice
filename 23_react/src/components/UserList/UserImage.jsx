import React, { Component } from "react";
import styles from "./UserList.module.css";
import defaultPicture from "./default.svg";

class UserImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  handleImageError = () => {
    this.setState({ isError: true });
  };

  render() {
    const { isError } = this.state;
    const { src, alt } = this.props;

    return (
      <>
        {isError ? (
          <div className={styles.imagePlaceholder}>No Image</div>
        ) : (
          <img src={src || defaultPicture} alt={alt} onError={this.handleImageError} />
        )}
      </>
    );
  }
}

export default UserImage;
