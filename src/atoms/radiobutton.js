const RadioButton = (props) => {

  const {type , name} = props;
    return ( 
        <button className="misc-box flex items-center gap-xs bg-grey-bg py-xxsv px-sv rounded-full focus:border focus:border-dark-grey" >
        <label className="radio-cat">
          <input type="radio" className="radio" name={name}/>
          <div className="radio-box radio-small radio-tab"></div>
        </label>
        {type === "Image Pool" ?
        <svg className=" w-m h-m" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.49902 11C8.32745 11 8.99902 10.3284 8.99902 9.5C8.99902 8.67157 8.32745 8 7.49902 8C6.6706 8 5.99902 8.67157 5.99902 9.5C5.99902 10.3284 6.6706 11 7.49902 11Z" fill="#5B6366"/>
        <path d="M10.499 14L8.99902 12L5.99902 16H8.99902H11.999H17.999L13.499 10L10.499 14Z" fill="#5B6366"/>
        <path d="M19.999 4H3.99902C2.89602 4 1.99902 4.897 1.99902 6V18C1.99902 19.103 2.89602 20 3.99902 20H19.999C21.102 20 21.999 19.103 21.999 18V6C21.999 4.897 21.102 4 19.999 4ZM3.99902 18V6H19.999L20.001 18H3.99902Z" fill="#5B6366"/>
        </svg>       
        : type === "Text Pool" ?
        <svg  className=" w-m h-m" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.6665 7.33333H9.33317V8.66666H4.6665V7.33333ZM4.6665 4.66666H11.9798V6H4.6665V4.66666ZM4.6665 10H13.3332V11.3333H4.6665V10ZM2.6665 2.66666H3.99984V13.3333H2.6665V2.66666Z" fill="#5B6366"></path>
        </svg>
        :
        <svg className=" w-m h-m" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.903 8.586C19.854 8.48 19.793 8.379 19.707 8.293L13.707 2.293C13.621 2.207 13.52 2.146 13.414 2.097C13.384 2.083 13.352 2.075 13.32 2.064C13.236 2.036 13.15 2.018 13.061 2.013C13.04 2.011 13.021 2 13 2H6C4.897 2 4 2.897 4 4V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V9C20 8.979 19.989 8.96 19.987 8.938C19.982 8.849 19.965 8.763 19.936 8.679C19.926 8.647 19.917 8.616 19.903 8.586ZM16.586 8H14V5.414L16.586 8ZM6 20V4H12V9C12 9.553 12.447 10 13 10H18L18.002 20H6Z" fill="#5B6366"></path>
        <path d="M8 12H16V14H8V12ZM8 16H16V18H8V16ZM8 8H10V10H8V8Z" fill="#5B6366"></path>
        </svg>
        }
        <span className="hidden md:inline text-sm font-medium text-dark-grey">{type}</span>
      </button>
     );
}
 
export default RadioButton;