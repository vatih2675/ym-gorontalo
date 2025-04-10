import { useState } from 'react'

const BpjphDetail = ({bpj}) => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <>
            <div onClick={handleShow} className="w-1/5 h-28 text-center p-5 rounded-xl border border-purple-700 flex justify-center items-center cursor-pointer font-medium text-purple-800 hover:text-white hover:bg-purple-700 hover:shadow-md hover:scale-110 duration-300">{bpj.title}</div>
            <section className={`bg-white top-0 z-20 overflow-scroll transition-all duration-300 ${show ? "fixed opacity-100 size-full" : "opacity-0 size-0"}`}>
                <div className="w-full px-4 py-2 flex justify-between items-center bg-purple-600 shadow sticky top-0 cursor-default">
                    <h1 className='text-white font-black'>{bpj.title}</h1>
                    <i className='bi-x-lg text-purple-400 cursor-pointer hover:text-purple-950 transition-all duration-300' onClick={handleShow}></i>
                </div>
                <div>
                    {bpj.page}
                    <section className="w-full h-full bg-purple-300 py-10 px-5 flex justify-center items-center gap-5 shadow-md">
                        <iframe className="w-8/12 aspect-video mx-auto rounded-3xl shadow-xl" src={bpj.youtube} title="YouTube video player"></iframe>
                    </section>
                </div>
            </section>
        </>
    );
}

export default BpjphDetail
