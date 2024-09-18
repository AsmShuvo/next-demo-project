import React from 'react';
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: ['400', '500', '700'] , subsets: ["latin"]})

const GalleryPage = () => {
    return (
        <div>
            <p className={roboto.className}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo architecto ducimus eveniet quo praesentium nostrum? Ut vero dolorum deserunt libero.</p>
        </div>
    );
};

export default GalleryPage;