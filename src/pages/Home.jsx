import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import { CustomButton } from '../components'
const Home = () => {

  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      { snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img 
              src='./threejs.png'
              alt='logo'
              className='w-8 h-8 object-contain'
            />

            <motion.div className='home-content' {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className='head-text'>
                  LET&rsquo;S <br className='xl:block hidden' /> DO IT.
                </h1>
              </motion.div>

              <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                <p className='max-w-md font-normal text-gray-600 text-base'>
                  Create your unique and exclusive shirt with our brand-new 3D customization tool.
                  <strong>Unless your imagination </strong> {" "} and define your style.
                </p>
              </motion.div>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyes = "w-fit px-4 py-2.5 font-bold text-sm"
              />

            </motion.div>
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home