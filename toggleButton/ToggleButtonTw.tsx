


import { Button, CustomFlowbiteTheme, Flowbite, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import classNames from 'classnames';

interface p{
 big: any,
 small:any,
 size?: any
  
}
/* 
  big: {active_bg:'',active_border: '',bg: '',border:''}
  small: {active_bg:'',bg: '',border:''}
  size: {small_width:'',small_height:'',big_width:'',big_height: ''}
*/
export function ToggleButtonTw({big,small,size}:p) {
  const [isSelected, setIsSelected] = useState(false);
  //  logic to evaluate big and small
  
  let states = {
      big: {
        active_bg: big.active_bg?big.active_bg: 'bg-sec',
        bg: big.bg?big.bg: 'bg-white',
        border: big.border?big.border: 'border-bodyText',
        active_border: big.active_border?big.active_border: 'border-pri',
      },
      small: {
        active_bg: small.active_bg?small.active_bg: 'bg-pri',
        bg: small.bg?small.bg: 'bg-bodyText',
      },
  }
  return (
    <div onClick={()=> setIsSelected(prev=> !prev)} className={classNames(`flex p-1 cursor-pointer relative items-center rounded-full ${size?.big_width?size?.big_width: 'w-10'} ${size?.big_height?size?.big_height: 'h-6'}  transition-all duration-500 `,{
      [`${states.big.active_bg} border-4 ${states.big.active_border}`]: isSelected,
      [`border-4 ${states.big.border} ${states.big.bg}`]: !isSelected,
    })}>
      <span className={classNames(`${size?.small_width?size?.small_width: 'w-4'} absolute z-10 transition-all duration-500 rounded-full ${size?.small_height?size?.small_height:'h-4'} shadow-lg`,{
      [`-right-0 ${states.small.active_bg}`]: isSelected,
      [`${states.small.bg} -left-0`]: !isSelected,
    })} />
    </div>
  );
}



