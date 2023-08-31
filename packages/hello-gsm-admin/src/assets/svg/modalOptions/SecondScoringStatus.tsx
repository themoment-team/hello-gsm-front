const SecondScoringStatus = ({ isActive }: { isActive: boolean }) => {
  return (
    <>
      {isActive ? (
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="200" rx="10" fill="#D6E8FF" />
          <path
            d="M29.125 168.531L33.125 164.672C33.5573 164.24 33.8906 163.885 34.125 163.609C34.3646 163.328 34.5469 163.052 34.6719 162.781C34.7969 162.505 34.8594 162.214 34.8594 161.906C34.8594 161.562 34.7734 161.26 34.6016 161C34.4349 160.74 34.2031 160.539 33.9062 160.398C33.6146 160.258 33.2865 160.188 32.9219 160.188C32.5365 160.188 32.1979 160.266 31.9062 160.422C31.6198 160.573 31.3984 160.789 31.2422 161.07C31.0911 161.352 31.0156 161.682 31.0156 162.062H29.0781C29.0781 161.359 29.2396 160.742 29.5625 160.211C29.8906 159.674 30.3464 159.26 30.9297 158.969C31.5182 158.677 32.1875 158.531 32.9375 158.531C33.6979 158.531 34.3698 158.672 34.9531 158.953C35.5417 159.234 35.9974 159.625 36.3203 160.125C36.6484 160.62 36.8125 161.182 36.8125 161.812C36.8073 162.25 36.7214 162.672 36.5547 163.078C36.388 163.479 36.1016 163.927 35.6953 164.422C35.2891 164.917 34.7135 165.516 33.9688 166.219L31.9531 168.219V168.297H36.9844V170H29.125V168.531ZM43.2656 161.75C43.2656 162.458 43.3958 163.164 43.6562 163.867C43.9167 164.57 44.2995 165.211 44.8047 165.789C45.3151 166.367 45.9219 166.823 46.625 167.156L45.6562 168.469C44.9115 168.125 44.263 167.625 43.7109 166.969C43.1641 166.312 42.737 165.56 42.4297 164.711C42.112 165.628 41.6615 166.438 41.0781 167.141C40.5 167.839 39.8177 168.365 39.0312 168.719L38.0781 167.375C38.7969 167.052 39.4167 166.591 39.9375 165.992C40.4635 165.393 40.862 164.724 41.1328 163.984C41.4089 163.245 41.5469 162.5 41.5469 161.75V161.016H38.5312V159.625H41.5469V157.562H43.2812V159.625H46.25V161.016H43.2656V161.75ZM47.625 157.266H49.3594V162.859H51.5312V164.312H49.3594V171.391H47.625V157.266ZM67.0625 160.75H69.0312V162.188H67.0625V165.516H65.3281V157.266H67.0625V160.75ZM55.9375 158.578H59.2656V157.156H61V158.578H64.3125V159.969H55.9375V158.578ZM56.6562 162.938C56.6562 162.443 56.8021 162.008 57.0938 161.633C57.3854 161.258 57.7917 160.969 58.3125 160.766C58.8385 160.557 59.4427 160.453 60.125 160.453C60.7969 160.453 61.3932 160.557 61.9141 160.766C62.4401 160.969 62.849 161.258 63.1406 161.633C63.4323 162.008 63.5781 162.443 63.5781 162.938C63.5781 163.432 63.4323 163.867 63.1406 164.242C62.849 164.617 62.4401 164.909 61.9141 165.117C61.3932 165.32 60.7969 165.422 60.125 165.422C59.4427 165.422 58.8385 165.32 58.3125 165.117C57.7917 164.914 57.3854 164.625 57.0938 164.25C56.8021 163.87 56.6562 163.432 56.6562 162.938ZM57.9375 166.078H59.6562V167.297H65.3281V166.078H67.0625V171.219H57.9375V166.078ZM58.3438 162.938C58.3385 163.312 58.4974 163.607 58.8203 163.82C59.1484 164.034 59.5833 164.141 60.125 164.141C60.6667 164.141 61.1016 164.034 61.4297 163.82C61.7578 163.607 61.9219 163.312 61.9219 162.938C61.9219 162.568 61.7578 162.276 61.4297 162.062C61.1016 161.844 60.6667 161.734 60.125 161.734C59.5833 161.734 59.1484 161.844 58.8203 162.062C58.4974 162.276 58.3385 162.568 58.3438 162.938ZM65.3281 169.844V168.641H59.6562V169.844H65.3281ZM77.2656 158.172C77.2656 158.682 77.2188 159.172 77.125 159.641H79.8438V157.281H81.5781V165.672H79.8438V164.031H76.4531V162.625H79.8438V161.031H76.6953C76.2214 162.125 75.4661 163.057 74.4297 163.828C73.3932 164.599 72.1146 165.188 70.5938 165.594L69.9375 164.203C71.0104 163.922 71.9375 163.555 72.7188 163.102C73.5052 162.643 74.1224 162.117 74.5703 161.523C75.0234 160.93 75.2995 160.286 75.3984 159.594H70.7031V158.172H77.2656ZM71.9531 166.266H81.5781V171.344H79.8438V167.641H71.9531V166.266ZM91.2344 158.297C91.8698 158.297 92.4427 158.466 92.9531 158.805C93.4635 159.143 93.8776 159.625 94.1953 160.25H97.5V157.266H99.2188V171.406H97.5V166.062H94.3203C94.013 166.771 93.5911 167.318 93.0547 167.703C92.5182 168.089 91.9115 168.281 91.2344 168.281C90.526 168.281 89.8958 168.078 89.3438 167.672C88.7969 167.26 88.3698 166.677 88.0625 165.922C87.7604 165.167 87.6094 164.286 87.6094 163.281C87.6094 162.281 87.7604 161.406 88.0625 160.656C88.3698 159.901 88.7995 159.32 89.3516 158.914C89.9036 158.503 90.5312 158.297 91.2344 158.297ZM89.2812 163.281C89.2812 163.995 89.362 164.609 89.5234 165.125C89.6849 165.641 89.9115 166.034 90.2031 166.305C90.5 166.576 90.8438 166.714 91.2344 166.719C91.625 166.714 91.9688 166.576 92.2656 166.305C92.5625 166.034 92.7917 165.641 92.9531 165.125C93.1198 164.609 93.2031 163.995 93.2031 163.281C93.2031 162.573 93.1198 161.961 92.9531 161.445C92.7917 160.93 92.5625 160.536 92.2656 160.266C91.9688 159.995 91.625 159.859 91.2344 159.859C90.8438 159.859 90.5 159.997 90.2031 160.273C89.9115 160.544 89.6849 160.938 89.5234 161.453C89.362 161.964 89.2812 162.573 89.2812 163.281ZM94.6875 161.672C94.7917 162.177 94.8438 162.714 94.8438 163.281C94.8438 163.766 94.8047 164.224 94.7266 164.656H97.5V161.672H94.6875ZM114.094 166.859H108.469V171.391H106.75V166.859H101.188V165.484H114.094V166.859ZM102.75 157.828H104.469V159.562H110.781V157.828H112.531V164.016H102.75V157.828ZM110.781 162.609V160.938H104.469V162.609H110.781ZM119.672 165.688C119.672 162.927 120.453 160.432 122.016 158.203H123.891C123.521 158.734 123.169 159.414 122.836 160.242C122.508 161.065 122.242 161.956 122.039 162.914C121.836 163.867 121.734 164.792 121.734 165.688C121.734 166.583 121.836 167.51 122.039 168.469C122.242 169.427 122.508 170.318 122.836 171.141C123.169 171.969 123.521 172.651 123.891 173.188H122.016C121.255 172.094 120.674 170.927 120.273 169.688C119.872 168.448 119.672 167.115 119.672 165.688ZM136.578 167.484H134.828V157.281H136.578V167.484ZM125.062 161.734C125.062 161.062 125.229 160.458 125.562 159.922C125.901 159.385 126.359 158.966 126.938 158.664C127.521 158.357 128.167 158.203 128.875 158.203C129.583 158.203 130.227 158.357 130.805 158.664C131.388 158.966 131.844 159.385 132.172 159.922C132.505 160.458 132.672 161.062 132.672 161.734C132.672 162.417 132.505 163.029 132.172 163.57C131.844 164.107 131.388 164.526 130.805 164.828C130.227 165.13 129.583 165.281 128.875 165.281C128.167 165.281 127.521 165.13 126.938 164.828C126.359 164.526 125.901 164.107 125.562 163.57C125.229 163.029 125.062 162.417 125.062 161.734ZM126.766 161.734C126.766 162.141 126.854 162.497 127.031 162.805C127.214 163.112 127.464 163.349 127.781 163.516C128.104 163.682 128.469 163.766 128.875 163.766C129.271 163.766 129.628 163.682 129.945 163.516C130.263 163.349 130.513 163.112 130.695 162.805C130.878 162.497 130.969 162.141 130.969 161.734C130.969 161.339 130.878 160.987 130.695 160.68C130.513 160.372 130.26 160.135 129.938 159.969C129.62 159.802 129.266 159.719 128.875 159.719C128.474 159.719 128.112 159.802 127.789 159.969C127.466 160.135 127.214 160.372 127.031 160.68C126.854 160.987 126.766 161.339 126.766 161.734ZM127.234 166.453H128.984V169.703H136.969V171.109H127.234V166.453ZM143.828 159.688C143.828 160.271 143.956 160.839 144.211 161.391C144.466 161.938 144.844 162.43 145.344 162.867C145.844 163.299 146.448 163.635 147.156 163.875L146.281 165.219C145.51 164.969 144.844 164.591 144.281 164.086C143.724 163.581 143.286 162.987 142.969 162.305C142.651 163.065 142.198 163.724 141.609 164.281C141.021 164.839 140.318 165.255 139.5 165.531L138.609 164.156C139.339 163.917 139.961 163.565 140.477 163.102C140.997 162.638 141.391 162.112 141.656 161.523C141.927 160.93 142.062 160.323 142.062 159.703V159.516H139.125V158.125H146.75V159.516H143.828V159.688ZM140.844 166.359H150.469V171.391H148.734V167.75H140.844V166.359ZM146.328 160.766H148.734V157.266H150.469V165.688H148.734V162.188H146.328V160.766ZM157.641 159.297C157.635 159.948 157.758 160.565 158.008 161.148C158.263 161.727 158.641 162.237 159.141 162.68C159.641 163.117 160.25 163.448 160.969 163.672L160.031 165.031C159.276 164.76 158.628 164.378 158.086 163.883C157.544 163.388 157.12 162.799 156.812 162.117C156.495 162.904 156.039 163.586 155.445 164.164C154.852 164.737 154.135 165.172 153.297 165.469L152.375 164.062C153.135 163.812 153.779 163.451 154.305 162.977C154.831 162.503 155.224 161.958 155.484 161.344C155.75 160.724 155.885 160.068 155.891 159.375V158.031H157.641V159.297ZM154.719 168.672C154.714 168.104 154.904 167.617 155.289 167.211C155.674 166.799 156.227 166.487 156.945 166.273C157.669 166.06 158.526 165.953 159.516 165.953C160.51 165.953 161.37 166.06 162.094 166.273C162.818 166.487 163.372 166.799 163.758 167.211C164.148 167.617 164.344 168.104 164.344 168.672C164.344 169.24 164.148 169.727 163.758 170.133C163.372 170.539 162.818 170.846 162.094 171.055C161.37 171.268 160.51 171.375 159.516 171.375C158.526 171.375 157.669 171.268 156.945 171.055C156.227 170.846 155.674 170.539 155.289 170.133C154.904 169.727 154.714 169.24 154.719 168.672ZM156.438 168.672C156.432 169.099 156.698 169.43 157.234 169.664C157.771 169.893 158.531 170.01 159.516 170.016C160.505 170.01 161.268 169.893 161.805 169.664C162.341 169.43 162.609 169.099 162.609 168.672C162.609 168.229 162.341 167.891 161.805 167.656C161.273 167.422 160.51 167.302 159.516 167.297C158.526 167.302 157.763 167.422 157.227 167.656C156.695 167.891 156.432 168.229 156.438 168.672ZM159.75 160H162.562V157.266H164.297V165.578H162.562V161.422H159.75V160ZM170.5 165.688C170.5 167.115 170.299 168.448 169.898 169.688C169.497 170.927 168.917 172.094 168.156 173.188H166.281C166.651 172.651 167 171.969 167.328 171.141C167.661 170.318 167.93 169.427 168.133 168.469C168.336 167.51 168.438 166.583 168.438 165.688C168.438 164.792 168.336 163.867 168.133 162.914C167.93 161.956 167.661 161.065 167.328 160.242C167 159.414 166.651 158.734 166.281 158.203H168.156C169.719 160.432 170.5 162.927 170.5 165.688Z"
            fill="#2174D8"
          />
          <path
            d="M52.1704 116.056L82.96 38.6157C83.5448 37.1449 85.1716 36.3814 86.6765 36.8714L145.503 56.0244C147.134 56.5552 147.989 58.3425 147.378 59.945L117.526 138.306C116.953 139.811 115.294 140.595 113.768 140.082L54.0029 120.009C52.3715 119.461 51.5345 117.656 52.1704 116.056Z"
            fill="white"
          />
          <rect
            x="87.3213"
            y="86.2496"
            width="34.9965"
            height="6.49796"
            rx="2"
            transform="rotate(19.66 87.3213 86.2496)"
            fill="#9E9E9E"
          />
          <rect
            width="7.18766"
            height="6.49796"
            rx="2"
            transform="matrix(0.941706 0.336438 0.336438 -0.941706 75.042 88.1708)"
            fill="#9E9E9E"
          />
          <rect
            x="89.6045"
            y="48.7168"
            width="6.90808"
            height="6.49796"
            rx="2"
            transform="rotate(19.6559 89.6045 48.7168)"
            fill="#9E9E9E"
          />
          <rect
            x="82.1855"
            y="65"
            width="6.90808"
            height="6.49796"
            rx="2"
            transform="rotate(19.6559 82.1855 65)"
            fill="#9E9E9E"
          />
          <rect
            width="38.6492"
            height="6.49796"
            rx="2"
            transform="matrix(0.941706 0.336438 0.336438 -0.941706 97.2183 58.3351)"
            fill="#9E9E9E"
          />
          <rect
            x="92.1807"
            y="68.8002"
            width="33.6145"
            height="6.25051"
            rx="2"
            transform="rotate(19.6559 92.1807 68.8002)"
            fill="#9E9E9E"
          />
          <rect
            x="71.1855"
            y="98"
            width="6.90808"
            height="6.49796"
            rx="2"
            transform="rotate(19.6559 71.1855 98)"
            fill="#9E9E9E"
          />
          <rect
            x="82.1816"
            y="101.8"
            width="34.1861"
            height="6.25051"
            rx="2"
            transform="rotate(19.6559 82.1816 101.8)"
            fill="#9E9E9E"
          />
          <path
            d="M110.4 92.5L109.355 96.2304C109.177 96.868 109.656 97.5 110.318 97.5H114C111.2 96.3 110.433 93.6667 110.4 92.5Z"
            fill="#212121"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M112.5 85L142.5 62L148.672 63.899C148.884 63.9645 149.069 64.099 149.197 64.2813L152.319 68.7418C152.437 68.9098 152.5 69.1101 152.5 69.3152V74.5L122 97.5L116.708 95.0946C116.571 95.0323 116.45 94.94 116.354 94.8244L114.158 92.1895C114.054 92.065 113.982 91.9172 113.948 91.7588L112.5 85Z"
            fill="#2174D8"
          />
          <path
            d="M114.158 92.1895C114.054 92.065 113.982 91.9172 113.948 91.7588L112.5 85L110.4 92.5C110.433 93.6667 111.2 96.3 114 97.5H122L116.708 95.0946C116.571 95.0323 116.45 94.94 116.354 94.8244L114.158 92.1895Z"
            fill="#FAFAFA"
          />
        </svg>
      ) : (
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.125 168.531L33.125 164.672C33.5573 164.24 33.8906 163.885 34.125 163.609C34.3646 163.328 34.5469 163.052 34.6719 162.781C34.7969 162.505 34.8594 162.214 34.8594 161.906C34.8594 161.562 34.7734 161.26 34.6016 161C34.4349 160.74 34.2031 160.539 33.9062 160.398C33.6146 160.258 33.2865 160.188 32.9219 160.188C32.5365 160.188 32.1979 160.266 31.9062 160.422C31.6198 160.573 31.3984 160.789 31.2422 161.07C31.0911 161.352 31.0156 161.682 31.0156 162.062H29.0781C29.0781 161.359 29.2396 160.742 29.5625 160.211C29.8906 159.674 30.3464 159.26 30.9297 158.969C31.5182 158.677 32.1875 158.531 32.9375 158.531C33.6979 158.531 34.3698 158.672 34.9531 158.953C35.5417 159.234 35.9974 159.625 36.3203 160.125C36.6484 160.62 36.8125 161.182 36.8125 161.812C36.8073 162.25 36.7214 162.672 36.5547 163.078C36.388 163.479 36.1016 163.927 35.6953 164.422C35.2891 164.917 34.7135 165.516 33.9688 166.219L31.9531 168.219V168.297H36.9844V170H29.125V168.531ZM43.2656 161.75C43.2656 162.458 43.3958 163.164 43.6562 163.867C43.9167 164.57 44.2995 165.211 44.8047 165.789C45.3151 166.367 45.9219 166.823 46.625 167.156L45.6562 168.469C44.9115 168.125 44.263 167.625 43.7109 166.969C43.1641 166.312 42.737 165.56 42.4297 164.711C42.112 165.628 41.6615 166.438 41.0781 167.141C40.5 167.839 39.8177 168.365 39.0312 168.719L38.0781 167.375C38.7969 167.052 39.4167 166.591 39.9375 165.992C40.4635 165.393 40.862 164.724 41.1328 163.984C41.4089 163.245 41.5469 162.5 41.5469 161.75V161.016H38.5312V159.625H41.5469V157.562H43.2812V159.625H46.25V161.016H43.2656V161.75ZM47.625 157.266H49.3594V162.859H51.5312V164.312H49.3594V171.391H47.625V157.266ZM67.0625 160.75H69.0312V162.188H67.0625V165.516H65.3281V157.266H67.0625V160.75ZM55.9375 158.578H59.2656V157.156H61V158.578H64.3125V159.969H55.9375V158.578ZM56.6562 162.938C56.6562 162.443 56.8021 162.008 57.0938 161.633C57.3854 161.258 57.7917 160.969 58.3125 160.766C58.8385 160.557 59.4427 160.453 60.125 160.453C60.7969 160.453 61.3932 160.557 61.9141 160.766C62.4401 160.969 62.849 161.258 63.1406 161.633C63.4323 162.008 63.5781 162.443 63.5781 162.938C63.5781 163.432 63.4323 163.867 63.1406 164.242C62.849 164.617 62.4401 164.909 61.9141 165.117C61.3932 165.32 60.7969 165.422 60.125 165.422C59.4427 165.422 58.8385 165.32 58.3125 165.117C57.7917 164.914 57.3854 164.625 57.0938 164.25C56.8021 163.87 56.6562 163.432 56.6562 162.938ZM57.9375 166.078H59.6562V167.297H65.3281V166.078H67.0625V171.219H57.9375V166.078ZM58.3438 162.938C58.3385 163.312 58.4974 163.607 58.8203 163.82C59.1484 164.034 59.5833 164.141 60.125 164.141C60.6667 164.141 61.1016 164.034 61.4297 163.82C61.7578 163.607 61.9219 163.312 61.9219 162.938C61.9219 162.568 61.7578 162.276 61.4297 162.062C61.1016 161.844 60.6667 161.734 60.125 161.734C59.5833 161.734 59.1484 161.844 58.8203 162.062C58.4974 162.276 58.3385 162.568 58.3438 162.938ZM65.3281 169.844V168.641H59.6562V169.844H65.3281ZM77.2656 158.172C77.2656 158.682 77.2188 159.172 77.125 159.641H79.8438V157.281H81.5781V165.672H79.8438V164.031H76.4531V162.625H79.8438V161.031H76.6953C76.2214 162.125 75.4661 163.057 74.4297 163.828C73.3932 164.599 72.1146 165.188 70.5938 165.594L69.9375 164.203C71.0104 163.922 71.9375 163.555 72.7188 163.102C73.5052 162.643 74.1224 162.117 74.5703 161.523C75.0234 160.93 75.2995 160.286 75.3984 159.594H70.7031V158.172H77.2656ZM71.9531 166.266H81.5781V171.344H79.8438V167.641H71.9531V166.266ZM91.2344 158.297C91.8698 158.297 92.4427 158.466 92.9531 158.805C93.4635 159.143 93.8776 159.625 94.1953 160.25H97.5V157.266H99.2188V171.406H97.5V166.062H94.3203C94.013 166.771 93.5911 167.318 93.0547 167.703C92.5182 168.089 91.9115 168.281 91.2344 168.281C90.526 168.281 89.8958 168.078 89.3438 167.672C88.7969 167.26 88.3698 166.677 88.0625 165.922C87.7604 165.167 87.6094 164.286 87.6094 163.281C87.6094 162.281 87.7604 161.406 88.0625 160.656C88.3698 159.901 88.7995 159.32 89.3516 158.914C89.9036 158.503 90.5312 158.297 91.2344 158.297ZM89.2812 163.281C89.2812 163.995 89.362 164.609 89.5234 165.125C89.6849 165.641 89.9115 166.034 90.2031 166.305C90.5 166.576 90.8438 166.714 91.2344 166.719C91.625 166.714 91.9688 166.576 92.2656 166.305C92.5625 166.034 92.7917 165.641 92.9531 165.125C93.1198 164.609 93.2031 163.995 93.2031 163.281C93.2031 162.573 93.1198 161.961 92.9531 161.445C92.7917 160.93 92.5625 160.536 92.2656 160.266C91.9688 159.995 91.625 159.859 91.2344 159.859C90.8438 159.859 90.5 159.997 90.2031 160.273C89.9115 160.544 89.6849 160.938 89.5234 161.453C89.362 161.964 89.2812 162.573 89.2812 163.281ZM94.6875 161.672C94.7917 162.177 94.8438 162.714 94.8438 163.281C94.8438 163.766 94.8047 164.224 94.7266 164.656H97.5V161.672H94.6875ZM114.094 166.859H108.469V171.391H106.75V166.859H101.188V165.484H114.094V166.859ZM102.75 157.828H104.469V159.562H110.781V157.828H112.531V164.016H102.75V157.828ZM110.781 162.609V160.938H104.469V162.609H110.781ZM119.672 165.688C119.672 162.927 120.453 160.432 122.016 158.203H123.891C123.521 158.734 123.169 159.414 122.836 160.242C122.508 161.065 122.242 161.956 122.039 162.914C121.836 163.867 121.734 164.792 121.734 165.688C121.734 166.583 121.836 167.51 122.039 168.469C122.242 169.427 122.508 170.318 122.836 171.141C123.169 171.969 123.521 172.651 123.891 173.188H122.016C121.255 172.094 120.674 170.927 120.273 169.688C119.872 168.448 119.672 167.115 119.672 165.688ZM136.578 167.484H134.828V157.281H136.578V167.484ZM125.062 161.734C125.062 161.062 125.229 160.458 125.562 159.922C125.901 159.385 126.359 158.966 126.938 158.664C127.521 158.357 128.167 158.203 128.875 158.203C129.583 158.203 130.227 158.357 130.805 158.664C131.388 158.966 131.844 159.385 132.172 159.922C132.505 160.458 132.672 161.062 132.672 161.734C132.672 162.417 132.505 163.029 132.172 163.57C131.844 164.107 131.388 164.526 130.805 164.828C130.227 165.13 129.583 165.281 128.875 165.281C128.167 165.281 127.521 165.13 126.938 164.828C126.359 164.526 125.901 164.107 125.562 163.57C125.229 163.029 125.062 162.417 125.062 161.734ZM126.766 161.734C126.766 162.141 126.854 162.497 127.031 162.805C127.214 163.112 127.464 163.349 127.781 163.516C128.104 163.682 128.469 163.766 128.875 163.766C129.271 163.766 129.628 163.682 129.945 163.516C130.263 163.349 130.513 163.112 130.695 162.805C130.878 162.497 130.969 162.141 130.969 161.734C130.969 161.339 130.878 160.987 130.695 160.68C130.513 160.372 130.26 160.135 129.938 159.969C129.62 159.802 129.266 159.719 128.875 159.719C128.474 159.719 128.112 159.802 127.789 159.969C127.466 160.135 127.214 160.372 127.031 160.68C126.854 160.987 126.766 161.339 126.766 161.734ZM127.234 166.453H128.984V169.703H136.969V171.109H127.234V166.453ZM143.828 159.688C143.828 160.271 143.956 160.839 144.211 161.391C144.466 161.938 144.844 162.43 145.344 162.867C145.844 163.299 146.448 163.635 147.156 163.875L146.281 165.219C145.51 164.969 144.844 164.591 144.281 164.086C143.724 163.581 143.286 162.987 142.969 162.305C142.651 163.065 142.198 163.724 141.609 164.281C141.021 164.839 140.318 165.255 139.5 165.531L138.609 164.156C139.339 163.917 139.961 163.565 140.477 163.102C140.997 162.638 141.391 162.112 141.656 161.523C141.927 160.93 142.062 160.323 142.062 159.703V159.516H139.125V158.125H146.75V159.516H143.828V159.688ZM140.844 166.359H150.469V171.391H148.734V167.75H140.844V166.359ZM146.328 160.766H148.734V157.266H150.469V165.688H148.734V162.188H146.328V160.766ZM157.641 159.297C157.635 159.948 157.758 160.565 158.008 161.148C158.263 161.727 158.641 162.237 159.141 162.68C159.641 163.117 160.25 163.448 160.969 163.672L160.031 165.031C159.276 164.76 158.628 164.378 158.086 163.883C157.544 163.388 157.12 162.799 156.812 162.117C156.495 162.904 156.039 163.586 155.445 164.164C154.852 164.737 154.135 165.172 153.297 165.469L152.375 164.062C153.135 163.812 153.779 163.451 154.305 162.977C154.831 162.503 155.224 161.958 155.484 161.344C155.75 160.724 155.885 160.068 155.891 159.375V158.031H157.641V159.297ZM154.719 168.672C154.714 168.104 154.904 167.617 155.289 167.211C155.674 166.799 156.227 166.487 156.945 166.273C157.669 166.06 158.526 165.953 159.516 165.953C160.51 165.953 161.37 166.06 162.094 166.273C162.818 166.487 163.372 166.799 163.758 167.211C164.148 167.617 164.344 168.104 164.344 168.672C164.344 169.24 164.148 169.727 163.758 170.133C163.372 170.539 162.818 170.846 162.094 171.055C161.37 171.268 160.51 171.375 159.516 171.375C158.526 171.375 157.669 171.268 156.945 171.055C156.227 170.846 155.674 170.539 155.289 170.133C154.904 169.727 154.714 169.24 154.719 168.672ZM156.438 168.672C156.432 169.099 156.698 169.43 157.234 169.664C157.771 169.893 158.531 170.01 159.516 170.016C160.505 170.01 161.268 169.893 161.805 169.664C162.341 169.43 162.609 169.099 162.609 168.672C162.609 168.229 162.341 167.891 161.805 167.656C161.273 167.422 160.51 167.302 159.516 167.297C158.526 167.302 157.763 167.422 157.227 167.656C156.695 167.891 156.432 168.229 156.438 168.672ZM159.75 160H162.562V157.266H164.297V165.578H162.562V161.422H159.75V160ZM170.5 165.688C170.5 167.115 170.299 168.448 169.898 169.688C169.497 170.927 168.917 172.094 168.156 173.188H166.281C166.651 172.651 167 171.969 167.328 171.141C167.661 170.318 167.93 169.427 168.133 168.469C168.336 167.51 168.438 166.583 168.438 165.688C168.438 164.792 168.336 163.867 168.133 162.914C167.93 161.956 167.661 161.065 167.328 160.242C167 159.414 166.651 158.734 166.281 158.203H168.156C169.719 160.432 170.5 162.927 170.5 165.688Z"
            fill="#9E9E9E"
          />
          <path
            d="M52.1704 116.056L82.96 38.6157C83.5448 37.1449 85.1716 36.3814 86.6765 36.8714L145.503 56.0244C147.134 56.5552 147.989 58.3425 147.378 59.945L117.526 138.306C116.953 139.811 115.294 140.595 113.768 140.082L54.0029 120.009C52.3715 119.461 51.5345 117.656 52.1704 116.056Z"
            fill="#F5F5F5"
          />
          <rect
            x="87.3213"
            y="86.2496"
            width="35.9014"
            height="6.49796"
            rx="2"
            transform="rotate(19.66 87.3213 86.2496)"
            fill="#E0E0E0"
          />
          <rect
            width="7.18766"
            height="6.49796"
            rx="2"
            transform="matrix(0.941706 0.336438 0.336438 -0.941706 75.042 88.1708)"
            fill="#E0E0E0"
          />
          <rect
            x="89.605"
            y="48.7167"
            width="6.90808"
            height="6.49796"
            rx="2"
            transform="rotate(19.66 89.605 48.7167)"
            fill="#E0E0E0"
          />
          <rect
            x="82.186"
            y="64.9999"
            width="6.90808"
            height="6.49796"
            rx="2"
            transform="rotate(19.66 82.186 64.9999)"
            fill="#E0E0E0"
          />
          <rect
            width="38.6492"
            height="6.49796"
            rx="2"
            transform="matrix(0.941706 0.336438 0.336438 -0.941706 97.2183 58.3351)"
            fill="#E0E0E0"
          />
          <rect
            x="92.1812"
            y="68.7991"
            width="33.6145"
            height="6.25051"
            rx="2"
            transform="rotate(19.66 92.1812 68.7991)"
            fill="#E0E0E0"
          />
          <rect
            x="71.186"
            y="97.9999"
            width="6.90808"
            height="6.49796"
            rx="2"
            transform="rotate(19.66 71.186 97.9999)"
            fill="#E0E0E0"
          />
          <rect
            x="82.1025"
            y="102"
            width="35.6013"
            height="6.25051"
            rx="2"
            transform="rotate(19.66 82.1025 102)"
            fill="#E0E0E0"
          />
          <path
            d="M110.4 92.5L109.355 96.2304C109.177 96.868 109.656 97.5 110.318 97.5H114C111.2 96.3 110.433 93.6667 110.4 92.5Z"
            fill="#616161"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M112.5 85L142.5 62L148.672 63.899C148.884 63.9645 149.069 64.099 149.197 64.2813L152.319 68.7418C152.437 68.9098 152.5 69.1101 152.5 69.3152V74.5L122 97.5L116.708 95.0946C116.571 95.0323 116.45 94.94 116.354 94.8244L114.158 92.1895C114.054 92.065 113.982 91.9172 113.948 91.7588L112.5 85Z"
            fill="#9E9E9E"
          />
          <path
            d="M114.158 92.1895C114.054 92.065 113.982 91.9172 113.948 91.7588L112.5 85L110.4 92.5C110.433 93.6667 111.2 96.3 114 97.5H122L116.708 95.0946C116.571 95.0323 116.45 94.94 116.354 94.8244L114.158 92.1895Z"
            fill="#FAFAFA"
          />
          <rect
            x="0.5"
            y="0.5"
            width="199"
            height="199"
            rx="9.5"
            stroke="#EEEEEE"
          />
        </svg>
      )}
    </>
  );
};

export default SecondScoringStatus;