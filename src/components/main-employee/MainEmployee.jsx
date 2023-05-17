import React from "react";
import "./mainEmployee.scss";
const MainEmployee = () => {
  return (
    <div className="mainemployee-body">
      
      <div className="module module-multi module-series inset">
        <div className="module-title">
          <div className="title-inner">
            <span className="span-0">related</span>
            <span className="span-1">info</span>
          </div>
        </div>
        <div className="module-body">
          <div className="module-body-wrap">
            
            <div className="fragment-media  module-member">
              <div className="media-body-wrap">
                <div className="media-title">Manager </div>
              </div>
            </div>
            <div className="fragment-media  module-member">
              <div className="media-body-wrap">
                <div className="media-title">45</div>
              </div>
            </div>
          </div>
        </div>
        <div className="series-footer">&nbsp;</div>
      </div>
      <div className="module module-multi module-series inset">
        <div className="module-title">
          <div className="title-inner">
            <span className="span-0">related</span>
            <span className="span-1">info</span>
          </div>
        </div>
        <div className="module-body">
         
          <div className="module-body-wrap">
            
            <div className="fragment-media  module-member">
              <div className="media-body-wrap">
                <div className="media-title">Employee </div>
              </div>
            </div>
            <div className="fragment-media  module-member">
              <div className="media-body-wrap">
                <div className="media-title">501</div>
              </div>
            </div>
          </div>
        </div>
        <div className="series-footer">&nbsp;</div>
      </div>
    </div>
  );
};
export default MainEmployee;
