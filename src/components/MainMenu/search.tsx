import { stringify } from "query-string";
import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ReactSVG from "react-svg";
import { StringParam, useQueryParam } from "use-query-params";

// import searchicon from "../../images/search.svg";
import loader from "../../../src/images/loader.svg";
// import Arrow from "../../../src/images/Back_arrow.svg";
// import Close from "../../../src/images/x.svg";

import { TypedSearchResults, TypedSearchResultsByDistance, TypedSearchResultsByPrice, TypedSearchResultsByRating } from "../OverlayManager/Search/queries";

import { searchUrl } from "../../app/routes";

import { useComponentVisible } from "@hooks";

import {
    OverlayContext,
} from "..";

const search: React.FC = (props: any) => {
    const [querySearch] = useQueryParam("q", StringParam);
    const overlay = useContext(OverlayContext);
    const [search, setSearch] = useState(querySearch ? overlay.context && overlay.context.title === "true" ? null : querySearch : null);
    const { ref, isComponentVisible } = useComponentVisible(true);
    const [loadingState, setLoadingState] = useState(false);
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const SeeDetails = (searchWord) => {
        setSearch("");
        overlay.hide();
        props.history.push(`${searchUrl}?${searchQs(searchWord)}`);
    }

    const searchQs = (searchWord) => {
        return stringify({ q: searchWord, lat: latitude, long: longitude });
    }

    const SetSearchEvent = (e) => {
        setSearch(e.target.value)
        setLoadingState(true)
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
        setSearch(querySearch ? overlay.context && overlay.context.title === "true" ? "" : querySearch : "")
    }, [querySearch])

    return <OverlayContext.Consumer>
        {overlayContext => (
            <>
                <div className="searchfield">
                    <input autoFocus ref={ref} type="txt" placeholder="Search" value={search} onChange={(e) => SetSearchEvent(e)} className="form-control" />
                    {(!loadingState || search === "") &&
                        <svg onClick={() => overlayContext.hide()} className="BackArrow" xmlns="https://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 24">
                            <g id="Group_961" data-name="Group 961" transform="translate(17940 12803)">
                                <g id="Group_960" data-name="Group 960">
                                    <g id="Group_959" data-name="Group 959">
                                        <g id="Group_958" data-name="Group 958">
                                            <g id="Group_957" data-name="Group 957" transform="translate(-17940 -12803)">
                                                <g id="Group_809" data-name="Group 809">
                                                    <g id="Group_808" data-name="Group 808">
                                                        <g id="arrow_back-24px">
                                                            <path id="Path_190" data-name="Path 190" d="M0,0H24V24H0Z" fill="none" />
                                                            <path id="Path_191" data-name="Path 191" d="M24,12.75H8.788l6.987-6.988L14,4,4,14,14,24l1.763-1.763L8.788,15.25H24Z" transform="translate(-2 -2)" fill="#40464A" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>}
                    {search !== null && search !== "" ?
                        <svg onClick={() => setSearch("")} className="CloseIcon" width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="https://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.07104 5.65674L1.41431 0L0 1.41418L5.65674 7.07104L0 12.7279L1.41406 14.1421L7.07104 8.48511L12.728 14.1421L14.1423 12.7279L8.48535 7.07092L14.1421 1.41418L12.7278 0L7.07104 5.65674Z" fill="#C4C4C4" />
                        </svg>
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
                    {search ?
                        search && search.includes("best") ?
                            <TypedSearchResultsByRating
                                renderOnError
                                displayError={false}
                                errorPolicy="all"
                                variables={{ latitude, longitude }}
                            >
                                {({ data }) => {
                                    setTimeout(() => {
                                        setLoadingState(false)
                                    }, 500)
                                    if (loadingState) {
                                        return <h6 className="loaderIcon">
                                            <ReactSVG path={loader} />
                                        </h6>
                                    }
                                    else {
                                        if (data && data.stores.edges.length > 0) {
                                            return (
                                                <div className="SearchDropdown">
                                                    {data.stores.edges.map((store: any) => (
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
                                                    {/* {data.search.products.edges.map((product: any) => (
                                                <div className="items" onClick={() => SeeDetails(product.node.name)}>
                                                    <div className="ShopAddress">
                                                        <p>{product.node.name}</p>
                                                        {product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.distance &&
                                                            <div className="SearchLocation">
                                                                <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                                                                <div>
                                                                    <p>{product.node.storess.edges[0].node.distance}</p>
                                                                </div>
                                                            </div>}
                                                    </div>
                                                    {product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.address && (product.node.storess.edges[0].node.address.streetAddress || product.node.storess.edges[0].node.address.streetAddress2 || product.node.storess.edges[0].node.address.city || product.node.storess.edges[0].node.country.country) &&
                                                        <div className="shop-address">
                                                            <p>{product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.address && product.node.storess.edges[0].node.address.streetAddress + " , " + product.node.storess.edges[0].node.address.streetAddress2 + " , " + product.node.storess.edges[0].node.address.city + " , " + product.node.storess.edges[0].node.address.country.country}</p>
                                                        </div>}
                                                </div>
                                            ))} */}
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
                            </TypedSearchResultsByRating>
                            :
                            search && search.includes("near me") ?
                                <TypedSearchResultsByDistance
                                    renderOnError
                                    displayError={false}
                                    errorPolicy="all"
                                    variables={{
                                        latitude,
                                        location: {
                                            distance: { value: 1, symbol: "KILOMETER" },
                                            latitude,
                                            longitude,
                                        },
                                        longitude,
                                    }}
                                >
                                    {({ data }) => {
                                        setTimeout(() => {
                                            setLoadingState(false)
                                        }, 500)
                                        if (loadingState) {
                                            return <h6 className="loaderIcon">
                                                <ReactSVG path={loader} />
                                            </h6>
                                        }
                                        else {
                                            if (data && data.stores.edges.length > 0) {
                                                return (
                                                    <div className="SearchDropdown">
                                                        {data.stores.edges.map((store: any) => (
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
                                                        {/* {data.search.products.edges.map((product: any) => (
                                                    <div className="items" onClick={() => SeeDetails(product.node.name)}>
                                                        <div className="ShopAddress">
                                                            <p>{product.node.name}</p>
                                                            {product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.distance &&
                                                                <div className="SearchLocation">
                                                                    <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                                                                    <div>
                                                                        <p>{product.node.storess.edges[0].node.distance}</p>
                                                                    </div>
                                                                </div>}
                                                        </div>
                                                        {product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.address && (product.node.storess.edges[0].node.address.streetAddress || product.node.storess.edges[0].node.address.streetAddress2 || product.node.storess.edges[0].node.address.city || product.node.storess.edges[0].node.country.country) &&
                                                            <div className="shop-address">
                                                                <p>{product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.address && product.node.storess.edges[0].node.address.streetAddress + " , " + product.node.storess.edges[0].node.address.streetAddress2 + " , " + product.node.storess.edges[0].node.address.city + " , " + product.node.storess.edges[0].node.address.country.country}</p>
                                                            </div>}
                                                    </div>
                                                ))} */}
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
                                </TypedSearchResultsByDistance>
                                :
                                search && search.includes("cheap") ?
                                    <TypedSearchResultsByPrice
                                        renderOnError
                                        displayError={false}
                                        errorPolicy="all"
                                        variables={{
                                            latitude,
                                            longitude,
                                        }}
                                    >
                                        {({ data }) => {
                                            setTimeout(() => {
                                                setLoadingState(false)
                                            }, 500)
                                            if (loadingState) {
                                                return <h6 className="loaderIcon">
                                                    <ReactSVG path={loader} />
                                                </h6>
                                            }
                                            else {
                                                if (data && data.products.edges.length > 0) {
                                                    return (
                                                        <div className="SearchDropdown">
                                                            {/* {data.stores.edges.map((store: any) => (
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
                                                    ))} */}
                                                            {data.products && data.products.edges.map((product: any) => (
                                                                <div className="items" onClick={() => SeeDetails(product.node.name)}>
                                                                    <div className="ShopAddress">
                                                                        <p>{product.node.name}</p>
                                                                        {product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.distance &&
                                                                            <div className="SearchLocation">
                                                                                <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                                                                                <div>
                                                                                    <p>{product.node.storess.edges[0].node.distance}</p>
                                                                                </div>
                                                                            </div>}

                                                                    </div>
                                                                    {product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.address && (product.node.storess.edges[0].node.address.streetAddress || product.node.storess.edges[0].node.address.streetAddress2 || product.node.storess.edges[0].node.address.city || product.node.storess.edges[0].node.country.country) &&
                                                                        <div className="shop-address">
                                                                            <p>{product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.address && product.node.storess.edges[0].node.address.streetAddress + " , " + product.node.storess.edges[0].node.address.streetAddress2 + " , " + product.node.storess.edges[0].node.address.city + " , " + product.node.storess.edges[0].node.address.country.country}</p>
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
                                    </TypedSearchResultsByPrice>
                                    :
                                    <TypedSearchResults
                                        renderOnError
                                        displayError={false}
                                        errorPolicy="all"
                                        variables={{ query: search, latitude, longitude }}
                                    >
                                        {({ data }) => {
                                            setTimeout(() => {
                                                setLoadingState(false)
                                            }, 500)
                                            if (loadingState) {
                                                return <h6 className="loaderIcon">
                                                    <ReactSVG path={loader} />
                                                </h6>
                                            }
                                            else {
                                                if (data.search && data.search.products.edges.length > 0 || data.search && data.search.stores.edges.length > 0) {
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
                                                                        {product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.distance &&
                                                                            <div className="SearchLocation">
                                                                                <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                                                                                <div>
                                                                                    <p>{product.node.storess.edges[0].node.distance}</p>
                                                                                </div>
                                                                            </div>}
                                                                    </div>
                                                                    {product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.address && (product.node.storess.edges[0].node.address.streetAddress || product.node.storess.edges[0].node.address.streetAddress2 || product.node.storess.edges[0].node.address.city || product.node.storess.edges[0].node.country.country) &&
                                                                        <div className="shop-address">
                                                                            <p>{product.node.storess && product.node.storess.edges && product.node.storess.edges[0] && product.node.storess.edges[0].node.address && product.node.storess.edges[0].node.address.streetAddress + " , " + product.node.storess.edges[0].node.address.streetAddress2 + " , " + product.node.storess.edges[0].node.address.city + " , " + product.node.storess.edges[0].node.address.country.country}</p>
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
}

export default withRouter(search);