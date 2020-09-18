import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { CheckoutLogin, NotFound } from "../../components";
import UserAccount, * as accountPaths from "../../userAccount/routes";
import { OrderDetails } from "../../userAccount/views";
import { Account, AccountConfirm } from "../../views/Account";
import { ArticlePage } from "../../views/Article";
import { CategoryPage } from "../../views/Category";
import { CollectionPage } from "../../views/Collection";
import businessResourceCenter from "../../views/FooterPages/businessResourceCenter";
import ContactUs from "../../views/FooterPages/ContactUs";
import PrivacyPolicy from "../../views/FooterPages/PrivacyPolicy";
import { HomePage } from "../../views/Home";
import { ProductPage } from "../../views/Product";
import { SearchPage } from "../../views/Search";
import { ShopPage } from "../../views/Shop";

import { CartPage, CheckoutPage, PasswordReset, ThankYouPage } from "@pages";

import * as paths from "./paths";

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path={paths.baseUrl} component={HomePage} />
    <Route path={paths.searchUrl} component={SearchPage} />
    <Route path={paths.categoryUrl} component={CategoryPage} />
    <Route path={paths.collectionUrl} component={CollectionPage} />
    <Route path={paths.shopUrl} component={ShopPage} />
    <Route path={paths.productUrl} component={ProductPage} />
    <Route path={paths.cartUrl} component={CartPage} />
    <Route path={paths.checkoutLoginUrl} component={CheckoutLogin} />
    <Route path={paths.pageUrl} component={ArticlePage} />
    <Route path={accountPaths.baseUrl} component={UserAccount} />
    <Route path={accountPaths.userOrderDetailsUrl} component={OrderDetails} />
    <Route path={paths.guestOrderDetailsUrl} component={OrderDetails} />
    <Route path={paths.accountUrl} component={Account} />
    <Route path={paths.accountConfirmUrl} component={AccountConfirm} />
    <Route path={paths.orderHistoryUrl} component={Account} />
    <Route path={paths.addressBookUrl} component={Account} />
    <Route path={paths.passwordResetUrl} component={PasswordReset} />
    <Route path={paths.checkoutUrl} component={CheckoutPage} />
    <Route path={paths.orderFinalizedUrl} component={ThankYouPage} />
    <Route path={paths.privacyPolicyUrl} component={PrivacyPolicy} />
    <Route path={paths.contactUsUrl} component={ContactUs} />
    <Route path={paths.businessResourceCenterUrl} component={businessResourceCenter} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
