import React from "react";
import ImageGrid from "./content";

// Removed `headers` since it was unused
const ShowRow: React.FC = () => {
    return (
        <div>
            <h3>Select an image</h3>
            <ImageGrid />
        </div>
    );
};

export default ShowRow;
