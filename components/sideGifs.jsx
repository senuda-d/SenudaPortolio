
"use client"
import styles from "../styles/Home.module.css";
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function SideGifs() {
  const { scrollYProgress } = useScroll()

  // Surfing man moves left → right and fades out
  const surfX = useTransform(scrollYProgress, [0, 0.4], ["0%", "120%"])
  const surfOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])

  // Meditation guy appears after surf disappears
  const meditateX = useTransform(scrollYProgress, [0.4, 0.8], ["-120%", "0%"])
  const meditateOpacity = useTransform(scrollYProgress, [0.45, 0.8], [0, 1])

  return (
    <>
      {/* Surfing Man */}
      <motion.div
        style={{ x: surfX, opacity: surfOpacity }}
        className="fixed bottom-10 left-0 z-40 pointer-events-none"
      >
        <div className="gif-wrapper">
        <Image
          src="\surfing.gif"
          width={220}
          height={220}
          alt="Surfing"
        />
        </div>
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
