import React, { useState } from "react";
import ReactSVG from "react-svg";
import searchicon from "../../images/search.svg";
import { TypedSearchResults } from "../OverlayManager/Search/queries";


const search: React.FC = () => {
    const [search, setSearch] = useState(null)
    return <>
        <div className="searchfield">
            <input type="txt" placeholder="Search.." onChange={(e) => setSearch(e.target.value)} className="form-control" />
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
                                <div className="items">
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

export default search;