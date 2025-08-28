

import React from 'react';
import { TextAnimate } from "@/components/magicui/text-animate";
import Logomarquee  from './marquee';


function Apropo() {
  
  return <div  className="items-center overflow-hidden  p-5">
    <p className=' text-3xl font-bold text-center my-3'>A propos</p>
     <TextAnimate animation="blurIn" as="h1" className="mx-5 text-center my-3 text-md">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
      It is a long established fact  software like Aldus PageMaker including versions of Lorem Ipsum.
    </TextAnimate>
<div className='flex items-center justify-center w-full'>
<Logomarquee/>

</div>

    </div>;
}
export default Apropo;