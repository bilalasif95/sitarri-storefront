import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";

import { useCart } from "@sdk/react";
// MetaWrapper
import { NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { getGraphqlIdFromDBId } from "../../core/utils";
// import { ProductDetails_product } from "./gqlTypes/ProductDetails";
import Page from "./Page";
import { TypedProductDetailsQuery } from "./queries";
import ReactSVG from "react-svg";
import backIcon from "../../images/back.svg";
import Search from "../../images/search.svg";



const View: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { addItem, items } = useCart();


  return (
    <TypedProductDetailsQuery
      loaderFull
      variables={{
        id: getGraphqlIdFromDBId(match.params.id, "Store"),
      }}
    >
      {({ data, loading }) => {


        if (loading) {
          return <h3 className="ShopSkeleton">
            <div className="container">
            <div className="Loadingskeleton">
                  <div className="Selectboxes">


                 {/* skeleton-cards */}
                  <div className="Skeletoncards">
                    <div className="SkeletonCardsCont">
                      {/* <div className="CardsTitle">
                      </div> */}

                      <div className="SkeletonCardsbody">

                      </div>

                      {/* skeletonbar */}
                    {/* <div className="SkeletonCardsbar">
                    </div> */}
                    {/* skeletonbar */}

                    {/* <div className="SkeletonCardtext">

                    </div> */}
                    </div>

                    <div className="SkeletonCardsCont">
                      {/* <div className="CardsTitle">
                      </div> */}

                      <div className="SkeletonCardsbody">

                      </div>

                      {/* skeletonbar */}
                    {/* <div className="SkeletonCardsbar">
                    </div> */}
                    {/* skeletonbar */}

                    {/* <div className="SkeletonCardtext">

                    </div> */}
                    </div>

                    <div className="SkeletonCardsCont">
                      {/* <div className="CardsTitle">
                      </div> */}

                      <div className="SkeletonCardsbody">

                      </div>

                      {/* skeletonbar */}
                    {/* <div className="SkeletonCardsbar">
                    </div> */}
                    {/* skeletonbar */}

                    {/* <div className="SkeletonCardtext">

                    </div> */}
                    </div>


                  </div>
                  {/* skeleton-cards */}


                  </div>
                </div>

                <div className="SkeletonHeader">
                <div className="SkeletonbackIcon"><ReactSVG path={backIcon} onClick={() => { window.history.go(-1); return false; }} /></div>

                <div className="SkeletonbackIcon"><ReactSVG path={Search} onClick={() => { window.history.go(-1); return false; }} /></div>
                  </div>

                <div className="LoadingBars">
                  <div className="Selectboxes">


                 {/* skeleton-cards */}
                  <div className="Skeletoncards">
                    <div className="SkeletonCardsCont">
                      {/* <div className="CardsTitle">
                      </div> */}

                      {/* skeletonbar */}
                    <div className="SkeletonCardsbar">
                    </div>
                    {/* skeletonbar */}

                    <div className="SkeletonCardtext">

                    </div>
                    </div>


                  </div>
                  {/* skeleton-cards */}


                  </div>
                </div>




                      {/* product-skeleton */}

                <div className="ProductSkeleton">
                  <div className="Selectboxes">


                 {/* skeleton-cards */}
                  <div className="Skeletoncards">
                    <div className="SkeletonCardsCont">
                      {/* <div className="CardsTitle">
                      </div> */}

                      {/* skeletonbar */}
                    <div className="SkeletonCardsbar">
                    </div>
                    {/* skeletonbar */}

                    <div className="SkeletonCardtext">

                    </div>
                    </div>


                    <div className="ProductSkeletonBox">

                    </div>


                  </div>
                  {/* skeleton-cards */}


                  </div>
                </div>

                {/* product-skeleton */}


                 {/* product-skeleton */}

                 <div className="ProductSkeleton">
                  <div className="Selectboxes">


                 {/* skeleton-cards */}
                  <div className="Skeletoncards">
                    <div className="SkeletonCardsCont">
                      {/* <div className="CardsTitle">
                      </div> */}

                      {/* skeletonbar */}
                    <div className="SkeletonCardsbar">
                    </div>
                    {/* skeletonbar */}

                    <div className="SkeletonCardtext">

                    </div>
                    </div>


                    <div className="ProductSkeletonBox">

                    </div>


                  </div>
                  {/* skeleton-cards */}


                  </div>
                </div>

                {/* product-skeleton */}

                 {/* product-skeleton */}

                 <div className="ProductSkeleton">
                  <div className="Selectboxes">


                 {/* skeleton-cards */}
                  <div className="Skeletoncards">
                    <div className="SkeletonCardsCont">
                      {/* <div className="CardsTitle">
                      </div> */}

                      {/* skeletonbar */}
                    <div className="SkeletonCardsbar">
                    </div>
                    {/* skeletonbar */}

                    <div className="SkeletonCardtext">

                    </div>
                    </div>


                    <div className="ProductSkeletonBox">

                    </div>


                  </div>
                  {/* skeleton-cards */}


                  </div>
                </div>

                {/* product-skeleton */}

                 {/* product-skeleton */}

                 <div className="ProductSkeleton">
                  <div className="Selectboxes">


                 {/* skeleton-cards */}
                  <div className="Skeletoncards">
                    <div className="SkeletonCardsCont">
                      {/* <div className="CardsTitle">
                      </div> */}

                      {/* skeletonbar */}
                    <div className="SkeletonCardsbar">
                    </div>
                    {/* skeletonbar */}

                    <div className="SkeletonCardtext">

                    </div>
                    </div>


                    <div className="ProductSkeletonBox">

                    </div>


                  </div>
                  {/* skeleton-cards */}


                  </div>
                </div>

                {/* product-skeleton */}

                 {/* product-skeleton */}

                 <div className="ProductSkeleton">
                  <div className="Selectboxes">


                 {/* skeleton-cards */}
                  <div className="Skeletoncards">
                    <div className="SkeletonCardsCont">
                      {/* <div className="CardsTitle">
                      </div> */}

                      {/* skeletonbar */}
                    <div className="SkeletonCardsbar">
                    </div>
                    {/* skeletonbar */}

                    <div className="SkeletonCardtext">

                    </div>
                    </div>


                    <div className="ProductSkeletonBox">

                    </div>


                  </div>
                  {/* skeleton-cards */}


                  </div>
                </div>

                {/* product-skeleton */}

                 {/* product-skeleton */}

                 <div className="ProductSkeleton">
                  <div className="Selectboxes">


                 {/* skeleton-cards */}
                  <div className="Skeletoncards">
                    <div className="SkeletonCardsCont">
                      {/* <div className="CardsTitle">
                      </div> */}

                      {/* skeletonbar */}
                    <div className="SkeletonCardsbar">
                    </div>
                    {/* skeletonbar */}

                    <div className="SkeletonCardtext">

                    </div>
                    </div>


                    <div className="ProductSkeletonBox">

                    </div>


                  </div>
                  {/* skeleton-cards */}


                  </div>
                </div>

                {/* product-skeleton */}


            </div>

          </h3>
          
        }
        

        return <NetworkStatus>
          {isOnline => {

            const { store } = data;


            return (
              // <MetaWrapper meta={extractMeta(product)}>
              <Page product={store} add={addItem} items={items} />
              // </MetaWrapper>
            );


            if (store === null) {
              return <NotFound />;
            }

            if (!isOnline) {
              return <OfflinePlaceholder />;
            }
          }}
        </NetworkStatus>
      }}
    </TypedProductDetailsQuery>
  );
};

export default View;
