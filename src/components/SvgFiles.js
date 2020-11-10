import React from "react";
const SvgFiles = ({ icon }) => {

  switch (icon) {
    case "LogoWAS":
        return (
            <svg id="LogoWas" width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 1L11.9379 37M2 1L32.0621 37M2 1H22M11.9379 37H32.0621M11.9379 37L22 1M32.0621 37L42 1H22M32.0621 37L22 1" stroke="white" stroke-width="2"/>
            </svg>
        );
    case "PdfDownload":
        return(
            <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path d="M11.3684 19.1843H2.13158C1.56625 19.1843 1.02407 18.9597 0.624325 18.5599C0.224576 18.1602 0 17.618 0 17.0527V12.7895C0 12.2242 0.224576 11.682 0.624325 11.2823C1.02407 10.8825 1.56625 10.658 2.13158 10.658H11.3684C11.9338 10.658 12.4759 10.8825 12.8757 11.2823C13.2754 11.682 13.5 12.2242 13.5 12.7895V17.0527C13.5 17.618 13.2754 18.1602 12.8757 18.5599C12.4759 18.9597 11.9338 19.1843 11.3684 19.1843ZM2.13158 12.079C1.94314 12.079 1.76241 12.1539 1.62916 12.2871C1.49591 12.4204 1.42105 12.6011 1.42105 12.7895V17.0527C1.42105 17.2411 1.49591 17.4219 1.62916 17.5551C1.76241 17.6884 1.94314 17.7632 2.13158 17.7632H11.3684C11.5569 17.7632 11.7376 17.6884 11.8708 17.5551C12.0041 17.4219 12.0789 17.2411 12.0789 17.0527V12.7895C12.0789 12.6011 12.0041 12.4204 11.8708 12.2871C11.7376 12.1539 11.5569 12.079 11.3684 12.079H2.13158Z" fill="#F6FBF9"/>
                    <path d="M14.2105 8.52625H7.10523C6.96496 8.52555 6.82803 8.48334 6.7117 8.40495C6.59537 8.32655 6.50485 8.21548 6.45155 8.08572C6.39714 7.95633 6.38227 7.81372 6.40883 7.67588C6.43538 7.53805 6.50217 7.41116 6.60076 7.31125L13.706 0.205985C13.8059 0.107394 13.9328 0.040607 14.0707 0.0140517C14.2085 -0.0125036 14.3511 0.00236231 14.4805 0.056774C14.6103 0.110078 14.7213 0.200597 14.7997 0.316925C14.8781 0.433252 14.9203 0.570182 14.921 0.710458V7.81572C14.921 8.00417 14.8462 8.18489 14.7129 8.31814C14.5797 8.45139 14.3989 8.52625 14.2105 8.52625ZM8.8176 7.1052H13.5V2.42283L8.8176 7.1052Z" fill="#F6FBF9"/>
                    <path d="M3.75151 12.9954C3.90824 12.9917 4.06409 13.02 4.20948 13.0787C4.35488 13.1373 4.48676 13.2251 4.59704 13.3365C4.71487 13.4407 4.80933 13.5686 4.87423 13.7119C4.93913 13.8552 4.973 14.0105 4.97362 14.1678C4.97532 14.3228 4.94531 14.4765 4.88544 14.6194C4.82557 14.7624 4.73709 14.8916 4.62546 14.9991C4.51385 15.1083 4.38158 15.194 4.23638 15.2514C4.09119 15.3087 3.936 15.3365 3.77993 15.3331H3.14046V16.477H2.42993V12.9954H3.75151ZM3.75151 14.6936C3.81977 14.6964 3.8878 14.6839 3.95054 14.6568C4.01327 14.6297 4.0691 14.5889 4.11388 14.5373C4.16288 14.4893 4.20142 14.4317 4.2271 14.3681C4.25278 14.3046 4.26503 14.2364 4.26309 14.1678C4.26572 14.0971 4.25384 14.0265 4.22818 13.9605C4.20252 13.8945 4.16362 13.8345 4.11388 13.7841C4.06781 13.7346 4.01158 13.6956 3.94903 13.6699C3.88648 13.6441 3.8191 13.6322 3.75151 13.6349H3.14046V14.6936H3.75151Z" fill="#F6FBF9"/>
                    <path d="M6.77127 12.9954C6.99449 12.9911 7.21613 13.0337 7.42178 13.1207C7.62743 13.2076 7.8125 13.3368 7.96495 13.4999C8.27503 13.8369 8.44713 14.2782 8.44713 14.7362C8.44713 15.1942 8.27503 15.6355 7.96495 15.9725C7.81363 16.1371 7.62877 16.2673 7.42285 16.3543C7.21693 16.4413 6.99474 16.4832 6.77127 16.477H5.38574V12.9954H6.77127ZM6.77127 15.8375C6.90449 15.8391 7.03656 15.8128 7.15895 15.7602C7.28135 15.7075 7.39133 15.6298 7.48179 15.532C7.66572 15.3131 7.76655 15.0363 7.76655 14.7504C7.76655 14.4645 7.66572 14.1877 7.48179 13.9688C7.38991 13.8734 7.2795 13.7976 7.15732 13.7463C7.03514 13.695 6.90378 13.6692 6.77127 13.6704H6.06074V15.8375H6.77127Z" fill="#F6FBF9"/>
                    <path d="M11.0131 13.6564H9.59202V14.4806H10.9491V15.1343H9.62044V16.4772H8.90991V12.9956H11.0131V13.6564Z" fill="#F6FBF9"/>
                    <path d="M24.8685 27.7105H20.2003C20.0119 27.7105 19.8311 27.6357 19.6979 27.5024C19.5646 27.3692 19.4898 27.1885 19.4898 27C19.4898 26.8116 19.5646 26.6308 19.6979 26.4976C19.8311 26.3643 20.0119 26.2895 20.2003 26.2895H24.8685C25.0569 26.2895 25.2376 26.2146 25.3709 26.0814C25.5041 25.9481 25.579 25.7674 25.579 25.579V2.13159C25.579 1.94315 25.5041 1.76242 25.3709 1.62917C25.2376 1.49592 25.0569 1.42106 24.8685 1.42106H14.5019L7.81584 8.10712V11.3684C7.81584 11.5569 7.74098 11.7376 7.60773 11.8709C7.47448 12.0041 7.29376 12.079 7.10531 12.079C6.91687 12.079 6.73615 12.0041 6.6029 11.8709C6.46965 11.7376 6.39479 11.5569 6.39479 11.3684V7.8158C6.39425 7.72229 6.41217 7.62959 6.44753 7.54303C6.48289 7.45646 6.53499 7.37772 6.60084 7.31133L13.7061 0.206064C13.7725 0.140212 13.8512 0.0881124 13.9378 0.0527534C14.0244 0.0173943 14.1171 -0.000528759 14.2106 1.1876e-05H24.8685C25.4338 1.1876e-05 25.976 0.224588 26.3757 0.624337C26.7755 1.02409 27.0001 1.56626 27.0001 2.13159V25.579C27.0001 26.1443 26.7755 26.6865 26.3757 27.0862C25.976 27.486 25.4338 27.7105 24.8685 27.7105Z" fill="#F6FBF9"/>
                    <path d="M18.1682 27.7106H8.52635C7.96102 27.7106 7.41885 27.486 7.0191 27.0862C6.61935 26.6865 6.39478 26.1443 6.39478 25.579V18.4737C6.39478 18.2853 6.46963 18.1045 6.60288 17.9713C6.73613 17.838 6.91686 17.7632 7.1053 17.7632C7.29374 17.7632 7.47447 17.838 7.60772 17.9713C7.74097 18.1045 7.81583 18.2853 7.81583 18.4737V25.579C7.81583 25.7674 7.89069 25.9481 8.02394 26.0814C8.15719 26.2146 8.33791 26.2895 8.52635 26.2895H18.1682C18.3566 26.2895 18.5374 26.3644 18.6706 26.4976C18.8039 26.6309 18.8787 26.8116 18.8787 27C18.8787 27.1885 18.8039 27.3692 18.6706 27.5024C18.5374 27.6357 18.3566 27.7106 18.1682 27.7106Z" fill="#F6FBF9"/>
                    <path d="M19.1842 29.1315C19.0715 29.131 18.9605 29.1037 18.8604 29.0518C18.7603 28.9999 18.6741 28.9249 18.6087 28.8331L15.056 23.8594C14.9805 23.7534 14.9356 23.6286 14.9262 23.4988C14.9168 23.3689 14.9432 23.239 15.0026 23.1232C15.062 23.0073 15.152 22.91 15.263 22.8419C15.3739 22.7737 15.5014 22.7374 15.6316 22.7368H16.3421V19.1842C16.3421 18.9957 16.417 18.815 16.5502 18.6817C16.6835 18.5485 16.8642 18.4736 17.0526 18.4736H21.3158C21.5042 18.4736 21.6849 18.5485 21.8182 18.6817C21.9514 18.815 22.0263 18.9957 22.0263 19.1842V22.7368H22.7368C22.867 22.7374 22.9945 22.7737 23.1054 22.8419C23.2164 22.91 23.3064 23.0073 23.3658 23.1232C23.4252 23.239 23.4516 23.3689 23.4422 23.4988C23.4328 23.6286 23.3879 23.7534 23.3124 23.8594L19.7597 28.8331C19.6943 28.9249 19.6081 28.9999 19.508 29.0518C19.4079 29.1037 19.2969 29.131 19.1842 29.1315ZM17.01 24.1578L19.1842 27.1989L21.3584 24.1578H21.3158C21.1273 24.1578 20.9466 24.083 20.8134 23.9497C20.6801 23.8165 20.6053 23.6358 20.6053 23.4473V19.8947H17.7631V23.4473C17.7631 23.6358 17.6883 23.8165 17.555 23.9497C17.4218 24.083 17.2411 24.1578 17.0526 24.1578H17.01Z" fill="#F6FBF9"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="27" height="30" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    case "LogoWhatsapp":
        return(
        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0974121 41L2.97937 30.4715C1.201 27.3897 0.266537 23.8962 0.268245 20.3138C0.27337 9.11396 9.38733 0 20.5855 0C26.0197 0.00170833 31.1207 2.11833 34.9577 5.95867C38.7929 9.799 40.9044 14.9035 40.9027 20.3326C40.8975 31.5341 31.7836 40.6481 20.5855 40.6481C17.1859 40.6464 13.8358 39.7939 10.8685 38.1744L0.0974121 41ZM11.3673 34.4964C14.2305 36.1962 16.9638 37.2143 20.5786 37.216C29.8856 37.216 37.4672 29.6413 37.4723 20.3292C37.4757 10.9983 29.93 3.43375 20.5923 3.43033C11.2785 3.43033 3.702 11.0051 3.69858 20.3155C3.69687 24.1165 4.8107 26.9626 6.68133 29.9402L4.9747 36.1722L11.3673 34.4964ZM30.8201 25.162C30.6937 24.9502 30.3554 24.8238 29.8463 24.5693C29.339 24.3147 26.8431 23.0864 26.3767 22.9173C25.912 22.7482 25.5738 22.6628 25.2338 23.1718C24.8956 23.6792 23.9218 24.8238 23.6263 25.162C23.3307 25.5003 23.0335 25.543 22.5261 25.2885C22.0187 25.0339 20.3822 24.4992 18.4432 22.7687C16.9347 21.4225 15.9149 19.7603 15.6193 19.2512C15.3238 18.7438 15.5886 18.4688 15.8414 18.216C16.0703 17.9888 16.3488 17.6232 16.6033 17.3259C16.8613 17.0321 16.945 16.8203 17.1158 16.4803C17.285 16.142 17.2012 15.8448 17.0731 15.5903C16.945 15.3374 15.9302 12.8381 15.5083 11.8217C15.0949 10.8325 14.6763 10.9658 14.3654 10.9504L13.3917 10.9333C13.0534 10.9333 12.5033 11.0597 12.0387 11.5688C11.574 12.0779 10.262 13.3045 10.262 15.8038C10.262 18.3031 12.0814 20.717 12.3342 21.0552C12.5887 21.3935 15.9132 26.5219 21.0057 28.7205C22.2169 29.2433 23.1633 29.5559 23.8996 29.7899C25.116 30.176 26.223 30.1213 27.0976 29.9915C28.0731 29.8463 30.1009 28.7632 30.5245 27.5776C30.9482 26.3903 30.9482 25.3739 30.8201 25.162Z" fill="#F6FBF9"/>
        </svg>

        );
    case "LogoEmail":
        return (
            <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 3.45085C29.9198 3.45085 37.5833 11.1144 37.5833 20.5342C37.5833 29.9539 29.9198 37.6175 20.5 37.6175C11.0803 37.6175 3.41667 29.9539 3.41667 20.5342C3.41667 11.1144 11.0803 3.45085 20.5 3.45085ZM20.5 0.0341797C9.17888 0.0341797 0 9.21306 0 20.5342C0 31.8553 9.17888 41.0342 20.5 41.0342C31.8211 41.0342 41 31.8553 41 20.5342C41 9.21306 31.8211 0.0341797 20.5 0.0341797ZM20.5 21.4738L10.2637 13.6667H30.7346L20.5 21.4738ZM20.5 23.6741L10.25 15.7662V27.3333H30.75V15.7662L20.5 23.6741Z" fill="#F6FBF9"/>
            </svg>
        );
    case "LogoLinkedin":
        return (
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 3.41598C23.8789 3.41598 27.1819 4.41794 29.9914 6.29515C32.8008 8.17237 34.9905 10.8405 36.2836 13.9622C37.5766 17.0839 37.915 20.5189 37.2558 23.8329C36.5966 27.1469 34.9695 30.191 32.5802 32.5802C30.191 34.9695 27.1469 36.5966 23.8329 37.2558C20.519 37.9149 17.0839 37.5766 13.9622 36.2836C10.8405 34.9905 8.17238 32.8008 6.29516 29.9914C4.41795 27.1819 3.41599 23.8789 3.41599 20.5C3.42091 15.9705 5.22242 11.628 8.42522 8.42521C11.628 5.22241 15.9706 3.42091 20.5 3.41598ZM20.5 0C16.4455 0 12.482 1.2023 9.11082 3.45487C5.73961 5.70744 3.11207 8.9091 1.56048 12.655C0.00888229 16.4009 -0.397086 20.5227 0.393911 24.4993C1.18491 28.476 3.13734 32.1287 6.00432 34.9957C8.8713 37.8627 12.524 39.8151 16.5007 40.6061C20.4773 41.3971 24.5991 40.9911 28.345 39.4395C32.0909 37.8879 35.2926 35.2604 37.5451 31.8892C39.7977 28.518 41 24.5545 41 20.5C40.9995 15.0632 38.8395 9.84929 34.9951 6.00492C31.1507 2.16054 25.9368 0.000548642 20.5 0V0ZM17.084 13.668C17.0816 14.0055 16.9793 14.3347 16.79 14.6141C16.6007 14.8935 16.333 15.1106 16.0205 15.2381C15.708 15.3655 15.3647 15.3976 15.034 15.3303C14.7034 15.2629 14.4 15.0992 14.1622 14.8597C13.9245 14.6202 13.7629 14.3157 13.698 13.9845C13.633 13.6533 13.6676 13.3103 13.7973 12.9988C13.927 12.6872 14.1461 12.421 14.4268 12.2338C14.7076 12.0465 15.0375 11.9466 15.375 11.9466C15.6003 11.9471 15.8233 11.9921 16.0312 12.079C16.2392 12.1658 16.4279 12.2929 16.5867 12.4528C16.7454 12.6127 16.8711 12.8023 16.9564 13.0109C17.0417 13.2194 17.0851 13.4427 17.084 13.668ZM17.084 17.084H13.6681V27.334H17.084V17.084ZM22.209 17.084H18.7931V27.334H22.209V22.447C22.209 19.5048 25.6291 19.2337 25.6291 22.447V27.334H29.0431V21.5966C29.0431 15.9854 23.6987 16.1923 22.2152 18.9524V17.0902L22.209 17.084Z" fill="#F6FBF9"/>
            </svg>
        );
    case "LogoGithub":
        return (
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 3.41667C29.9198 3.41667 37.5833 11.0803 37.5833 20.5C37.5833 29.9198 29.9198 37.5833 20.5 37.5833C11.0803 37.5833 3.41667 29.9198 3.41667 20.5C3.41667 11.0803 11.0803 3.41667 20.5 3.41667ZM20.5 0C9.17888 0 0 9.17888 0 20.5C0 31.8211 9.17888 41 20.5 41C31.8211 41 41 31.8211 41 20.5C41 9.17888 31.8211 0 20.5 0ZM20.5 10.25C14.8403 10.25 10.25 14.8386 10.25 20.5C10.25 25.0288 13.1866 28.8708 17.261 30.2255C17.7735 30.3212 17.9375 30.0035 17.9375 29.7318V27.8236C15.0863 28.4438 14.4918 26.6158 14.4918 26.6158C14.0271 25.432 13.354 25.1159 13.354 25.1159C12.4247 24.4787 13.4241 24.4924 13.4241 24.4924C14.4542 24.5641 14.9958 25.5498 14.9958 25.5498C15.9097 27.1164 17.3925 26.6637 17.9785 26.4023C18.0708 25.7395 18.3355 25.2885 18.6294 25.0322C16.3522 24.7725 13.9605 23.8927 13.9605 19.967C13.9605 18.848 14.3603 17.9341 15.0163 17.2166C14.9103 16.9552 14.5584 15.9114 15.1153 14.5003C15.1153 14.5003 15.9763 14.2253 17.9341 15.551C18.7524 15.3237 19.6287 15.211 20.5 15.2059C21.3713 15.2093 22.2476 15.3237 23.0676 15.551C25.0254 14.2253 25.883 14.5003 25.883 14.5003C26.4416 15.9114 26.0897 16.9552 25.9855 17.2132C26.6432 17.9307 27.0395 18.8446 27.0395 19.9636C27.0395 23.9013 24.641 24.7674 22.3587 25.0203C22.7277 25.338 23.0625 25.9615 23.0625 26.9182V29.7301C23.0625 30.0035 23.2265 30.3229 23.7458 30.2221C27.8168 28.8674 30.75 25.0271 30.75 20.5C30.75 14.8386 26.1597 10.25 20.5 10.25Z" fill="#F6FBF9"/>
            </svg>

        );
    case "Arrow": 
        return (
            <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="13.754" height="8.008" viewBox="0 0 13.754 8.008">
                <g id="Grupo_54" data-name="Grupo 54" transform="translate(-8608.687 671.021)">
                    <g id="Retângulo_114" data-name="Retângulo 114" transform="translate(8614.433 -664.176) rotate(-45)" fill="#fff" stroke="#b3f700" strokeWidth="1">
                        <rect width="9.68" height="1.645" rx="0.823" stroke="none"/>
                        <rect x="0.5" y="0.5" width="8.68" height="0.645" rx="0.323" fill="none"/>
                    </g>
                    <g id="Retângulo_115" data-name="Retângulo 115" transform="translate(8609.85 -671.021) rotate(45)" fill="#fff" stroke="#b3f700" strokeWidth="1">
                        <rect width="9.68" height="1.645" rx="0.823" stroke="none"/>
                        <rect x="0.5" y="0.5" width="8.68" height="0.645" rx="0.323" fill="none"/>
                    </g>
                </g>
          </svg>
        );
    case "DesignIcon":
        return (
            <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.52632 0H2.05263C0.889474 0 0 0.855263 0 1.97368V29.6053C0 30.7237 0.889474 31.5789 2.05263 31.5789H7.52632C8.68947 31.5789 9.57895 30.7237 9.57895 29.6053V1.97368C9.57895 0.855263 8.68947 0 7.52632 0ZM8.21053 29.6053C8.21053 30 7.93684 30.2632 7.52632 30.2632H2.05263C1.64211 30.2632 1.36842 30 1.36842 29.6053V28.2895H4.10526V26.9737H1.36842V25.6579H2.73684V24.3421H1.36842V23.0263H2.73684V21.7105H1.36842V20.3947H4.10526V19.0789H1.36842V17.7632H2.73684V16.4474H1.36842V15.1316H2.73684V13.8158H1.36842V12.5H4.10526V11.1842H1.36842V9.86842H2.73684V8.55263H1.36842V7.23684H2.73684V5.92105H1.36842V4.60526H4.10526V3.28947H1.36842V1.97368C1.36842 1.57895 1.64211 1.31579 2.05263 1.31579H7.52632C7.93684 1.31579 8.21053 1.57895 8.21053 1.97368V29.6053Z" fill="#A6ACB1"/>
                <path d="M23.9474 0H18.4737C17.3105 0 16.4211 0.855263 16.4211 1.97368V24.4737L19.3632 30.1974C19.9789 31.3816 20.8 31.5132 21.2105 31.5132C21.6211 31.5132 22.4421 31.3158 23.0579 30.1974L26 24.4737V1.97368C26 0.855263 25.1105 0 23.9474 0ZM19.7053 27.8947L17.9947 24.5395C18.7474 23.5526 19.9789 23.0263 21.2105 23.0263C22.5105 23.0263 23.6737 23.6184 24.4263 24.5395L22.7158 27.8947C21.7579 27.5658 20.6632 27.5658 19.7053 27.8947ZM18.4737 1.31579H23.9474C24.3579 1.31579 24.6316 1.57895 24.6316 1.97368V22.8947C23.8789 22.3026 22.9211 21.9079 21.8947 21.7763V7.89474H20.5263V21.7763C19.5 21.9079 18.5421 22.3026 17.7895 22.8947V1.97368C17.7895 1.57895 18.0632 1.31579 18.4737 1.31579Z" fill="#A6ACB1"/>
                <path d="M24.6316 7.23685H17.7895V8.55264H24.6316V7.23685Z" fill="#13AA52"/>
                <path d="M24.6316 4.60526H17.7895V5.92104H24.6316V4.60526Z" fill="#13AA52"/>
            </svg>
        );
    case "ComputerIcon":
        return (
            <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.7826 24.8H22.6786C23.1572 27.4408 24.7482 29.2576 26.2185 30.4H28.1522C28.597 30.4 28.9565 30.7576 28.9565 31.2C28.9565 31.6424 28.597 32 28.1522 32H8.84783C8.40302 32 8.04348 31.6424 8.04348 31.2C8.04348 30.7576 8.40302 30.4 8.84783 30.4H10.7807C12.2502 29.2576 13.8428 27.4408 14.3206 24.8H3.21739C1.44059 24.8 0 23.3672 0 21.6V3.2C0 1.4328 1.44059 0 3.21739 0H33.7826C35.5594 0 37 1.4328 37 3.2V21.6C37 23.3672 35.5594 24.8 33.7826 24.8ZM13.1889 30.4H23.8103C22.5274 29.0544 21.3852 27.2192 21.0281 24.8H15.9711C15.614 27.2192 14.4718 29.0544 13.1889 30.4ZM35.3913 3.2C35.3913 2.3168 34.6706 1.6 33.7826 1.6H3.21739C2.32939 1.6 1.6087 2.3168 1.6087 3.2V18.4H35.3913V3.2ZM35.3913 20H1.6087V21.6C1.6087 22.4832 2.32939 23.2 3.21739 23.2H14.4783H22.5217H33.7826C34.6706 23.2 35.3913 22.4832 35.3913 21.6V20ZM18.5 22.4C18.0552 22.4 17.6957 22.0424 17.6957 21.6C17.6957 21.1576 18.0552 20.8 18.5 20.8C18.9448 20.8 19.3043 21.1576 19.3043 21.6C19.3043 22.0424 18.9448 22.4 18.5 22.4Z" fill="#A6ACB1"/>
            </svg>
        );
    case "CellPhoneIcon":
        return (
            <svg id="CellPhoneSVG" xmlns="http://www.w3.org/2000/svg" width="18.409" height="32" viewBox="0 0 18.409 32">
                <path id="Caminho_1" data-name="Caminho 1" d="M5.917,3.84h6.574a.64.64,0,1,0,0-1.28H5.917a.64.64,0,1,0,0,1.28Z" fill="#a6acb1"/>
                <path id="Caminho_2" data-name="Caminho 2" d="M8.547,29.44H9.862a.64.64,0,1,0,0-1.28H8.547a.64.64,0,1,0,0,1.28Z" fill="#a6acb1"/>
                <path id="Caminho_3" data-name="Caminho 3" d="M15.121,32H3.287A3.247,3.247,0,0,1,0,28.8V3.2A3.247,3.247,0,0,1,3.287,0H15.121a3.247,3.247,0,0,1,3.287,3.2V28.8A3.247,3.247,0,0,1,15.121,32ZM3.287,1.28A1.949,1.949,0,0,0,1.315,3.2V28.8a1.949,1.949,0,0,0,1.972,1.92H15.121a1.949,1.949,0,0,0,1.972-1.92V3.2a1.949,1.949,0,0,0-1.972-1.92Z" fill="#a6acb1"/>
            </svg>
        );
    default:
        return null;
    }
}
export default SvgFiles