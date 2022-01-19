import { useState } from 'react'
import { Switch } from '@headlessui/react'

const Toggle = () => {

  


  return (
    <div className="container mx-auto mt-20">
      <div className="ml-28">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-gradient-to-r from-[#24A6B2] to-[#00ECCD]' : 'bg-gradient-to-r from-[#FFABC9] to-[#FFAD32]'}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </div>
    </div>
  )
}

export default Toggle;
