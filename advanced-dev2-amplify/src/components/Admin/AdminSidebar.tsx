import { useState, useEffect } from "react";
import { SideNavigation } from "@cloudscape-design/components";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "@/hooks/useUser";

function AdminSideBar() {
  // const routes = useRoutes();
  useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeHref, setActiveHref] = useState(location.pathname);
  const { isAdmin } = useUser();

  const itemsList = isAdmin
    ? [
        {
          type: "link",
          text: "Home",
          href: "/admin",
        },
        {
          type: "link",
          text: "Categories",
          href: "/admin/categories",
        },
        {
          type: "link",
          text: "Sellers",
          href: "/admin/sellers",
        },
        {
          type: "link",
          text: "Products",
          href: "/admin/products",
        },
      ]
    : [
        {
          type: "link",
          text: "Home",
          href: "/admin",
        },
        {
          type: "link",
          text: "Categories",
          href: "/admin/categories",
        },
        {
          type: "link",
          text: "Products",
          href: "/admin/products",
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

export default AdminSideBar;
