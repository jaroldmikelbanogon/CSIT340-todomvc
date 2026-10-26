function Todos() {
  return (
    <section className="mx-auto max-w-[550px]">
            <h1 className="text-center text-[80px] font-extralight text-[#b83f45]">
                todos
            </h1>

            <div className="relative bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)]">
                <form>
                    <input
                        className="h-[65px] w-full py-4 pr-4 pl-[60px] text-2xl shadow-[inset_0_-2px_1px_rgba(0,0,0,0.03)] outline-none placeholder:text-black/40 placeholder:italic focus:shadow-[0_0_2px_2px_#cf7d7d]"
                        placeholder="What needs to be done?"
                    />
                </form>
                <main className="relative border-t border-[#e6e6e6]">
                    <input id="toggle-all" type="checkbox" className="peer sr-only" />
                    <label
                        htmlFor="toggle-all"
                        className="absolute -top-[66px] left-0 flex h-[65px] w-[60px] cursor-pointer items-center justify-center text-[22px] text-[#949494] peer-checked:text-[#484848]"
                    >
                        <span className="rotate-90">❯</span>
                    </label>
                </main>
            </div>
    </section>
  )
}
 
export default Todos