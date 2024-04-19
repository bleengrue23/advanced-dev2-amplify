import { useState, useEffect } from "react";
import { SideNavigation } from "@cloudscape-design/components";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "@/hooks/useUser";

function GuestSideBar() {
  // const routes = useRoutes();
  useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeHref, setActiveHref] = useState(location.pathname);
  //const { isAdmin } = useUser();

  const itemsList = [
        {
          type: "link",
          text: "Home",
          href: "/",
        },
        {
          type: "link",
          text: "Shop by Category",
          href: "/categories",
        },
        {
            type: "link",
            text: "Shop by Seller",
            href: "/sellers",
          },
      ];

  useEffect(() => {
    setActiveHref(location.pathname);
  }, [location.pathname]);

  return (
    <SideNavigation
      activeHref={activeHref}
      // header={{ href: "/", text: "Internet of Things" }}
      onFollow={(event) => {
        event.preventDefault();
        setActiveHref(event.detail.href);
        navigate(event.detail.href);
      }}
      items={itemsList as any[]}
    />
  );
}

export default GuestSideBar;
