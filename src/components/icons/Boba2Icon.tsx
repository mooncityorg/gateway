import * as React from 'react'
import { useTheme } from '@mui/material'

const Boba2Icon = ({ selected = true }) => {
  const theme = useTheme()

  const recColor = theme.palette.mode === 'light' ? '#031313' : '#ffffff'

  if (!selected) {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="30"
          height="30"
          rx="8"
          fill={recColor}
          fillOpacity="0.15"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.92819 4C9.26602 4.09607 9.51315 4.28822 9.58244 4.6468C9.63608 4.92885 9.68338 5.21219 9.73066 5.49543L9.73066 5.49545L9.73067 5.49548L9.73067 5.4955L9.73067 5.49552L9.73068 5.49555L9.73068 5.49557L9.73069 5.49559C9.75128 5.61899 9.77188 5.74237 9.79299 5.86561L10.4273 9.56728L11.0982 13.4711C11.1824 13.9617 11.2661 14.4524 11.3497 14.943L11.3498 14.943L11.3498 14.943L11.3498 14.9431L11.3498 14.9431L11.3498 14.9431L11.3498 14.9431L11.3498 14.9432C11.4988 15.8171 11.6479 16.6909 11.7995 17.5642C11.883 18.0449 11.6124 18.462 11.1509 18.5424C10.7143 18.6184 10.3131 18.3269 10.2331 17.8642C9.95457 16.2539 9.67741 14.643 9.40163 13.0313C9.14786 11.5556 8.89379 10.0801 8.63942 8.60476C8.43006 7.38565 8.22129 6.16645 8.01312 4.94714C7.93966 4.51585 8.17966 4.14899 8.6079 4.02572C8.62576 4.01864 8.64297 4.01003 8.65935 4H8.92819ZM11.5733 15.1641C11.5016 14.7473 11.4341 14.3556 11.3651 13.9642C11.3651 13.9557 11.3637 13.947 11.3624 13.9384L11.3618 13.9347C11.305 13.5856 11.305 13.5856 11.6087 13.4082C15.1735 11.3274 19.8478 13.2962 20.8191 17.2878C21.6482 20.6956 19.5499 24.0615 16.1076 24.8458C12.6921 25.6238 9.23789 23.3763 8.59642 19.9531C8.29576 18.3514 8.58779 16.8583 9.44844 15.4731C9.4737 15.4322 9.50091 15.3923 9.53404 15.3438L9.53405 15.3437C9.55122 15.3186 9.56998 15.2911 9.59089 15.2599C9.60756 15.3534 9.62376 15.4429 9.63951 15.53C9.66899 15.6929 9.69686 15.847 9.72322 16.0013C9.75455 16.1847 9.78529 16.3682 9.81602 16.5517L9.81603 16.5518C9.87778 16.9204 9.93953 17.289 10.006 17.6567C10.0236 17.7546 10.006 17.8424 9.98731 17.932C9.49751 20.4228 11.2048 22.9574 13.7201 23.4729C16.3612 24.0136 18.8786 22.399 19.4687 19.7855C20.0456 17.2314 18.3276 14.6028 15.7412 14.0917C14.2379 13.796 12.8863 14.1307 11.6836 15.0728L11.6576 15.0947C11.6354 15.1136 11.6098 15.1354 11.5733 15.1641ZM18.2113 17.3059C18.0554 17.146 17.8426 17.0534 17.6187 17.048C17.3934 17.0473 17.1768 17.1343 17.0151 17.2904C16.8535 17.4465 16.7598 17.6592 16.7539 17.8831C16.7444 18.3487 17.1349 18.7428 17.6068 18.7457C17.8308 18.7434 18.0449 18.6538 18.203 18.4961C18.3611 18.3384 18.4505 18.1253 18.4521 17.9027C18.4536 17.6801 18.3672 17.4657 18.2113 17.3059ZM15.2577 21.5698C15.2567 21.7952 15.1656 22.0111 15.0045 22.1698C14.8433 22.3285 14.6254 22.4171 14.3985 22.4161C14.1717 22.4151 13.9546 22.3245 13.7949 22.1644C13.6352 22.0042 13.5461 21.7876 13.5471 21.5621C13.5471 21.0974 13.9486 20.703 14.4137 20.7134C14.8824 20.7237 15.2619 21.1089 15.2577 21.5698ZM15.5467 15.1215C15.0679 15.12 14.6958 15.4825 14.6926 15.9554C14.6901 16.0662 14.7098 16.1763 14.7506 16.2794C14.7913 16.3825 14.8524 16.4765 14.9301 16.5559C15.0078 16.6353 15.1006 16.6986 15.2031 16.742C15.3057 16.7853 15.4159 16.808 15.5273 16.8086C16.0049 16.8112 16.3865 16.445 16.3915 15.9809C16.3944 15.8689 16.3747 15.7574 16.3335 15.6532C16.2923 15.5489 16.2305 15.4539 16.1518 15.3737C16.073 15.2936 15.9789 15.23 15.8749 15.1867C15.771 15.1434 15.6594 15.1212 15.5467 15.1215ZM17.0656 21.4201C16.9541 21.4218 16.8434 21.4015 16.7399 21.3602C16.6364 21.3189 16.5422 21.2575 16.4629 21.1796C16.3835 21.1017 16.3206 21.0089 16.2777 20.9065C16.2349 20.8042 16.213 20.6944 16.2133 20.5835C16.211 20.4713 16.2312 20.3597 16.2727 20.2553C16.3143 20.1509 16.3763 20.0558 16.4553 19.9755C16.5342 19.8952 16.6285 19.8314 16.7325 19.7877C16.8366 19.744 16.9484 19.7214 17.0613 19.7212C17.1742 19.721 17.2861 19.7431 17.3903 19.7863C17.4946 19.8296 17.5891 19.893 17.6684 19.973C17.7477 20.0529 17.8101 20.1478 17.8521 20.252C17.8941 20.3562 17.9148 20.4677 17.9129 20.58C17.9142 20.6908 17.8931 20.8008 17.851 20.9035C17.8088 21.0061 17.7464 21.0993 17.6675 21.1776C17.5885 21.2559 17.4946 21.3177 17.3912 21.3594C17.2879 21.401 17.1772 21.4217 17.0656 21.4201ZM12.5358 17.726C12.6388 17.7685 12.7494 17.79 12.8609 17.7895C13.3388 17.7927 13.7159 17.4273 13.7186 16.9588C13.7215 16.8467 13.7019 16.7352 13.661 16.6308C13.6201 16.5263 13.5587 16.431 13.4804 16.3503C13.402 16.2697 13.3083 16.2053 13.2047 16.1611C13.1012 16.1168 12.9897 16.0934 12.877 16.0924C12.7642 16.0913 12.6523 16.1126 12.5479 16.1549C12.4435 16.1972 12.3486 16.2598 12.2688 16.3389C12.1889 16.4181 12.1257 16.5123 12.0828 16.6159C12.04 16.7196 12.0183 16.8307 12.019 16.9428C12.0172 17.0537 12.0376 17.1638 12.0791 17.2667C12.1206 17.3697 12.1824 17.4633 12.2608 17.5422C12.3393 17.621 12.4327 17.6835 12.5358 17.726ZM14.1222 18.7596C14.1209 18.6487 14.142 18.5386 14.1843 18.4359C14.2266 18.3333 14.2892 18.2401 14.3685 18.162C14.4478 18.0838 14.542 18.0223 14.6457 17.9812C14.7493 17.94 14.8602 17.9199 14.9718 17.9222C15.0846 17.9213 15.1965 17.9428 15.3008 17.9856C15.4051 18.0283 15.4998 18.0913 15.5792 18.171C15.6587 18.2506 15.7213 18.3452 15.7634 18.4492C15.8055 18.5533 15.8263 18.6647 15.8244 18.7768C15.8198 19.0007 15.7268 19.2137 15.5654 19.3699C15.404 19.5262 15.1873 19.613 14.962 19.6116C14.8505 19.6109 14.7402 19.5883 14.6375 19.545C14.5348 19.5017 14.4417 19.4387 14.3636 19.3595C14.2855 19.2803 14.224 19.1865 14.1826 19.0835C14.1411 18.9806 14.1206 18.8705 14.1222 18.7596ZM11.7262 20.2288C11.8866 20.3857 12.1032 20.4728 12.3282 20.4709C12.4396 20.47 12.5498 20.4473 12.6524 20.4041C12.7549 20.3608 12.848 20.2979 12.9261 20.219C13.0042 20.14 13.066 20.0465 13.1077 19.9439C13.1495 19.8412 13.1706 19.7313 13.1697 19.6206C13.1687 19.5098 13.1459 19.4003 13.1024 19.2984C13.0589 19.1964 12.9956 19.1039 12.9162 19.0263C12.8368 18.9486 12.7427 18.8872 12.6394 18.8457C12.5361 18.8041 12.4256 18.7832 12.3142 18.7841C12.0892 18.786 11.8741 18.8766 11.7163 19.0361C11.5585 19.1955 11.4709 19.4108 11.4728 19.6345C11.4746 19.8582 11.5658 20.0719 11.7262 20.2288Z"
          fill="#F9F9FA"
        />
      </svg>
    )
  }

  if (theme.palette.mode === 'dark') {
    return (
      <svg
        width="15"
        height="20"
        viewBox="0 0 15 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.62461 8.36303C3.57086 8.05523 3.51759 7.74823 3.46477 7.44206C3.42255 7.19777 3.39114 6.94859 3.336 6.7057C3.30599 6.57308 3.34682 6.50817 3.4564 6.44047C4.52133 5.77722 5.73815 5.39724 6.99127 5.33662C10.1548 5.1747 13.1062 7.1018 14.2153 10.0629C15.8185 14.3377 13.2147 18.9921 8.73097 19.8666C4.78743 20.6344 0.90252 18.0212 0.142778 14.0784C-0.222261 12.1837 0.113814 10.414 1.12413 8.7689C1.17229 8.69038 1.22568 8.61535 1.30141 8.50158C1.34992 8.77344 1.39354 9.00761 1.43368 9.24247C1.54954 9.91671 1.65947 10.5917 1.78266 11.2666C1.83292 11.5458 1.73241 11.8058 1.70763 12.0748C1.5621 13.6617 1.97774 15.0831 3.01004 16.2951C4.2793 17.786 5.92058 18.4526 7.87072 18.2993C10.4557 18.0959 12.6019 16.0397 12.96 13.4635C13.3788 10.4576 11.385 7.65284 8.41269 7.10145C6.70057 6.78387 5.15177 7.18799 3.7813 8.26462C3.74641 8.29323 3.70976 8.32359 3.67277 8.35186C3.65727 8.35767 3.64108 8.36143 3.62461 8.36303Z"
          fill="#CBFE00"
        />
        <path
          d="M4.49311 14.653C4.36213 14.652 4.23264 14.6251 4.11205 14.574C3.99146 14.5228 3.88213 14.4485 3.7903 14.355C3.69848 14.2616 3.62597 14.151 3.57692 14.0296C3.52787 13.9081 3.50324 13.7782 3.50444 13.6472C3.51107 13.0888 3.96509 12.6554 4.5322 12.6617C4.79341 12.6677 5.04197 12.7754 5.22499 12.9619C5.40801 13.1483 5.51104 13.3989 5.51215 13.6601C5.5104 14.2192 5.06021 14.6568 4.49311 14.653Z"
          fill="#1CD6D1"
        />
        <path
          d="M7.94723 15.9371C7.94778 16.1355 7.88943 16.3296 7.77956 16.4948C7.66969 16.66 7.51326 16.7888 7.33009 16.865C7.14692 16.9412 6.94525 16.9613 6.75064 16.9228C6.55603 16.8842 6.37725 16.7888 6.23694 16.6485C6.09664 16.5083 6.00113 16.3295 5.96252 16.1349C5.92391 15.9403 5.94394 15.7387 6.02006 15.5555C6.09619 15.3723 6.22499 15.2158 6.39014 15.1059C6.55528 14.9959 6.74935 14.9375 6.94774 14.938C7.21231 14.9395 7.46563 15.0452 7.65274 15.2322C7.83986 15.4193 7.94567 15.6726 7.94723 15.9371Z"
          fill="#1CD6D1"
        />
        <path
          d="M11.7057 11.6354C11.7021 11.897 11.5954 12.1467 11.4089 12.3301C11.2224 12.5136 10.971 12.6161 10.7093 12.6153C10.5762 12.6171 10.4441 12.5922 10.3206 12.5423C10.1972 12.4924 10.085 12.4184 9.99045 12.3246C9.89594 12.2309 9.82105 12.1192 9.77017 11.9962C9.71929 11.8731 9.69343 11.7412 9.6941 11.6081C9.69478 11.4749 9.72197 11.3433 9.77409 11.2208C9.82621 11.0982 9.90221 10.9873 9.99767 10.8945C10.0931 10.8017 10.2061 10.7289 10.33 10.6802C10.454 10.6315 10.5863 10.608 10.7194 10.6111C11.2785 10.6153 11.7137 11.069 11.7057 11.6354Z"
          fill="#1CD6D1"
        />
        <path
          d="M7.62252 11.6393C7.7535 11.6392 7.88321 11.665 8.00421 11.7151C8.12521 11.7653 8.23512 11.8388 8.32762 11.9316C8.42013 12.0243 8.49341 12.1344 8.54327 12.2555C8.59313 12.3766 8.61859 12.5064 8.61817 12.6374C8.61817 12.9037 8.51239 13.1591 8.3241 13.3474C8.13581 13.5357 7.88043 13.6414 7.61414 13.6414C7.34786 13.6414 7.09248 13.5357 6.90418 13.3474C6.71589 13.1591 6.61011 12.9037 6.61011 12.6374C6.60977 12.505 6.63583 12.3739 6.68676 12.2517C6.7377 12.1295 6.81249 12.0187 6.90676 11.9258C7.00103 11.8328 7.11288 11.7596 7.23578 11.7105C7.35868 11.6613 7.49016 11.6371 7.62252 11.6393Z"
          fill="#1CD6D1"
        />
        <path
          d="M8.27669 10.3299C7.73437 10.3299 7.28348 9.88704 7.2772 9.35274C7.27199 9.15311 7.32647 8.95646 7.43368 8.78797C7.54088 8.61948 7.69593 8.48681 7.87897 8.40696C8.06201 8.3271 8.26472 8.30368 8.46115 8.3397C8.65758 8.37572 8.83879 8.46954 8.98159 8.60914C9.12439 8.74875 9.22228 8.92779 9.26272 9.12336C9.30317 9.31893 9.28434 9.52211 9.20864 9.70691C9.13294 9.89171 9.00381 10.0497 8.83778 10.1607C8.67176 10.2717 8.47639 10.3306 8.27669 10.3299Z"
          fill="#1CD6D1"
        />
        <path
          d="M10.0608 15.7732C9.92992 15.7739 9.80018 15.7485 9.67924 15.6984C9.55831 15.6482 9.44863 15.5744 9.35667 15.4812C9.2647 15.3881 9.1923 15.2774 9.14374 15.1558C9.09518 15.0343 9.07144 14.9042 9.07391 14.7733C9.0765 14.5088 9.18406 14.2561 9.37295 14.0709C9.56183 13.8857 9.81655 13.7831 10.0811 13.7857C10.3456 13.7883 10.5983 13.8959 10.7835 14.0847C10.9687 14.2736 11.0713 14.5283 11.0687 14.7929C11.0656 15.3425 10.621 15.7732 10.0608 15.7732Z"
          fill="#1CD6D1"
        />
        <path
          d="M5.14372 11.4832C5.01284 11.4847 4.88299 11.46 4.76182 11.4105C4.64066 11.361 4.53065 11.2877 4.43829 11.1949C4.34593 11.1022 4.2731 10.9918 4.22409 10.8705C4.17508 10.7491 4.15089 10.6191 4.15295 10.4883C4.15208 10.3574 4.17711 10.2276 4.22659 10.1064C4.27607 9.98515 4.34903 9.87493 4.44128 9.78204C4.53353 9.68914 4.64323 9.61541 4.76409 9.56508C4.88494 9.51475 5.01455 9.48881 5.14547 9.48877C5.27782 9.4889 5.40884 9.5152 5.53099 9.56616C5.65314 9.61711 5.76401 9.69172 5.85722 9.78568C5.95044 9.87964 6.02416 9.9911 6.07413 10.1137C6.12411 10.2362 6.14937 10.3674 6.14845 10.4998C6.14759 10.6305 6.12086 10.7597 6.0698 10.88C6.01874 11.0004 5.94436 11.1094 5.85095 11.2008C5.75755 11.2922 5.64696 11.3643 5.52558 11.4127C5.40419 11.4612 5.27441 11.4852 5.14372 11.4832Z"
          fill="#1CD6D1"
        />
        <rect
          x="0.132324"
          y="0.321289"
          width="1.89345"
          height="12.3559"
          rx="0.946725"
          transform="rotate(-9.76137 0.132324 0.321289)"
          fill="#CBFE00"
        />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="none"
    >
      <path
        d="M3.62461 8.36303C3.57086 8.05523 3.51759 7.74823 3.46477 7.44206C3.42255 7.19777 3.39114 6.94859 3.336 6.7057C3.30599 6.57308 3.34682 6.50817 3.4564 6.44047C4.52133 5.77722 5.73815 5.39724 6.99127 5.33662C10.1548 5.1747 13.1062 7.1018 14.2153 10.0629C15.8185 14.3377 13.2147 18.9921 8.73097 19.8666C4.78743 20.6344 0.90252 18.0212 0.142778 14.0784C-0.222261 12.1837 0.113814 10.414 1.12413 8.7689C1.17229 8.69038 1.22568 8.61535 1.30141 8.50158C1.34992 8.77344 1.39354 9.00761 1.43368 9.24247C1.54954 9.91671 1.65947 10.5917 1.78266 11.2666C1.83292 11.5458 1.73241 11.8058 1.70763 12.0748C1.5621 13.6617 1.97774 15.0831 3.01004 16.2951C4.2793 17.786 5.92058 18.4526 7.87072 18.2993C10.4557 18.0959 12.6019 16.0397 12.96 13.4635C13.3788 10.4576 11.385 7.65284 8.41269 7.10145C6.70057 6.78387 5.15177 7.18799 3.7813 8.26462C3.74641 8.29323 3.70976 8.32359 3.67277 8.35186C3.65727 8.35767 3.64108 8.36143 3.62461 8.36303Z"
        fill="#1cd6d1"
      />
      <path
        d="M4.49311 14.653C4.36213 14.652 4.23264 14.6251 4.11205 14.574C3.99146 14.5228 3.88213 14.4485 3.7903 14.355C3.69848 14.2616 3.62597 14.151 3.57692 14.0296C3.52787 13.9081 3.50324 13.7782 3.50444 13.6472C3.51107 13.0888 3.96509 12.6554 4.5322 12.6617C4.79341 12.6677 5.04197 12.7754 5.22499 12.9619C5.40801 13.1483 5.51104 13.3989 5.51215 13.6601C5.5104 14.2192 5.06021 14.6568 4.49311 14.653Z"
        fill="#1cd6d1"
      />
      <path
        d="M7.94723 15.9371C7.94778 16.1355 7.88943 16.3296 7.77956 16.4948C7.66969 16.66 7.51326 16.7888 7.33009 16.865C7.14692 16.9412 6.94525 16.9613 6.75064 16.9228C6.55603 16.8842 6.37725 16.7888 6.23694 16.6485C6.09664 16.5083 6.00113 16.3295 5.96252 16.1349C5.92391 15.9403 5.94394 15.7387 6.02006 15.5555C6.09619 15.3723 6.22499 15.2158 6.39014 15.1059C6.55528 14.9959 6.74935 14.9375 6.94774 14.938C7.21231 14.9395 7.46563 15.0452 7.65274 15.2322C7.83986 15.4193 7.94567 15.6726 7.94723 15.9371Z"
        fill="#1cd6d1"
      />
      <path
        d="M11.7057 11.6354C11.7021 11.897 11.5954 12.1467 11.4089 12.3301C11.2224 12.5136 10.971 12.6161 10.7093 12.6153C10.5762 12.6171 10.4441 12.5922 10.3206 12.5423C10.1972 12.4924 10.085 12.4184 9.99045 12.3246C9.89594 12.2309 9.82105 12.1192 9.77017 11.9962C9.71929 11.8731 9.69343 11.7412 9.6941 11.6081C9.69478 11.4749 9.72197 11.3433 9.77409 11.2208C9.82621 11.0982 9.90221 10.9873 9.99767 10.8945C10.0931 10.8017 10.2061 10.7289 10.33 10.6802C10.454 10.6315 10.5863 10.608 10.7194 10.6111C11.2785 10.6153 11.7137 11.069 11.7057 11.6354Z"
        fill="#1cd6d1"
      />
      <path
        d="M7.62252 11.6393C7.7535 11.6392 7.88321 11.665 8.00421 11.7151C8.12521 11.7653 8.23512 11.8388 8.32762 11.9316C8.42013 12.0243 8.49341 12.1344 8.54327 12.2555C8.59313 12.3766 8.61859 12.5064 8.61817 12.6374C8.61817 12.9037 8.51239 13.1591 8.3241 13.3474C8.13581 13.5357 7.88043 13.6414 7.61414 13.6414C7.34786 13.6414 7.09248 13.5357 6.90418 13.3474C6.71589 13.1591 6.61011 12.9037 6.61011 12.6374C6.60977 12.505 6.63583 12.3739 6.68676 12.2517C6.7377 12.1295 6.81249 12.0187 6.90676 11.9258C7.00103 11.8328 7.11288 11.7596 7.23578 11.7105C7.35868 11.6613 7.49016 11.6371 7.62252 11.6393Z"
        fill="#1cd6d1"
      />
      <path
        d="M8.27669 10.3299C7.73437 10.3299 7.28348 9.88704 7.2772 9.35274C7.27199 9.15311 7.32647 8.95646 7.43368 8.78797C7.54088 8.61948 7.69593 8.48681 7.87897 8.40696C8.06201 8.3271 8.26472 8.30368 8.46115 8.3397C8.65758 8.37572 8.83879 8.46954 8.98159 8.60914C9.12439 8.74875 9.22228 8.92779 9.26272 9.12336C9.30317 9.31893 9.28434 9.52211 9.20864 9.70691C9.13294 9.89171 9.00381 10.0497 8.83778 10.1607C8.67176 10.2717 8.47639 10.3306 8.27669 10.3299Z"
        fill="#1cd6d1"
      />
      <path
        d="M10.0608 15.7732C9.92992 15.7739 9.80018 15.7485 9.67924 15.6984C9.55831 15.6482 9.44863 15.5744 9.35667 15.4812C9.2647 15.3881 9.1923 15.2774 9.14374 15.1558C9.09518 15.0343 9.07144 14.9042 9.07391 14.7733C9.0765 14.5088 9.18406 14.2561 9.37295 14.0709C9.56183 13.8857 9.81655 13.7831 10.0811 13.7857C10.3456 13.7883 10.5983 13.8959 10.7835 14.0847C10.9687 14.2736 11.0713 14.5283 11.0687 14.7929C11.0656 15.3425 10.621 15.7732 10.0608 15.7732Z"
        fill="#1cd6d1"
      />
      <path
        d="M5.14372 11.4832C5.01284 11.4847 4.88299 11.46 4.76182 11.4105C4.64066 11.361 4.53065 11.2877 4.43829 11.1949C4.34593 11.1022 4.2731 10.9918 4.22409 10.8705C4.17508 10.7491 4.15089 10.6191 4.15295 10.4883C4.15208 10.3574 4.17711 10.2276 4.22659 10.1064C4.27607 9.98515 4.34903 9.87493 4.44128 9.78204C4.53353 9.68914 4.64323 9.61541 4.76409 9.56508C4.88494 9.51475 5.01455 9.48881 5.14547 9.48877C5.27782 9.4889 5.40884 9.5152 5.53099 9.56616C5.65314 9.61711 5.76401 9.69172 5.85722 9.78568C5.95044 9.87964 6.02416 9.9911 6.07413 10.1137C6.12411 10.2362 6.14937 10.3674 6.14845 10.4998C6.14759 10.6305 6.12086 10.7597 6.0698 10.88C6.01874 11.0004 5.94436 11.1094 5.85095 11.2008C5.75755 11.2922 5.64696 11.3643 5.52558 11.4127C5.40419 11.4612 5.27441 11.4852 5.14372 11.4832Z"
        fill="#1cd6d1"
      />
      <rect
        x="0.132324"
        y="0.321289"
        width="1.89345"
        height="12.3559"
        rx="0.946725"
        transform="rotate(-9.76137 0.132324 0.321289)"
        fill="#1cd6d1"
      />
    </svg>
  )
}

export default Boba2Icon
