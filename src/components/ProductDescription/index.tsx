import "./scss/index.scss";

import { Typography } from 'antd';
import * as React from "react";
// import ReactSVG from "react-svg";
// import Rating from 'react-rating';
// import location from "../../images/iconmonstr-location-1.svg";

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
    const { Paragraph } = Typography;
    return (
      <div className="product-description">
        <div style={{ display: "inline-block" }}>
          <div className="Instore">
            <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
            {/* Instore=Offline, Online=Online, Both=Online & Instore */}
            {items && items.status === "Both"
              ? <span>Online & Instore</span>
              : items && items.status === "Online"
                ? <span>Online</span>
                : items && items.status === "Offline"
                  ? <span>Offline</span>
                  : ""
            }
          </div>
        </div>

        <div className="ProductRating">
          <h3 className="CategoryTitle">{items && items.name}</h3>
          <div className="Nos">{items && items.rating}
            {items && items.rating === 0 ? <div className="star"><svg style={{ marginBottom: '2px' }} xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg></div> : <div className="star" ><svg xmlns="https://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg></div>}
            <div className="Close">
              ({items && items.totalReviews})
            </div>
          </div>
        </div>

        <div className="cat-price">
          <div className="CategoryPrice">
            <p>{items && items.business && items.business.businesscategory && items.business.businesscategory.name}</p>
            {items && items.distance &&
              <div className="LocationDistance">
                <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                <div className="Miles">
                  <div className="Location">
                    {items.distance}
                  </div>
                  {/* <S.Address>
                    {product.address && product.address.address}
                  </S.Address> */}
                </div>
              </div>
            }
          </div>
          {/* <span className="dot" /> */}

        </div>

        {items && items.description !== "" &&
          <Paragraph className="desc" ellipsis={{ rows: 2, expandable: true, symbol: '..' }}>
            {items.description}
          </Paragraph>
          // <p className="desc">
          // {items.description}
          // </p>
        }

        <div className="Tags">
          {items && items.tags && items.tags.map((tag: any) => <div className="SubTags">{tag.name}</div>)}
          {/* <div className="SubTags">Mexican</div>
            <div className="SubTags">Taco</div>
            <div className="SubTags">Tequila</div> */}
        </div>

        {/* <div className="likes">
          <p className="nos">{items.rating}</p>
          <div className="stars">
            {/* <ReactSVG path={star} /> */}
        {/* <Rating
              placeholderRating={items.rating}
              readonly
              emptySymbol={<svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg>
              }
              placeholderSymbol={<svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
              }
              fullSymbol={<svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>} */}




        {/* <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg>
            <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg>
            <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg> */}
        {/* </div>
          <p className="tl">{items.totalReviews}</p>
        </div> */}

      </div>
    );
  }
}

export default ProductDescription;
