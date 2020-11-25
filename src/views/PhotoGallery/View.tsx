import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";

// import { NotFound, OfflinePlaceholder } from "../../components";
// import NetworkStatus from "../../components/NetworkStatus";
import { getGraphqlIdFromDBId } from "../../core/utils";

import Page from "./Page";
import { TypedProductDetailsQuery } from "./queries";


const View: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const [load, setLoad] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 2000)
  }, [])
  return (
    <TypedProductDetailsQuery
      loaderFull
      variables={{
        id: getGraphqlIdFromDBId(match.params.id, "Store"),
      }}
    >
      {({ data }) => {
        const { store } = data;
        return (
          <Page product={store} loading={load} />
        );
      }}
    </TypedProductDetailsQuery>
  )
}

export default View;
