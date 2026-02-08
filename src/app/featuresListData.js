import { BiSupport } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoVerified, GoTrophy } from "react-icons/go";

const FEATURES_LIST = [
  {
    id: "quality",
    title: "High Quality",
    text: "crafted from top materials",
    Icon: GoTrophy,
  },
  {
    id: "protection",
    title: "Warranty Protection",
    text: "Over 2 years",
    Icon: GoVerified,
  },
  {
    id: "shipping",
    title: "Free Shipping",
    text: "Order over 150 $",
    Icon: LiaShippingFastSolid,
  },
  {
    id: "support",
    title: "24 / 7 Support",
    text: "Dedicated support",
    Icon: BiSupport,
  },
];

export default FEATURES_LIST;
