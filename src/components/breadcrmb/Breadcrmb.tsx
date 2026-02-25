import type React from "react";
import "./Breadcrmb.css";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const Breadcrmb: React.FC<Props> = ({ items }) => {
  return (
    <div className="breadcrmb-wrp max-width-screen">
      <div className="breadcrmb">
        <div className="bTop">
          <div>
            <i className="fa fa-home" aria-hidden="true"></i>
          </div>

          <div className="breadcrumbMn">
            <ul>
              {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                  <li key={index}>
                    {item.path && !isLast ? (
                      <>
                        <Link to={item.path} className="breadcrmbNvgt">
                          {item.label}
                        </Link>
                        <i className="fa fa-chevron-right"></i>
                      </>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrmb;
