import fbSvg from "./buttonSvg"
import { VK, IN,FB } from "./buttonSvgConstant"
import { VkSvg, FbSvg,InSvg } from "./buttonSvg"


function ButtonSvg({type}) {

  switch(type){
    case VK: return <VkSvg/>
    case FB: return <FbSvg/>
    case IN: return <InSvg/>
    default: return null
  }

}

export default ButtonSvg