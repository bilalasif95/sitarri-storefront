import { stringify } from "query-string";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ReactSVG from "react-svg";
import { StringParam, useQueryParam } from "use-query-params";

import logo from "../../images/searchLogo.svg";

// import loader from "../../../src/images/loader.svg";
// import Arrow from "../../../src/images/Back_arrow.svg";
// import Close from "../../../src/images/x.svg";
import { TypedSearchResults } from "../OverlayManager/Search/queries";

import { OverlayContext, OverlayTheme, OverlayType } from "..";

import { searchUrl } from "../../app/routes";

import { useComponentVisible } from "@hooks";

const desktopSearch: React.FC<any> = (props: any) => {
    const [querySearch] = useQueryParam("q", StringParam);
    const [search, setSearch] = useState(querySearch ? querySearch : null);
    const { ref, isComponentVisible } = useComponentVisible(true);
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    const SeeDetails = (searchWord) => {
        setSearch("");
        props.history.push(`${searchUrl}?${searchQs(searchWord)}`);
    }
    const searchQs = (searchWord) => {
        return stringify({ q: searchWord, lat: latitude, long: longitude });
    }

    const SetSearchEvent = (e) => {
        setSearch(e.target.value)
    }

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

    useEffect(() => {
        getCurrentLocation()
    }, [latitude, longitude])

    useEffect(() => {
        getCurrentLocation()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (!isComponentVisible) {
                // setSearch("")
            }
        })
    }, [isComponentVisible])

    useEffect(() => {
        setSearch(querySearch ? querySearch : "")
    }, [querySearch])

    return <OverlayContext.Consumer>
        {overlayContext => (
            <>
                <div className="searchfield">
                    {/* search-logo */}
                    <ReactSVG className="searchLogo" onClick={() => props.history.push("/")} path={logo} />
                    {/* search-logo */}
                    {props.smallScreen ? <input onClick={() => overlayContext.show(OverlayType.search, OverlayTheme.right)} ref={ref} type="txt" placeholder="Search shops, products and more" value={search} onChange={(e) => SetSearchEvent(e)} className="form-control" />
                        : <input ref={ref} type="txt" placeholder="Search shops, products and more" value={search} onChange={(e) => SetSearchEvent(e)} className="form-control" />}
                    {search !== null && search !== "" ?
                        <>
                            {props.smallScreen ?
                                <svg onClick={() => overlayContext.show(OverlayType.search, OverlayTheme.right, { title: "true" })} className="CloseIcon" width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.07104 5.65674L1.41431 0L0 1.41418L5.65674 7.07104L0 12.7279L1.41406 14.1421L7.07104 8.48511L12.728 14.1421L14.1423 12.7279L8.48535 7.07092L14.1421 1.41418L12.7278 0L7.07104 5.65674Z" fill="#C4C4C4" />
                                </svg>
                                :
                                <svg onClick={() => setSearch("")} className="CloseIcon" width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.07104 5.65674L1.41431 0L0 1.41418L5.65674 7.07104L0 12.7279L1.41406 14.1421L7.07104 8.48511L12.728 14.1421L14.1423 12.7279L8.48535 7.07092L14.1421 1.41418L12.7278 0L7.07104 5.65674Z" fill="#C4C4C4" />
                                </svg>
                            }
                        </>
                        :
                        <span className="searchicon" onClick={() => {
                            if (search !== null && search !== "") {
                                return props.history.push(`${searchUrl}?${searchQs(search)}`)
                            }
                            else {
                                return null
                            }
                        }}>
                            <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path fill="#6c6d6d" d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg>
                            {/* <ReactSVG path={searchicon} /> */}
                        </span>}
                </div>
                <div className="searchedlist">
                    {querySearch && querySearch === search ? "" : search ? <TypedSearchResults
                        renderOnError
                        displayError={false}
                        errorPolicy="all"
                        variables={{ query: search, latitude, longitude }}
                    >
                        {({ data, error, loading }) => {
                            if (loading) {
                                return <h6 className="loaderIcon"></h6>
                            }
                            else {
                                if (data.search && data.search.products.edges.length > 0 || data.search && data.search.categories.edges.length > 0 || data.search && data.search.stores.edges.length > 0) {
                                    return (
                                        <div className="SearchDropdown">
                                            {data.search.stores.edges.map((store: any) => (
                                                <div className="items" onClick={() => SeeDetails(store.node.name)}>
                                                    <div className="ShopAddress">
                                                        <p>{store.node.name}</p>
                                                        {store.node.distance &&
                                                            <div className="SearchLocation">
                                                                <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                                                                <div>
                                                                    <p>{store.node.distance}</p>
                                                                </div>
                                                            </div>}

                                                    </div>
                                                    {store.node.address && (store.node.address.streetAddress || store.node.address.streetAddress2 || store.node.address.city || store.node.address.country.country) &&
                                                        <div className="shop-address">
                                                            <p>{store.node.address && store.node.address.streetAddress + " , " + store.node.address.streetAddress2 + " , " + store.node.address.city + " , " + store.node.address.country.country}</p>
                                                        </div>}
                                                </div>
                                            ))}
                                            {data.search.products.edges.map((product: any) => (
                                                <div className="items" onClick={() => SeeDetails(product.node.name)}>
                                                    <div className="ShopAddress">
                                                        <p>{product.node.name}</p>
                                                        {product.node.store && product.node.store.distance &&
                                                            <div className="SearchLocation">
                                                                <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                                                                <div>
                                                                    <p>{product.node.store.distance}</p>
                                                                </div>
                                                            </div>}

                                                    </div>
                                                    {product.node.store && product.node.store.address && (product.node.store.address.streetAddress || product.node.store.address.streetAddress2 || product.node.store.address.city || product.node.store.address.country.country) &&
                                                        <div className="shop-address">
                                                            <p>{product.node.store.address && product.node.store.address.streetAddress + " , " + product.node.store.address.streetAddress2 + " , " + product.node.store.address.city + " , " + product.node.store.address.country.country}</p>
                                                        </div>}
                                                </div>
                                            ))}
                                            {/* {data.search.categories.edges.map((cat: any) => (

                                        <div className="items" onClick={() => SeeDetails(cat.node.name)}>
                                            <p>{cat.node.name}</p>
                                        </div>

                                    ))} */}
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div>
                                            <ul className="NoResults">
                                                <li>
                                                    <span>
                                                        <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                            <path fill="#6c6d6d" d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
                                                        </svg>
                                                    </span>
                                                </li>
                                                <li>
                                                    No results for <span>"{search}"</span>
                                                    <li>Try search for another term</li>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            }
                        }}
                    </TypedSearchResults> : ""}
                </div>
            </>
        )}
    </OverlayContext.Consumer>
    // </>
}

export default withRouter(desktopSearch);