import React, { useState } from "react";

import { withRouter } from "react-router-dom";

import ReactSVG from "react-svg";

import searchicon from "../../images/search.svg";

import { stringify } from "query-string";

import { TypedSearchResults } from "../OverlayManager/Search/queries";

import { searchUrl } from "../../app/routes";

const search: React.FC = (props: any) => {
    const [search, setSearch] = useState(null);

    const SeeDetails = (searchWord) => {
        setSearch(null)
        props.history.push(`${searchUrl}?${searchQs(searchWord.slice(0, 3))}`);
    }
    const searchQs = (searchWord) => {
        return stringify({ q: searchWord });
    }
    return <>
        <div className="searchfield">
            <input type="txt" placeholder="Search.." value={search} onChange={(e) => setSearch(e.target.value)} className="form-control" />
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
    </>
}

export default withRouter(search);