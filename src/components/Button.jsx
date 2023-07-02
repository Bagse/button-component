function Button({name, config, fIcon, eIcon}) {
  return (
    <div className="flex flex-col gap-3">
        <h2 className="text-[#333333] font-noto text-sm md:text-base">{name}</h2>
        <button className={`${config} rounded-md py-2 px-1 w-[82px] font-noto transition`}>{fIcon}Default{eIcon}</button>
    </div>
  )
}

export default Button