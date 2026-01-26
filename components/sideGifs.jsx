
"use client"
import styles from "../styles/Home.module.css";
import { motion, useScroll, useTransform , useAnimation } from "framer-motion"
import Image from "next/image"
import { useState ,useEffect} from "react"


export default function SideGifs() {
  const { scrollYProgress } = useScroll()
  const [introDone, setIntroDone] = useState(false)
  const controls = useAnimation()


  // Surfing man moves left → right and fades out
  const surfX = useTransform(scrollYProgress, [0, 0.4], ["0%", "120%"])
  const surfOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])

  // Meditation guy appears after surf disappears
  const meditateX = useTransform(scrollYProgress, [0.4, 0.8], ["-120%", "0%"])
  const meditateOpacity = useTransform(scrollYProgress, [0.45, 0.8], [0, 1])

  useEffect(() => {
    async function sequence() {

      controls.set({ x: "-120vw" })
      // 1️⃣ Slide across to the right
      await controls.start({ x: "120vw", transition: { duration: 13, ease: "easeInOut" } })
      
      // 2️⃣ Instantly jump off-screen left
       controls.set({ x: "-120vw" })
      
      // 3️⃣ Slide to resting position
      await controls.start({ x: "0vw", transition: { duration: 2, ease: "easeInOut" } })
    }
    sequence()
  }, [controls])

  return (
    <>
      {/* Surfing Man */}
     <motion.div
      initial={{ x: "-100vw" }} // start off left
      animate={controls}
      className="fixed bottom-10 left-0 z-40 pointer-events-none"
    >
      <Image
        src="/surfing.gif"
        width={220}
        height={220}
        alt="Surfing"
      />
    </motion.div>

      {/* Meditation Guy */}
      <motion.div
        style={{ x: meditateX, opacity: meditateOpacity }}
        className="fixed bottom-10 right-0 z-40 pointer-events-none"
      >
        <div className={styles.meditationGif}>
          <Image
            src="/meditation.gif"
            width={220}
            height={220}
            alt="Meditation"
          />
        </div>
      </motion.div>
    </>
  )
}
