interface PropTypes {
    btnOrange: boolean
}

export default function BtnComponent({btnOrange}:PropTypes) {
    return (
        <div className={`w-[151px] h-[48px] ${btnOrange ? 'bg-orange text-white hover:bg-bright-orange' : 'bg-light-gray text-dark-blue hover:bg-dark-blue hover:text-white'} rounded-xl uppercase content-center font-bold text-center text-body leading-body font-barlowm`}>pre-order now</div>
    )
}