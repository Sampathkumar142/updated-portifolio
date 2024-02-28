import React from 'react'
export default function Bio() {
  return (
    <section className='ph:grid ph:grid-cols-2 w-full ph:h-[80vh] my-2 ph:gap-4 overflow-auto flex flex-col-reverse'>
        <div className=' flex flex-col ph:justify-end items-center ph:m-4 justify-start  m-3 '>
            <h2 className='ph:my-3 my-2 ph:text-xl text-base '>Hi,This is <span className='ph:text-2xl text-lg text-[#ff6347]'>Sampath Kumar Parvathini </span>!</h2>
            <p className='text-ellipsis ph:text-base text-xs indent-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt ullam perspiciatis nam, libero velit eveniet. Consequuntur suscipit dolores, delectus iusto, harum consectetur minus inventore natus soluta vitae, cupiditate excepturi in! Corrupti amet rerum asperiores eveniet unde quia illo sunt neque beatae atque nisi deserunt, nam pariatur et odio recusandae sit molestiae dicta ipsam repellat? Officia ipsum numquam ea tempore, repudiandae ut, cum facilis labore, beatae sed repellat saepe harum.</p>
        </div>
        <div className='flex justify-center items-center' >
          <img  className='ph:h-[50vh] ph:w-[50%] h-[30vh] rounded-[100%]  object-cover' src='/asserts/bio.png' alt="" />
        </div>
    </section>
  )
}
