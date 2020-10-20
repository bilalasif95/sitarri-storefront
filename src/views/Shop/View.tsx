import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";
// import ReactSVG from "react-svg";

import { useCart } from "@sdk/react";
// MetaWrapper
// import { NotFound, OfflinePlaceholder } from "../../components";
// import NetworkStatus from "../../components/NetworkStatus";
import { generatePhotoGalleryUrl, getGraphqlIdFromDBId } from "../../core/utils";
// import { ProductDetails_product } from "./gqlTypes/ProductDetails";
import Page from "./Page";
import { TypedProductDetailsQuery } from "./queries";

// import backIcon from "../../images/back.svg";
// import Search from "../../images/search.svg";



const View: React.FC<RouteComponentProps<{ id: string }>> = ({ match, history }) => {
  const { addItem, items } = useCart();
  const [latitude, setLatitude] = React.useState(0)
  const [longitude, setLongitude] = React.useState(0)

  const getCurrentLocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      (error) => {
        setLatitude(0)
        setLongitude(0)
      },
      {

        enableHighAccuracy: true,
        maximumAge: 250,
      }
    );
  }

  React.useEffect(() => {
    getCurrentLocation()
  }, [latitude, longitude])

  React.useEffect(() => {
    getCurrentLocation()
  }, [])

  const redirectToPhotoGalleryPage = (id, name) => {
    history.push(generatePhotoGalleryUrl(id, name))
  }

  return (
    <TypedProductDetailsQuery
      loaderFull
      errorPolicy="all"
      variables={{
        id: getGraphqlIdFromDBId(match.params.id, "Store"),
        latitude,
        longitude,
      }}
    >
      {({ data, loading }) => {
        // if (loading) {
        //   return (
        //     <h3 className="ShopSkeleton">
        //       <div className="container">
        //         <div className="Loadingskeleton">
        //           <div className="Selectboxes">
        //             <div className="Skeletoncards">
        //               <div className="SkeletonCardsCont">
        //                 <div className="SkeletonCardsbody">
        //                 </div>
        //               </div>
        //               <div className="SkeletonCardsCont">
        //                 <div className="SkeletonCardsbody">
        //                 </div>
        //               </div>
        //               <div className="SkeletonCardsCont">
        //                 <div className="SkeletonCardsbody">
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="SkeletonHeader">
        //           <div className="SkeletonbackIcon"><ReactSVG path={backIcon} onClick={() => { window.history.go(-1); return false; }} /></div>
        //           <div className="SkeletonbackIcon"><ReactSVG path={Search} onClick={() => { window.history.go(-1); return false; }} /></div>
        //         </div>
        //         <div className="LoadingBars">
        //           <div className="Selectboxes">
        //             <div className="Skeletoncards">
        //               <div className="SkeletonCardsCont">
        //                 <div className="SkeletonCardsbar">
        //                 </div>
        //                 <div className="SkeletonCardtext">
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="ProductSkeleton">
        //           <div className="Selectboxes">
        //             <div className="Skeletoncards">
        //               <div className="SkeletonCardsCont">
        //                 <div className="SkeletonCardsbar">
        //                 </div>
        //                 <div className="SkeletonCardtext">
        //                 </div>
        //               </div>
        //               <div className="ProductSkeletonBox">
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="ProductSkeleton">
        //           <div className="Selectboxes">
        //             <div className="Skeletoncards">
        //               <div className="SkeletonCardsCont">
        //                 <div className="SkeletonCardsbar">
        //                 </div>
        //                 <div className="SkeletonCardtext">
        //                 </div>
        //               </div>
        //               <div className="ProductSkeletonBox">
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="ProductSkeleton">
        //           <div className="Selectboxes">
        //             <div className="Skeletoncards">
        //               <div className="SkeletonCardsCont">
        //                 <div className="SkeletonCardsbar">
        //                 </div>
        //                 <div className="SkeletonCardtext">
        //                 </div>
        //               </div>
        //               <div className="ProductSkeletonBox">
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="ProductSkeleton">
        //           <div className="Selectboxes">
        //             <div className="Skeletoncards">
        //               <div className="SkeletonCardsCont">
        //                 <div className="SkeletonCardsbar">
        //                 </div>
        //                 <div className="SkeletonCardtext">
        //                 </div>
        //               </div>
        //               <div className="ProductSkeletonBox">
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="ProductSkeleton">
        //           <div className="Selectboxes">
        //             <div className="Skeletoncards">
        //               <div className="SkeletonCardsCont">
        //                 <div className="SkeletonCardsbar">
        //                 </div>
        //                 <div className="SkeletonCardtext">
        //                 </div>
        //               </div>
        //               <div className="ProductSkeletonBox">
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="ProductSkeleton">
        //           <div className="Selectboxes">
        //             <div className="Skeletoncards">
        //               <div className="SkeletonCardsCont">
        //                 <div className="SkeletonCardsbar">
        //                 </div>
        //                 <div className="SkeletonCardtext">
        //                 </div>
        //               </div>
        //               <div className="ProductSkeletonBox">
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </h3>
        //   )
        // }
        // if (Object.values(data).length > 0) {
        const { store } = data;
        return (
          // <>
          // <NetworkStatus>
          //   {isOnline => {
          //     const { store } = data;
          //     return (
          // <MetaWrapper meta={extractMeta(product)}>
          <Page product={store} redirectToPhotoGalleryPage={redirectToPhotoGalleryPage} add={addItem} items={items} />
          // </MetaWrapper>
          //     );
          //     if (store === null) {
          //       return <NotFound />;
          //     }
          //     if (!isOnline) {
          //       return <OfflinePlaceholder />;
          //     }
          //   }}
          // </NetworkStatus>
          // </>
        )
        // }
      }}
    </TypedProductDetailsQuery>
  );
};

export default View;
