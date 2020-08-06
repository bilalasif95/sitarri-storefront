import "./scss/index.scss";

import * as React from "react";

import { withRouter } from "react-router-dom";

import { MetaWrapper } from "../../components";

import Page from "./Page";

// import ReactSVG from "react-svg";

import { stringify } from "query-string";

import mainimg from "../../images/mainimg.jpg";

// import searchicon from "../../images/search.svg";

import locationicon from "../../images/location.png"

// import searchicon from "../../images/search.png";

import { searchUrl } from "../../app/routes";

import { TypedHomePageQuery } from "./queries";

import { TypedSearchResults } from "../../components/OverlayManager/Search/queries";

import { useComponentVisible } from "@hooks"

const View: React.FC = (props: any) => {
  const [search, setSearch] = React.useState(null);
  const { ref, isComponentVisible } = useComponentVisible(true);
  const SeeDetails = (searchWord) => {
    setSearch(null)
    props.history.push(`${searchUrl}?${searchQs(searchWord)}`);
  }
  const SetSearchEvent = (e) => {
    setSearch(e.target.value)
  }
  React.useEffect(() => {
    setTimeout(() => {
      if (!isComponentVisible) {
        setSearch("")
      }
    })

  }, [isComponentVisible])
  const searchQs = (searchWord) => {
    return stringify({ q: searchWord });
  }
  const locationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError, { maximumAge: 600000, timeout: 25000, enableHighAccuracy: true });
    } else {
      // console.log("Geolocation is not supported by this browser.")
    }
  }
  const showPosition = (position) => {
    //  console.log("postionnnnnnnnn", position, "dddd", position.coords.latitude
    //    , position.coords.longitude)

  }
  const showError = () => {
    // console.log("not allowed.")
  }
  return <div>

    <div className="home-page">
      <div className="main-section">
        <div className="container">
          <div className="content">
            <div className="searchbox">
              <h2>Find businesses and products near you</h2>
              <div className="searchfield">
                <input type="txt" placeholder="Search.." value={search} className="form-control" onChange={(e) => SetSearchEvent(e)} />
                <span className="searchicon">
                  <img src={locationicon} onClick={() => locationPermission()} className="lc" />
                  {/* <ReactSVG path={searchicon} /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path fill="#6c6d6d" d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
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
                      return <div className="textAlign">Searching..</div>
                    }
                    else {

                   
                      if (data.search && data.search.products.edges.length > 0 ||  data.search && data.search.categories.edges.length > 0 ||  data.search && data.search.stores.edges.length > 0) {
                        return (

                          <div>

                            {data.search.stores.edges.map((store:any) => (

                              <div ref={ref} className="items" onClick={() => SeeDetails(store.node.name)}>
                                <p>{store.node.name}</p>
                              </div>

                            ))}
                            {data.search.products.edges.map((product:any) => (

                              <div ref={ref} className="items" onClick={() => SeeDetails(product.node.name)}>
                                <p>{product.node.name}</p>
                              </div>

                            ))}
                            {data.search.categories.edges.map((cat:any) => (

                              <div ref={ref} className="items" onClick={() => SeeDetails(cat.node.name)}>
                                <p>{cat.node.name}</p>
                              </div>

                            ))}

                          </div>
                        )

                      }
                      else {
                        return (
                          <div className="textAlign">No data found...</div>
                        )

                      }
                    }

                  }
                  }
                </TypedSearchResults> : ""}

              </div>
            </div>
            <div className="img">
              <img src={mainimg} alt="Main" />
            </div>
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
