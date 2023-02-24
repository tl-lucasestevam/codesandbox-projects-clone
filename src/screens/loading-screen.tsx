import * as React from "react";

const SvgComponent = (props: React.HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={810}
    viewBox="0 0 1440 810"
    fill="none"
    {...props}
  >
    <rect width={1440} height={810} rx={6} fill="#151515" />
    <rect x={848} y={60} width={580} height={365} rx={4} fill="#1F1F1F" />
    <rect x={848} y={433} width={580} height={365} rx={4} fill="#1F1F1F" />
    <path
      d="M1400 74c0-1.105.9-2 2-2h12c1.1 0 2 .895 2 2v12c0 1.105-.9 2-2 2h-12c-1.1 0-2-.895-2-2V74Z"
      className="loading"
    />
    <rect x={860} y={445} width={117} height={16} rx={2} className="loading" />
    <rect x={860} y={72} width={117} height={16} rx={2} className="loading" />
    <path
      d="M1400 447c0-1.105.9-2 2-2h12c1.1 0 2 .895 2 2v12c0 1.105-.9 2-2 2h-12c-1.1 0-2-.895-2-2v-12Z"
      className="loading"
    />
    <rect x={12} y={60} width={112} height={16} rx={2} className="loading" />
    <rect x={12} y={110} width={126} height={16} rx={2} className="loading" />
    <rect x={12} y={162} width={112} height={16} rx={2} className="loading" />
    <rect x={12} y={318} width={112} height={16} rx={2} className="loading" />
    <rect x={12} y={214} width={101} height={16} rx={2} className="loading" />
    <rect x={12} y={370} width={101} height={16} rx={2} className="loading" />
    <rect x={12} y={266} width={95} height={16} rx={2} className="loading" />
    <rect x={12} y={136} width={101} height={16} rx={2} className="loading" />
    <rect x={12} y={188} width={89} height={16} rx={2} className="loading" />
    <rect x={12} y={344} width={89} height={16} rx={2} className="loading" />
    <rect x={12} y={240} width={89} height={16} rx={2} className="loading" />
    <rect x={12} y={292} width={107} height={16} rx={2} className="loading" />
    <path
      d="M644.47 29.148c1.441 0 2.493-.72 2.825-1.791l-1.052-.296c-.277.739-.919 1.108-1.773 1.108-1.279 0-2.16-.826-2.211-2.345h5.147v-.462c0-2.64-1.569-3.545-3.047-3.545-1.92 0-3.194 1.514-3.194 3.693 0 2.179 1.255 3.638 3.305 3.638Zm-2.211-4.266c.074-1.103.854-2.087 2.1-2.087 1.182 0 1.939.887 1.939 2.087h-4.039Zm7.427-2.973h-1.256l2.253 3.546L648.43 29h1.256l1.698-2.751L653.083 29h1.256l-2.29-3.546 2.29-3.545h-1.256l-1.699 2.9-1.698-2.9Zm8.796 7.239c1.57 0 2.604-.96 2.789-2.216h-1.09c-.203.775-.849 1.237-1.699 1.237-1.292 0-2.123-1.071-2.123-2.715 0-1.606.849-2.659 2.123-2.659.961 0 1.533.591 1.699 1.238h1.09c-.185-1.33-1.311-2.216-2.807-2.216-1.921 0-3.195 1.514-3.195 3.674 0 2.124 1.219 3.657 3.213 3.657Zm6.468.018c1.237 0 1.884-.665 2.105-1.126h.056V29h1.089v-4.672c0-2.253-1.717-2.511-2.622-2.511-1.071 0-2.29.37-2.844 1.662l1.034.369c.24-.517.808-1.071 1.847-1.071 1.002 0 1.496.53 1.496 1.44v.037c0 .526-.536.48-1.829.647-1.315.17-2.751.461-2.751 2.086 0 1.385 1.071 2.18 2.419 2.18Zm.166-.979c-.868 0-1.496-.387-1.496-1.144 0-.831.758-1.09 1.607-1.2.462-.056 1.699-.185 1.884-.407v.997c0 .887-.702 1.755-1.995 1.755Zm6.162-8.642h-1.089V29h1.089v-9.454ZM673.274 29h1.089v-7.09h-1.089V29Zm.554-8.273c.424 0 .775-.332.775-.738 0-.407-.351-.739-.775-.739-.425 0-.776.332-.776.739 0 .406.351.738.776.738Zm5.208 8.42c1.367 0 1.828-.849 2.068-1.236h.129V29h1.053v-9.454h-1.089v3.49h-.093c-.24-.37-.665-1.22-2.049-1.22-1.792 0-3.029 1.423-3.029 3.657 0 2.253 1.237 3.675 3.01 3.675Zm.148-.978c-1.367 0-2.068-1.2-2.068-2.715 0-1.495.683-2.659 2.068-2.659 1.329 0 2.031 1.071 2.031 2.66 0 1.606-.72 2.714-2.031 2.714Zm5.249.831h1.089v-4.487c0-.96.757-1.662 1.791-1.662.291 0 .591.055.665.074v-1.108c-.124-.01-.411-.019-.572-.019-.85 0-1.588.48-1.847 1.182h-.074v-1.07h-1.052V29Zm6.923.166c1.237 0 1.884-.665 2.105-1.126h.056V29h1.089v-4.672c0-2.253-1.717-2.511-2.622-2.511-1.071 0-2.29.37-2.844 1.662l1.034.369c.241-.517.808-1.071 1.847-1.071 1.002 0 1.496.53 1.496 1.44v.037c0 .526-.536.48-1.828.647-1.316.17-2.752.461-2.752 2.086 0 1.385 1.071 2.18 2.419 2.18Zm.166-.979c-.867 0-1.495-.387-1.495-1.144 0-.831.757-1.09 1.606-1.2.462-.056 1.699-.185 1.884-.407v.997c0 .887-.702 1.755-1.995 1.755Zm6.679.813h1.071l1.552-5.447h.11L702.485 29h1.071l2.161-7.09h-1.145l-1.533 5.41h-.073l-1.496-5.41h-1.164l-1.514 5.428h-.074l-1.532-5.429h-1.145l2.16 7.091Z"
      fill="#999"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M716.5 21.5a.5.5 0 0 1 .5-.5h3.833a1.5 1.5 0 0 1 1.396.95l1.702 4.33c.076.19.26.316.466.316h4.416l-1.422-1.422a.5.5 0 0 1 .707-.707l2.205 2.205a.6.6 0 0 1 0 .849l-2.168 2.167a.5.5 0 1 1-.707-.707l1.385-1.385h-4.416a1.499 1.499 0 0 1-1.396-.95l-1.703-4.329a.499.499 0 0 0-.465-.317H717a.5.5 0 0 1-.5-.5Zm9.081.5h4.477a.5.5 0 0 0 0-1h-4.477a.5.5 0 0 0 0 1Z"
      fill="#999"
    />
    <path
      d="M743.655 21.91h-1.588v-.721c0-.702.295-1.071 1.015-1.071.314 0 .499.074.61.11l.314-.941c-.167-.074-.499-.185-1.034-.185-1.016 0-1.995.61-1.995 1.828v.98h-1.145v.922h1.145V29h1.09v-6.168h1.588v-.923Zm4.208 7.238c1.44 0 2.493-.72 2.825-1.791l-1.053-.296c-.277.739-.918 1.108-1.772 1.108-1.279 0-2.161-.826-2.212-2.345h5.148v-.462c0-2.64-1.57-3.545-3.047-3.545-1.921 0-3.195 1.514-3.195 3.693 0 2.179 1.256 3.638 3.306 3.638Zm-2.212-4.266c.074-1.103.855-2.087 2.101-2.087 1.182 0 1.939.887 1.939 2.087h-4.04Zm8.892 4.284c1.237 0 1.883-.665 2.105-1.126h.055V29h1.09v-4.672c0-2.253-1.718-2.511-2.622-2.511-1.071 0-2.29.37-2.844 1.662l1.034.369c.24-.517.808-1.071 1.847-1.071 1.001 0 1.495.53 1.495 1.44v.037c0 .526-.535.48-1.828.647-1.316.17-2.751.461-2.751 2.086 0 1.385 1.071 2.18 2.419 2.18Zm.166-.979c-.868 0-1.496-.387-1.496-1.144 0-.831.757-1.09 1.607-1.2.461-.056 1.699-.185 1.883-.407v.997c0 .887-.701 1.755-1.994 1.755Zm8.156-6.278h-1.514V20.21h-1.09v1.7h-1.071v.922h1.071v4.432c0 1.237.998 1.828 1.921 1.828.406 0 .665-.073.812-.129l-.221-.979c-.093.019-.24.056-.48.056-.48 0-.942-.148-.942-1.071v-4.137h1.514v-.923Zm6.108 4.192c0 1.33-1.016 1.939-1.828 1.939-.905 0-1.552-.665-1.552-1.7v-4.43h-1.089v4.505c0 1.81.96 2.677 2.29 2.677 1.071 0 1.772-.572 2.105-1.292h.074V29h1.089v-7.09h-1.089v4.19ZM772.058 29h1.089v-4.487c0-.96.757-1.662 1.791-1.662.291 0 .591.055.665.074v-1.108c-.124-.01-.411-.019-.572-.019-.85 0-1.588.48-1.847 1.182h-.074v-1.07h-1.052V29Zm7.594.148c1.44 0 2.493-.72 2.825-1.791l-1.052-.296c-.277.739-.919 1.108-1.773 1.108-1.279 0-2.161-.826-2.211-2.345h5.147v-.462c0-2.64-1.57-3.545-3.047-3.545-1.92 0-3.195 1.514-3.195 3.693 0 2.179 1.256 3.638 3.306 3.638Zm-2.211-4.266c.073-1.103.854-2.087 2.1-2.087 1.182 0 1.939.887 1.939 2.087h-4.039Z"
      fill="#999"
    />
    <path
      d="m793.5 24-1.929 1.93a.1.1 0 0 1-.142 0L789.5 24"
      stroke="#999"
      strokeLinecap="round"
    />
    <path
      d="M13.437 19.75a.5.5 0 0 0 0 1v-1Zm13.125 1a.5.5 0 1 0 0-1v1ZM13.437 23.5a.5.5 0 0 0 0 1v-1Zm13.125 1a.5.5 0 1 0 0-1v1Zm-13.125 2.75a.5.5 0 1 0 0 1v-1Zm6.125 1a.5.5 0 1 0 0-1v1Zm-6.125-7.5h13.125v-1H13.437v1Zm0 3.75h13.125v-1H13.437v1Zm0 3.75h6.125v-1h-6.125v1Z"
      fill="#999"
    />
    <style>
      {
        "@keyframes loading{0%,to{fill:#242424}50%{fill:#3c3c3c}}.loading{animation:1.5s loading ease infinite}"
      }
    </style>
  </svg>
);

export default SvgComponent;