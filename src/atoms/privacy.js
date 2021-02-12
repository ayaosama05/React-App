const Privacy = () => {
    return ( 
        <div className="misc-box flex items-center w-full">
              <label className="switch">
                <input type="checkbox" className="switch-checkbox"/>
                <span className="slider round"></span>
              </label>

              <p className="ml-xs text-xs text-dark-grey font-normal">
                Hide my identity<span className="ml-mv">Privacy:</span>
                <span className="ml-xs text-sm font-medium">Public</span>
              </p>
              <svg className="ml-xxs" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.862 6.19534L7.99998 9.05734L5.13798 6.19534L4.19531 7.13801L7.99998 10.9427L11.8046 7.13801L10.862 6.19534Z" fill="#5B6366"></path>
              </svg>
        </div>
     );
}
 
export default Privacy;