import "./scss/index.scss";

import * as React from "react";

import { withRouter } from "react-router-dom";

import { MetaWrapper } from "../../components";

import Page from "./Page";

import ReactSVG from "react-svg";

import { stringify } from "query-string";

import searchicon from "../../images/search.svg";

import { searchUrl } from "../../app/routes";

import { TypedHomePageQuery } from "./queries";

import { TypedSearchResults } from "../../components/OverlayManager/Search/queries";


const View: React.FC = (props: any) => {
  const [search, setSearch] = React.useState(null);
  const SeeDetails = (searchWord) => {
    setSearch(null)
    props.history.push(`${searchUrl}?${searchQs(searchWord.slice(0, 3))}`);
  }
  const searchQs = (searchWord) => {
    return stringify({ q: searchWord });
  }
  return <div>

    <div className="home-page">
      <div className="main-section">
        <div className="container">
          <div className="searchbox">
            <h2>Find businessess and products near you</h2>
            <div className="searchfield">
              <input type="txt" placeholder="Search.." className="form-control" onChange={(e) => setSearch(e.target.value)} />
              <span className="searchicon">
                <ReactSVG path={searchicon} />
              </span>
            </div>
            <div className="searchedlist">
              {search ? <TypedSearchResults
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

                        <div className="items" onClick={() => SeeDetails(product.node.category.name)}>
                          <p>{product.node.category.name}</p>
                        </div>

                      )) : <div>No data found...</div>



                    )
                  }

                }}
              </TypedSearchResults> : ""}
            </div>
          </div>
          <div className="img">

          </div>
        </div>
      </div>
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
                SeeDetails={SeeDetails}
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
    </div>
  </div>
};

export default withRouter(View);
