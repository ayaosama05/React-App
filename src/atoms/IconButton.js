const IconButton = ({type}) => {

    return(
        <div>
            {type === 'like'? 
                   <button className="voteBTN hover:shadow-heart focus:outline-none absolute transform hover:scale-110 transition duration-500	shadow-dark bottom-m right-m w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                   <svg width="20" height="19" viewBox="0 0 20 19" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18 6H12.388L13.511 2.633C13.713 2.025 13.611 1.351 13.236 0.831C12.861 0.311 12.253 0 11.612 0H10C9.703 0 9.422 0.132 9.231 0.36L4.531 6H2C0.897 6 0 6.897 0 8V17C0 18.103 0.897 19 2 19H5H15.307C16.136 19 16.888 18.479 17.18 17.702L19.937 10.351C19.979 10.239 20 10.12 20 10V8C20 6.897 19.103 6 18 6ZM2 8H4V17H2V8ZM18 9.819L15.307 17H6V7.362L10.468 2H11.614L10.052 6.683C9.949 6.988 10.001 7.323 10.189 7.584C10.377 7.846 10.679 8 11 8H18V9.819Z" fill="white"/>
                     </svg>   
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                       <path d="M4 21H5V8H4C2.896 8 2 8.896 2 10V19C2 20.104 2.896 21 4 21ZM20 8H13L14.122 4.632C14.554 3.337 13.59 2 12.225 2H12L7 7.438V21H18L21.912 12.404C21.937 12.291 21.976 12.114 22 12V10C22 8.896 21.104 8 20 8Z" fill="white"/>
                       </svg>                                                   
             </button>
              : 
              <button className="voteBTN hover:shadow-error focus:outline-none absolute transform hover:scale-110 transition duration-500 bottom-m right-4xl w-10 h-10 rounded-full bg-error flex items-center justify-center">
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0H15H4.693C3.864 0 3.112 0.521 2.82 1.298L0.063 8.649C0.021 8.761 0 8.88 0 9V11C0 12.103 0.897 13 2 13H7.612L6.49 16.367C6.287 16.975 6.389 17.649 6.764 18.169C7.14 18.689 7.746 19 8.388 19H10C10.297 19 10.578 18.868 10.769 18.64L15.469 13H18C19.103 13 20 12.103 20 11V2C20 0.897 19.103 0 18 0ZM9.531 17H8.386L9.948 12.316C10.051 12.011 9.999 11.676 9.811 11.415C9.623 11.154 9.321 11 9 11H2V9.181L4.693 2H14V11.638L9.531 17ZM16 11V2H18L18.001 11H16Z" fill="white"/>
                </svg> 
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M18 0H17V13H18C19.104 13 20 12.104 20 11V2C20 0.896 19.104 0 18 0ZM2 13H9L7.878 16.368C7.446 17.663 8.41 19 9.775 19H10L15 13.562V0H4L0.063 8.649C0.042 8.748 0.021 8.843 0 8.942V11C0 12.104 0.896 13 2 13Z" fill="white"/>
                 </svg>
            </button>
            }
        </div>
    );
}

export default IconButton;