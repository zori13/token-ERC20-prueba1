export default function Header(){
    return(
     <header className="border-b shadow py-2 px-3 flex justify-between items-center">        
        <img src="../estrella-icon.png" alt= "estrella logo" 
        className="sm:hidden" width={47}/>
        <img src="/estrella-p.png" alt= "estrella token"
        className="hidden sm:block" width={300} />
        <button className="bg-gray rounded-xl px-2 text-sm py-2">Wallet</button>        
     </header>
    )  
}