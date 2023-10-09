const Submit = ({ isActive }: { isActive: boolean }) => {
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
          <path
            d="M98.6465 172.564H96.7832V156.674H98.6465V172.564ZM84.6895 168.047C85.4277 167.596 86.043 167.001 86.5352 166.263C87.0332 165.519 87.3994 164.698 87.6338 163.802C87.874 162.899 87.9941 161.971 87.9941 161.016V159.961H85.2344V158.379H92.4414V159.961H89.875V161.016C89.875 161.941 89.9893 162.832 90.2178 163.688C90.4463 164.543 90.8008 165.319 91.2812 166.017C91.7676 166.714 92.377 167.273 93.1094 167.695L91.9492 169.137C91.2344 168.715 90.6279 168.146 90.1299 167.432C89.6318 166.711 89.2393 165.882 88.9521 164.944C88.6592 165.964 88.2549 166.866 87.7393 167.651C87.2295 168.437 86.6113 169.055 85.8848 169.506L84.6895 168.047ZM91.2812 162.211H93.5664V156.973H95.4121V171.791H93.5664V163.793H91.2812V162.211ZM114.977 164.988H108.719V166.148H113.201V169.875H104.166V170.965H113.641V172.424H102.25V168.539H111.285V167.555H102.232V166.148H106.785V164.988H100.562V163.547H114.977V164.988ZM101.195 161.561C102.221 161.508 103.111 161.388 103.867 161.2C104.629 161.007 105.238 160.761 105.695 160.462C106.152 160.157 106.448 159.814 106.583 159.434H101.951V157.975H106.785V156.639H108.719V157.975H113.588V159.434H108.921C109.05 159.814 109.34 160.157 109.791 160.462C110.248 160.761 110.857 161.007 111.619 161.2C112.387 161.388 113.289 161.508 114.326 161.561L113.746 163.02C112.311 162.932 111.077 162.697 110.046 162.316C109.015 161.936 108.25 161.426 107.752 160.787C107.254 161.426 106.489 161.936 105.458 162.316C104.427 162.697 103.188 162.932 101.74 163.02L101.195 161.561Z"
            fill="#9E9E9E"
          />
          <rect x="69" y="69" width="62" height="62" rx="31" fill="#E0E0E0" />
          <ellipse cx="98" cy="99" rx="29" ry="30" fill="#EEEEEE" />
          <path
            d="M109.589 90.4271C109.041 89.8576 108.153 89.8576 107.606 90.4271L94.7106 106.511C94.1628 107.08 94.1628 108.003 94.7106 108.573C95.2583 109.142 96.1463 109.142 96.6941 108.573L109.589 92.4892C110.137 91.9198 110.137 90.9965 109.589 90.4271Z"
            fill="#9E9E9E"
          />
          <path
            d="M85.4112 96.2757C84.8629 96.8457 84.8629 97.7699 85.4112 98.34L94.71 108.572C95.2583 109.142 96.1473 109.142 96.6956 108.572C97.2439 108.002 97.2439 107.078 96.6956 106.508L87.3968 96.2757C86.8485 95.7057 85.9595 95.7057 85.4112 96.2757Z"
            fill="#9E9E9E"
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
      ) : (
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="200" rx="10" fill="#D6E8FF" />
          <path
            d="M98.6465 172.564H96.7832V156.674H98.6465V172.564ZM84.6895 168.047C85.4277 167.596 86.043 167.001 86.5352 166.263C87.0332 165.519 87.3994 164.698 87.6338 163.802C87.874 162.899 87.9941 161.971 87.9941 161.016V159.961H85.2344V158.379H92.4414V159.961H89.875V161.016C89.875 161.941 89.9893 162.832 90.2178 163.688C90.4463 164.543 90.8008 165.319 91.2812 166.017C91.7676 166.714 92.377 167.273 93.1094 167.695L91.9492 169.137C91.2344 168.715 90.6279 168.146 90.1299 167.432C89.6318 166.711 89.2393 165.882 88.9521 164.944C88.6592 165.964 88.2549 166.866 87.7393 167.651C87.2295 168.437 86.6113 169.055 85.8848 169.506L84.6895 168.047ZM91.2812 162.211H93.5664V156.973H95.4121V171.791H93.5664V163.793H91.2812V162.211ZM114.977 164.988H108.719V166.148H113.201V169.875H104.166V170.965H113.641V172.424H102.25V168.539H111.285V167.555H102.232V166.148H106.785V164.988H100.562V163.547H114.977V164.988ZM101.195 161.561C102.221 161.508 103.111 161.388 103.867 161.2C104.629 161.007 105.238 160.761 105.695 160.462C106.152 160.157 106.448 159.814 106.583 159.434H101.951V157.975H106.785V156.639H108.719V157.975H113.588V159.434H108.921C109.05 159.814 109.34 160.157 109.791 160.462C110.248 160.761 110.857 161.007 111.619 161.2C112.387 161.388 113.289 161.508 114.326 161.561L113.746 163.02C112.311 162.932 111.077 162.697 110.046 162.316C109.015 161.936 108.25 161.426 107.752 160.787C107.254 161.426 106.489 161.936 105.458 162.316C104.427 162.697 103.188 162.932 101.74 163.02L101.195 161.561Z"
            fill="#2174D8"
          />
          <rect x="69" y="69" width="62" height="62" rx="31" fill="#74D5FF" />
          <ellipse cx="98" cy="99" rx="29" ry="30" fill="#2174D8" />
          <path
            d="M109.589 90.4271C109.041 89.8576 108.153 89.8576 107.606 90.4271L94.7106 106.511C94.1628 107.08 94.1628 108.003 94.7106 108.573C95.2583 109.142 96.1463 109.142 96.6941 108.573L109.589 92.4892C110.137 91.9198 110.137 90.9965 109.589 90.4271Z"
            fill="white"
          />
          <path
            d="M85.4112 96.2757C84.8629 96.8457 84.8629 97.7699 85.4112 98.34L94.71 108.572C95.2583 109.142 96.1473 109.142 96.6956 108.572C97.2439 108.002 97.2439 107.078 96.6956 106.508L87.3968 96.2757C86.8485 95.7057 85.9595 95.7057 85.4112 96.2757Z"
            fill="white"
          />
        </svg>
      )}
    </>
  );
};

export default Submit;