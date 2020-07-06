import "./scss/index.scss";

import * as React from "react";


interface ProductDescriptionProps {
  items: any
}


class ProductDescription extends React.Component<
  ProductDescriptionProps

  > {
  constructor(props: ProductDescriptionProps) {
    super(props);

    this.state = {

    }
  }


  render() {
    const { items } = this.props;
    return (
      <div className="product-description">
        <h3>{items.name}</h3>
        <div className="cat-price">
          <p>Category{items.category}</p>
          <span className="dot" />

        </div>
        <div className="likes">
          <p className="nos">{items.rating}</p>
          <div className="stars">
            {/* <ReactSVG path={star} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
          </div>
          <p className="tl">{items.totalReviews}</p>
        </div>
        <p className="desc">Description of the business that can be as long as it needs to be..... no truncation....</p>



      </div>
    );
  }
}

export default ProductDescription;
