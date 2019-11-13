import React from "react";
import { CollectionItem } from '../Collection-item/Collection-item.component';
import "./Collection-preview.component.styles.scss"
/**
 * 
 * filter the list and only show 4 preview components from items array
 */
const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title"> {title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...itemProps}) => (
            <CollectionItem key={id} {...itemProps}/>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
