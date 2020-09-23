import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";

import { NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { getGraphqlIdFromDBId } from "../../core/utils";

import Page from "./Page";
import { TypedProductDetailsQuery } from "./queries";


const View: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {

  return (
    <TypedProductDetailsQuery
      loaderFull
      variables={{
        id: getGraphqlIdFromDBId(match.params.id, "Store"),
      }}
    >
      {({ data, loading }) => {


        //       if (loading) {
        //         return <h3 className="GallerySkeleton">
        //           <div className="container">
        //             <div className="Loadingskeleton">
        //               <div className="Selectboxes">


        //                 {/* skeleton-cards */}
        //                 <div className="Skeletoncards">
        //                   <div className="SkeletonCardsCont">
        //                     {/* <div className="CardsTitle">
        //           </div> */}

        //                     <div className="SkeletonCardsbody">

        //                     </div>

        //                     {/* skeletonbar */}
        //                     {/* <div className="SkeletonCardsbar">
        //         </div> */}
        //                     {/* skeletonbar */}

        //                     {/* <div className="SkeletonCardtext">

        //         </div> */}
        //                   </div>

        //                   <div className="SkeletonCardsCont">
        //                     {/* <div className="CardsTitle">
        //           </div> */}

        //                     <div className="SkeletonCardsbody">

        //                     </div>

        //                     {/* skeletonbar */}
        //                     {/* <div className="SkeletonCardsbar">
        //         </div> */}
        //                     {/* skeletonbar */}

        //                     {/* <div className="SkeletonCardtext">

        //         </div> */}
        //                   </div>




        //                 </div>
        //                 {/* skeleton-cards */}


        //               </div>

        //               <div className="Selectboxes">


        //                 {/* skeleton-cards */}
        //                 <div className="Skeletoncards">
        //                   <div className="SkeletonCardsCont">
        //                     {/* <div className="CardsTitle">
        //    </div> */}

        //                     <div className="SkeletonCardsbody">

        //                     </div>

        //                     {/* skeletonbar */}
        //                     {/* <div className="SkeletonCardsbar">
        //  </div> */}
        //                     {/* skeletonbar */}

        //                     {/* <div className="SkeletonCardtext">

        //  </div> */}
        //                   </div>

        //                   <div className="SkeletonCardsCont">
        //                     {/* <div className="CardsTitle">
        //    </div> */}

        //                     <div className="SkeletonCardsbody">

        //                     </div>

        //                     {/* skeletonbar */}
        //                     {/* <div className="SkeletonCardsbar">
        //  </div> */}
        //                     {/* skeletonbar */}

        //                     {/* <div className="SkeletonCardtext">

        //  </div> */}
        //                   </div>




        //                 </div>
        //                 {/* skeleton-cards */}


        //               </div>

        //               <div className="Selectboxes">


        //                 {/* skeleton-cards */}
        //                 <div className="Skeletoncards">
        //                   <div className="SkeletonCardsCont">
        //                     {/* <div className="CardsTitle">
        //           </div> */}

        //                     <div className="SkeletonCardsbody">

        //                     </div>

        //                     {/* skeletonbar */}
        //                     {/* <div className="SkeletonCardsbar">
        //         </div> */}
        //                     {/* skeletonbar */}

        //                     {/* <div className="SkeletonCardtext">

        //         </div> */}
        //                   </div>

        //                   <div className="SkeletonCardsCont">
        //                     {/* <div className="CardsTitle">
        //           </div> */}

        //                     <div className="SkeletonCardsbody">

        //                     </div>

        //                     {/* skeletonbar */}
        //                     {/* <div className="SkeletonCardsbar">
        //         </div> */}
        //                     {/* skeletonbar */}

        //                     {/* <div className="SkeletonCardtext">

        //         </div> */}
        //                   </div>




        //                 </div>
        //                 {/* skeleton-cards */}


        //               </div>

        //               <div className="Selectboxes">


        //                 {/* skeleton-cards */}
        //                 <div className="Skeletoncards">
        //                   <div className="SkeletonCardsCont">
        //                     {/* <div className="CardsTitle">
        //           </div> */}

        //                     <div className="SkeletonCardsbody">

        //                     </div>

        //                     {/* skeletonbar */}
        //                     {/* <div className="SkeletonCardsbar">
        //         </div> */}
        //                     {/* skeletonbar */}

        //                     {/* <div className="SkeletonCardtext">

        //         </div> */}
        //                   </div>

        //                   <div className="SkeletonCardsCont">
        //                     {/* <div className="CardsTitle">
        //           </div> */}

        //                     <div className="SkeletonCardsbody">

        //                     </div>

        //                     {/* skeletonbar */}
        //                     {/* <div className="SkeletonCardsbar">
        //         </div> */}
        //                     {/* skeletonbar */}

        //                     {/* <div className="SkeletonCardtext">

        //         </div> */}
        //                   </div>




        //                 </div>
        //                 {/* skeleton-cards */}


        //               </div>


        //               <div className="Selectboxes">


        //                 {/* skeleton-cards */}
        //                 <div className="Skeletoncards">
        //                   <div className="SkeletonCardsCont">
        //                     {/* <div className="CardsTitle">
        //           </div> */}

        //                     <div className="SkeletonCardsbody">

        //                     </div>

        //                     {/* skeletonbar */}
        //                     {/* <div className="SkeletonCardsbar">
        //         </div> */}
        //                     {/* skeletonbar */}

        //                     {/* <div className="SkeletonCardtext">

        //         </div> */}
        //                   </div>

        //                   <div className="SkeletonCardsCont">
        //                     {/* <div className="CardsTitle">
        //           </div> */}

        //                     <div className="SkeletonCardsbody">

        //                     </div>

        //                     {/* skeletonbar */}
        //                     {/* <div className="SkeletonCardsbar">
        //         </div> */}
        //                     {/* skeletonbar */}

        //                     {/* <div className="SkeletonCardtext">

        //         </div> */}
        //                   </div>




        //                 </div>
        //                 {/* skeleton-cards */}


        //               </div>



        //             </div>


        //           </div>

        //         </h3>


        //         // <div className="gallerySkeleton">

        //         //   <div className="galleryCards">
        //         //     <div className="SkeletonCardsbody"></div>
        //         //     <div className="SkeletonCardsbody"></div>
        //         //   </div>

        //         //   <div className="galleryCards">
        //         //     <div className="SkeletonCardsbody"></div>
        //         //     <div className="SkeletonCardsbody"></div>
        //         //   </div>

        //         //   <div className="galleryCards">
        //         //     <div className="SkeletonCardsbody"></div>
        //         //     <div className="SkeletonCardsbody"></div>
        //         //   </div>

        //         //   <div className="galleryCards">
        //         //     <div className="SkeletonCardsbody"></div>
        //         //     <div className="SkeletonCardsbody"></div>
        //         //   </div>

        //         //   <div className="galleryCards">
        //         //     <div className="SkeletonCardsbody"></div>
        //         //     <div className="SkeletonCardsbody"></div>
        //         //   </div>


        //         // </div>

        //       }


        return <NetworkStatus>
          {isOnline => {

            const { store } = data;


            return (
              // <MetaWrapper meta={extractMeta(product)}>
              <Page product={store} loading={loading} />
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
  )
}

export default View;
