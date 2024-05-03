import './style.scss';

function Button({btnType,onClick,className}) {
  return <>
<button className={className} onClick={onClick}>{btnType}</button>
  </>
}

 export {Button};