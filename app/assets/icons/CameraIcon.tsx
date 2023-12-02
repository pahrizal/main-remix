import * as React from "react";
import { SVGProps } from "react";

const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M5.25 6C4.00736 6 3 7.00736 3 8.25V15.75C3 16.9926 4.00736 18 5.25 18H14.25C15.4926 18 16.5 16.9926 16.5 15.75V13.6013L19.7699 16.3262C19.9934 16.5125 20.3046 16.5526 20.5681 16.4292C20.8317 16.3058 21 16.041 21 15.75V8.25C21 7.95899 20.8317 7.69424 20.5681 7.57081C20.3046 7.44737 19.9934 7.48753 19.7699 7.67383L16.5 10.3987V8.25C16.5 7.00736 15.4926 6 14.25 6H5.25Z"
            fill={props.fill}
        />
    </svg>
);

export default CameraIcon;
