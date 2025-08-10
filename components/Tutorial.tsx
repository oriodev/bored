interface TutorialProps {
  visible: boolean
}

const Tutorial = ({ visible }: TutorialProps) => {
  return (
    <div className={`${visible ? 'block' : 'hidden'} flex flex-col gap-5 items-center w-2/3 h-1/2 bg-pink-200 p-10 rounded-lg text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden overflow-y-scroll`}>
      {/* HEADING */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">BORED</h1>
        <h2 className="text-lg italic text-center">an idle incremental game</h2>
      </div>

      {/* HOW TO PLAY */}
      <div className="flex flex-col justify-center items-center gap-3">
        <h3 className="text-3xl text-center">HOW TO PLAY</h3>
        <div className="flex flex-col gap-1 text-lg">
          <p>1. press the space bar or tap the screen to make the circle spin</p>
          <p>2. buy upgrades to make the circle spin faster</p>
          <p>3. unlock auto upgrades to make the circle spin on it&apos;s own and unlock the next circle</p>
          <p>4. prestige for a permanent upgrade to how many numbers each spin gives</p>
          <p>5. the goal is to make all of the circles spin so fast they stop</p>
        </div>
      </div>

      {/* CREDITS */}
      <div>
        <h3 className="text-2xl text-center">created by ori & yas</h3>
      </div>
    </div>
  )
}

export default Tutorial;