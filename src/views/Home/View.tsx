import "./scss/index.scss";

import * as React from "react";

import { withRouter } from "react-router-dom";

import Page from "./Page";

// import ReactSVG from "react-svg";

import { stringify } from "query-string";

// import mainimg from "../../images/mainimg.jpg";

// import searchicon from "../../images/search.svg";

import locationicon from "../../images/send.svg";

import { searchUrl } from "../../app/routes";

import { generateProductUrl, generateShopUrl } from "../../core/utils";

import { TypedHomePageQuery } from "./queries";

import { TypedSearchResults } from "../../components/OverlayManager/Search/queries";

import {
  // MenuDropdown,
  // Offline,
  // Online,
  MetaWrapper,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "../../components";

import { useComponentVisible } from "@hooks"

const View: React.FC = (props: any) => {
  const [search, setSearch] = React.useState(null);
  const { ref, isComponentVisible } = useComponentVisible(true);
  const [latitude, setLatitude] = React.useState(0)
  const [longitude, setLongitude] = React.useState(0)
  const [load, setLoad] = React.useState(true)
  const SeeDetails = (searchWord) => {
    setSearch("")
    props.history.push(`${searchUrl}?${searchQs(searchWord)}`);
  }

  const redirectToShopPage = (id, name) => {
    props.history.push(generateShopUrl(id, name))
  }

  const redirectToProductPage = (id, name) => {
    props.history.push(generateProductUrl(id, name))
  }

  const SetSearchEvent = (e) => {
    setSearch(e.target.value)
  }

  const searchQs = (searchWord) => {
    return stringify({ q: searchWord, lat: latitude === 0 ? JSON.parse(window.localStorage.getItem("lat")) : latitude, long: longitude === 0 ? JSON.parse(window.localStorage.getItem("long")) : longitude });
  }

  const getCurrentLocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        setLatitude(position.coords.latitude)
        window.localStorage.setItem("lat", JSON.stringify(position.coords.latitude))
        setLongitude(position.coords.longitude)
        window.localStorage.setItem("long", JSON.stringify(position.coords.longitude))
      },
      (error) => {
        setLatitude(0)
        setLongitude(0)
        window.localStorage.setItem("lat", JSON.stringify(0))
        window.localStorage.setItem("long", JSON.stringify(0))
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

  React.useEffect(() => {
    setTimeout(() => {
      if (!isComponentVisible) {
        setSearch("")
      }
    })

  }, [isComponentVisible])
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
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1500)
  }, [])
  return <OverlayContext.Consumer>

    {overlayContext => (
      <div>

        {/* <div className="home-page">
      <div className="main-section">
        <div className="container">
          <div className="content">
            <div className="searchbox">
              <h2>Find businesses and products near you</h2> */}
        <div className="Mobilesearchfield">
          <span className="locationicon">
            <img src={locationicon} onClick={() => locationPermission()} className="lc" />
          </span>
          <input onClick={() =>
            overlayContext.show(OverlayType.search, OverlayTheme.right)
          } ref={ref} type="txt" placeholder="Search products, stores and more" value={search} className="form-control" onChange={(e) => SetSearchEvent(e)} />
          <span className="searchicon">

            {/* <ReactSVG path={locationicon} /> */}
            <svg xmlns="https://www.w3.org/2000/svg" onClick={() => {
              if (search !== null && search !== "") {
                return props.history.push(`${searchUrl}?${searchQs(search)}`)
              }
              else {
                return null
              }
            }} width="18" height="18" viewBox="0 0 24 24">
              <path fill="#6c6d6d" d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg>
          </span>
        </div>
        <div className="searchedlist">
          {search ? <TypedSearchResults
            renderOnError
            displayError={false}
            errorPolicy="all"
            variables={{ query: search, latitude, longitude }}
          >
            {({ data, loading }) => {
              if (loading) {
                return <h6></h6>
              }
              else {


                if (data.search && data.search.products.edges.length > 0 || data.search && data.search.categories.edges.length > 0 || data.search && data.search.stores.edges.length > 0) {
                  return (

                    <div>

                      {data.search.stores.edges.map((store: any) => (
                        <div className="items" onClick={() => SeeDetails(store.node.name)}>
                          <p>{store.node.name}</p>
                          {store.node.address && (store.node.address.streetAddress || store.node.address.city || store.node.address.streetAddress2 || store.node.address.country.country) &&
                            <div className="shop-address">
                              <p>{store.node.address && store.node.address.streetAddress + " , " + store.node.address.streetAddress2 + " , " + store.node.address.city + " , " + store.node.address.country.country}</p>
                            </div>}
                          <div className="SearchLocation">
                            {store.node.distance &&
                              <div className="SearchLocation">
                                <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                                <div>
                                  <p>{store.node.distance}</p>
                                </div>
                              </div>}
                          </div>
                        </div>

                      ))}
                      {data.search.products.edges.map((product: any) => (
                        <div className="items" onClick={() => SeeDetails(product.node.name)}>
                          <p>{product.node.name}</p>
                          {product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.address && (product.node.storess.edges[0].node.address.streetAddress || product.node.storess.edges[0].node.address.streetAddress2 || product.node.storess.edges[0].node.address.city || product.node.storess.edges[0].node.country.country) &&
                            <div className="shop-address">
                              <p>{product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.address && product.node.storess.edges[0].node.address.streetAddress + " , " + product.node.storess.edges[0].node.address.streetAddress2 + " , " + product.node.storess.edges[0].node.address.city + " , " + product.node.storess.edges[0].node.address.country.country}</p>
                            </div>}
                          {product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.distance &&
                            <>
                              <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                              <div>
                                <p>{product.node.storess.edges[0].node.distance}</p>
                              </div>
                            </>}
                        </div>

                      ))}
                      {/* {data.search.categories.edges.map((cat:any) => (

                              <div className="items" onClick={() => SeeDetails(cat.node.name)}>
                                <p>{cat.node.name}</p>
                              </div>

                            ))} */}

                    </div>
                  )

                }
                else {
                  return (
                    <div></div>
                  )

                }
              }

            }
            }
          </TypedSearchResults> : ""}

        </div>
        {/* </div>
            <div className="img">
              <img src={mainimg} alt="Main" />
            </div>
          </div>
        </div>
      </div> */}
        <TypedHomePageQuery alwaysRender displayLoader={false} errorPolicy="all">
          {({ data }) => {
            return (
              <MetaWrapper
                meta={{
                  description: data.shop ? data.shop.description : "",
                  title: data.shop ? data.shop.name : "Sitarri",
                }}
              >
                <Page
                  SeeDetails={SeeDetails}
                  redirectToShopPage={redirectToShopPage}
                  redirectToProductPage={redirectToProductPage}
                  loading={load}
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
    )}
  </OverlayContext.Consumer>
  // </div>
};

export default withRouter(View);
