import "./scss/index.scss";

import * as React from "react";
import { TypedSearchResults } from "../../components/OverlayManager/Search/queries";
// import { MetaWrapper } from "../../components";
// import Page from "./Page";
// import { TypedHomePageQuery } from "./queries";

const View: React.FC = () => {
  const [search, setSearch] = React.useState(null)
  return <>
    <div style={{ backgroundColor: "red", width: "100%" }}>
      <div style={{ margin: "15% 15%" }}>
        <h2 style={{ color: "white", fontSize: "23px" }} >Find businessess and products near you</h2>
        <input type="txt" placeholder="search.." style={{ width: "50%", height: "100%", marginTop: "30px" }} onChange={(e) => setSearch(e.target.value)} />
        {search ?  <TypedSearchResults
            renderOnError
            displayError={false}
            errorPolicy="all"
            variables={{ query: search }}
        >
            {({ data, error, loading }) => {
                if (loading) {
                    return <h6>..</h6>
                }

                else {
                    return (
                        data.products.edges.length > 0 ? data.products.edges.map(product => (
                            <div >


                                <p>{product.node.category.name}</p>


                            </div>
                        )) : <div>No data found...</div>



                    )
                }

            }}
        </TypedSearchResults>:""}

      </div>
    </div>
    {/* <div className="home-page">
    <TypedHomePageQuery alwaysRender displayLoader={false} errorPolicy="all">
      {({ data, loading }) => {
        return (
          <MetaWrapper
            meta={{
              description: data.shop ? data.shop.description : "",
              title: data.shop ? data.shop.name : "",
            }}
          >
            <Page
              loading={loading}
              backgroundImage={
                data.shop &&
                data.shop.homepageCollection &&
                data.shop.homepageCollection.backgroundImage
              }
              categories={data.categories}
              shop={data.shop}
            />
          </MetaWrapper>
        );
      }}
    </TypedHomePageQuery>
  </div> */}
  </>
};

export default View;
