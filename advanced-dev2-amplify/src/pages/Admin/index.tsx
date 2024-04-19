import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider, Authenticator } from "@aws-amplify/ui-react";

import React from "react";
import { TopNavigation } from "@cloudscape-design/components";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";

import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import Categories from "./Categories";
import Sellers from "./Sellers";
import Home from "./Home";

const LOCALE = "en";

function Admin() {
  return (
    <Authenticator loginMechanisms={["email"]} signUpAttributes={["email"]}>
      {({ signOut, user }) => (
        <ThemeProvider>
          <I18nProvider locale={LOCALE} messages={[messages]}>
            <TopNavigation
              identity={{
                href: "/",
                title: "AWS Online Store",
              }}
              // search={
              //     <form onSubmit={e => { handleSearch(e); }}>
              //         <Input
              //             ariaLabel="Input field"
              //             value={globalValue}
              //             type="search"
              //             placeholder="Search"
              //             onChange={({ detail }) => setGlobalValue(detail.value)}
              //         />
              //     </form>
              // }
              utilities={[
                {
                  type: "menu-dropdown",
                  text: user?.signInDetails?.loginId?.substring(
                    0,
                    user.signInDetails.loginId.indexOf("@")
                  ),
                  iconName: "user-profile",
                  items: [
                    { id: "profile", text: "Profile" },
                    { id: "preferences", text: "Notifications" },
                    { id: "security", text: "Settings" },
                  ],
                },
                {
                  type: "button",
                  title: "Sign Out",
                  text: "Sign Out",
                  ariaLabel: "Sign Out",
                  onClick: signOut,
                },
              ]}
            />
            <Routes>
              <Route path="/products" element={<Products />} />
              <Route path="/sellers" element={<Sellers />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </I18nProvider>
        </ThemeProvider>
      )}
    </Authenticator>
  );
}

export default Admin;
