import React, { useState } from "react";
import { TypedSearchResults } from "../OverlayManager/Search/queries";

const search: React.FC = () => {
    const [search, setSearch] = useState(null)
    return <>
        <input type="txt" placeholder="search.." onChange={(e) => setSearch(e.target.value)} style={{ width: "100%", height: "80%" }} />
        {search ?  <TypedSearchResults
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
                            <div >


                                <p>{product.node.category.name}</p>


                            </div>
                        )) : <div>No data found...</div>



                    )
                }

            }}
        </TypedSearchResults>:""}

    </>
}

export default search;