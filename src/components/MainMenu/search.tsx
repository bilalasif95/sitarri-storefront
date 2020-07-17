import React, { useState } from "react";

import { withRouter } from "react-router-dom";

import ReactSVG from "react-svg";

import searchicon from "../../images/search.svg";

import { stringify } from "query-string";

import { TypedSearchResults } from "../OverlayManager/Search/queries";

import { searchUrl } from "../../app/routes";

import { useComponentVisible } from "@hooks"

const search: React.FC = (props: any) => {
    const [search, setSearch] = useState(null);
    const { ref, isComponentVisible } = useComponentVisible(true);
    const SeeDetails = (searchWord) => {
        setSearch("")
        // slice(0, 3)
        props.history.push(`${searchUrl}?${searchQs(searchWord)}`);
    }
    const searchQs = (searchWord) => {
        return stringify({ q: searchWord });
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


    return <>
        <div className="searchfield">
            <input type="txt" placeholder="Search.." value={search} onChange={(e) => SetSearchEvent(e)} className="form-control" />
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
                        return <h6>Searching..</h6>
                    }

                    else {

                        if (data.search && data.search.products.edges.length > 0 || data.search.categories.edges.length > 0 || data.search.stores.edges.length > 0) {
                            return (

                                <div>

                                    {data.search.stores.edges.map((store: any) => (

                                        <div ref={ref} className="items" onClick={() => SeeDetails(store.node.name)}>
                                            <p>{store.node.name}</p>
                                        </div>

                                    ))}
                                    {data.search.products.edges.map((product: any) => (

                                        <div ref={ref} className="items" onClick={() => SeeDetails(product.node.name)}>
                                            <p>{product.node.name}</p>
                                        </div>

                                    ))}
                                    {data.search.categories.edges.map((cat: any) => (

                                        <div ref={ref} className="items" onClick={() => SeeDetails(cat.node.name)}>
                                            <p>{cat.node.name}</p>
                                        </div>

                                    ))}

                                </div>
                            )

                        }
                        else {
                            return (
                                <div>No data found...</div>
                            )

                        }
                    }



                }}
            </TypedSearchResults> : ""}
        </div>
    </>
}

export default withRouter(search);