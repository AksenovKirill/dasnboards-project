import { Link, useMatch } from "react-router-dom";
import classes from "./CustomNavLink.module.css";
import { memo } from "react";

export const CustomNavLink = memo(({ children, to, ...props }) => {
  const match = useMatch(to);
  const { active, link } = classes;
  const isClasses = match ? active : link;

  return (
    <Link className={isClasses} to={to} {...props}>
      {children}
    </Link>
  );
});
