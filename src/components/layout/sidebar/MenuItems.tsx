import { uniqueId } from "lodash";
import { IoMdHome } from "react-icons/io";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IoMdHome,
    href: "/dashboard",
  },
  {
    id: uniqueId(),
    title: "Sales Analytics",
    icon: MdOutlineAnalytics,
    href: "/sales-analytics",
  },
  {
    id: uniqueId(),
    title: "Order Management",
    icon: BsClipboardCheck,
    href: "/order-management",
  },
  {
    id: uniqueId(),
    title: "Product Management",
    icon: CiWallet,
    href: "/product-management",
  },
  {
    id: uniqueId(),
    title: "Shopping Cart",
    icon: BsBagCheck,
    href: "/customer-management",
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: AiOutlineLogout,
    href: "/logout",
  },
];

export default Menuitems;
