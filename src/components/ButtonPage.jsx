import Button from "./Button";
import { MdLocalGroceryStore } from "react-icons/md";

function ButtonPage() {
  return (
    <div className="py-12 px-4 lg:px-24 flex flex-col gap-10">
      <h1 className="text-[#4F4F4F] font-poppins text-2xl font-semibold">
        Buttons
      </h1>
      <Button
        name="<Button default>"
        config="bg-[#E0E0E0] hover:bg-[#AEAEAE] text-[#3F3F3F]"
      />
      <Button
        name="<Button outline>"
        config="bg-white outline outline-2 outline-[#3D5AFE] hover:bg-[#2962FF]/10 text-[#3D5AFE]"
      />
      <Button
        name="<Button text>"
        config="hover:bg-[#2962FF]/10 text-[#3D5AFE]"
      />
      <Button name="<Button disableShadow>" config="bg-[#3D5AFE] text-white" />

      <div className="flex flex-col md:flex-row gap-10 md:gap-[74px] w-screen md:w-[500px]">
        <Button
          name="<Button disabled>"
          config="bg-[#E0E0E0] text-[#9E9E9E] hover:cursor-not-allowed"
        />
        <Button
          name="<Button text disabled>"
          config=" text-[#9E9E9E] hover:cursor-not-allowed"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-[74px] w-screen md:w-[500px]">
        <Button
          name="<Button startIcon>"
          fIcon={<MdLocalGroceryStore />}
          config="bg-[#2962FF] flex items-center justify-around text-white w-[100px] hover:bg-blue-900"
        />
        <Button
          name="<Button startIcon>"
          eIcon={<MdLocalGroceryStore />}
          config="bg-[#2962FF] flex items-center justify-around text-white w-[100px] hover:bg-blue-900"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-screen md:w-[800px]">
        <Button
          name="<Button size=sm>"
          config="bg-[#2962FF] w-[73px] text-white hover:bg-sky-900"
        />
        <Button
          name="<Button size=md>"
          config="bg-[#2962FF] text-white hover:bg-sky-900"
        />
        <Button
          name="<Button size=lg>"
          config="bg-[#2962FF] w-[93px] text-white hover:bg-sky-900"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-screen md:w-[800px]">
        <Button
          name="<Button color=default>"
          config="bg-[#E0E0E0] hover:bg-[#AEAEAE]"
        />
        <Button
          name="<Button color=primary>"
          config="bg-[#2962FF] text-white hover:bg-[#0039CB]"
        />
        <Button
          name="<Button color=secondary>"
          config="bg-[#455A64] text-white hover:bg-[#1C313A]"
        />
        <Button
          name="<Button color=danger>"
          config="bg-[#D32F2F] text-white hover:bg-[#9A0007]"
        />
      </div>

      <footer className=" font-poppins md:text-sm text-[#A9A9A9] text-xs md:text-center pt-10">
      Created by <a href="https://github.com/Bagse" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold hover:text-[#F7542E]">Bagse</a> - <a href="https://devchallenges.io/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7542E]" >devChallenges.io</a>
      </footer>
    </div>
  );
}

export default ButtonPage;
